function isValid(s: string): boolean {
  const a: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "{" || c === "[" || c === "(") {
      a.push(c);
    } else {
      const top = a.pop();
      if (c === "}" && top !== "{") return false;
      if (c === "]" && top !== "[") return false;
      if (c === ")" && top !== "(") return false;
    }
  }

  if (a.length !== 0) return false;

  return true;
}
