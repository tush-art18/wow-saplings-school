/**
 * Client-side image compression utility using HTML5 Canvas.
 * Compresses an image file to a maximum dimension and quality to speed up uploads and prevent timeouts.
 */
export async function compressImage(
  file: File,
  maxWidth: number = 1200,
  maxHeight: number = 1200,
  quality: number = 0.75
): Promise<File> {
  // If the file is not an image, return it as-is
  if (!file.type.startsWith("image/")) {
    return file;
  }

  // Also bypass if it is a gif (to prevent losing animation frames)
  if (file.type === "image/gif") {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate aspect ratio and target dimensions
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          // Canvas support missing or context creation failed: return original file
          resolve(file);
          return;
        }

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Convert canvas to blob (always convert to jpeg or webp to reduce size)
        const outputType = file.type === "image/png" ? "image/jpeg" : file.type;
        
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }
            // Create a new file from the blob, keeping the original name (but with extension changed to jpg if output type changed)
            let newName = file.name;
            if (outputType === "image/jpeg" && !newName.toLowerCase().endsWith(".jpg") && !newName.toLowerCase().endsWith(".jpeg")) {
              newName = newName.substring(0, newName.lastIndexOf(".")) + ".jpg";
            }
            const compressedFile = new File([blob], newName, {
              type: outputType,
              lastModified: Date.now(),
            });
            
            // Only use the compressed file if it is actually smaller than the original!
            if (compressedFile.size < file.size) {
              console.log(
                `Compressed ${file.name} from ${(file.size / 1024).toFixed(1)}KB to ${(compressedFile.size / 1024).toFixed(1)}KB`
              );
              resolve(compressedFile);
            } else {
              console.log(`Original file is smaller; keeping original: ${(file.size / 1024).toFixed(1)}KB`);
              resolve(file);
            }
          },
          outputType,
          quality
        );
      };

      img.onerror = () => {
        resolve(file);
      };

      img.src = event.target?.result as string;
    };

    reader.onerror = () => {
      resolve(file);
    };

    reader.readAsDataURL(file);
  });
}
