function dfsFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  originalColor: number,
) {
  if (image?.[sr]?.[sc] !== originalColor) {
    return;
  }
  image[sr][sc] = color;
  dfsFill(image, sr, sc + 1, color, originalColor);
  dfsFill(image, sr, sc - 1, color, originalColor);
  dfsFill(image, sr + 1, sc, color, originalColor);
  dfsFill(image, sr - 1, sc, color, originalColor);
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  if (image[sr][sc] === color) return image;
  dfsFill(image, sr, sc, color, image[sr][sc]);
  return image;
}
