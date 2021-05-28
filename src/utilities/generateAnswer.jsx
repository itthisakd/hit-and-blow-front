const generateAnswer = (duplicated, color) => {
  const colorsOnly = Object.keys(color).filter((key) => /^[A-Z]/.test(key));
  console.log(colorsOnly);

  let answer = {};
  do {
    answer = {
      1: colorsOnly[Math.floor(Math.random() * colorsOnly.length)],
      2: colorsOnly[Math.floor(Math.random() * colorsOnly.length)],
      3: colorsOnly[Math.floor(Math.random() * colorsOnly.length)],
      4: colorsOnly[Math.floor(Math.random() * colorsOnly.length)],
    };
  } while (
    Array.from(new Set(Object.values(answer))).length !==
    4 - duplicated
  );
  return answer;
  // generateAnswer(0) = no duplicates, generateAnswer(1) = 1 duplicated color
};

export default generateAnswer;
