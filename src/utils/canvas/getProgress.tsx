/**
 * Returns percentage of uncovered image based on pixels
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} context
 * @returns {number} - between 0 and 100
 */
export function getProgress(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): number {
  const totalPixels: number = canvas.width * canvas.height;
  const data: Uint8ClampedArray = context.getImageData(0, 0, canvas.width, canvas.height).data;

  let uncoveredPixels = 0;

  for (let i=0; i<data.length; i += 4) {
    if (
      data[i + 0] !== 0 ||
      data[i + 1] !== 0 ||
      data[i + 2] !== 0 ||
      data[i + 3] !== 0
    ) {
      uncoveredPixels++;
    }
  }

  return parseInt(`${uncoveredPixels / totalPixels * 100}`, 10);
}
