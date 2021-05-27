const generateAnswers = (duplicated) => {
  let answer = {};
  do {
    answer = {
      1: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
      2: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
      3: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
      4: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
    };
  } while (
    Array.from(new Set(Object.values(answer))).length !==
    4 - duplicated
  );
  return answer;
  // generateAnswers(0) = no duplicates, generateAnswers(1) = 1 duplicated color
};
