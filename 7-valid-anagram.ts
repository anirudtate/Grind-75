function isAnagram(s: string, t: string): boolean {
  const ss = s.split("").sort();
  const tt = t.split("").sort();
  return ss.join("").localeCompare(tt.join("")) === 0;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
