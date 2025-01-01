function isPalindrome(s: string): boolean {
  const lower = s.toLowerCase();
  const array: string[] = [];
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] >= "a" && lower[i] <= "z") {
      array.push(lower[i]);
    }
    if (lower[i] >= "0" && lower[i] <= "9") {
      array.push(lower[i]);
    }
  }

  const original = [...array];
  const reverse = array.reverse();
  return reverse.join("").localeCompare(original.join("")) === 0;
}
