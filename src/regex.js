export default function parsingMultipleMCQ(content, total){
  let regex;
  content = content.replace(/\n/g, "NEwlInE");
  let response = []

  for (let i = 1; i <= total; i++){
    if (total == 1) {
      response.push(parsingMCQ(content, i));
    } else if (total == i) {
      regex = new RegExp(`Q${i}\\..*`);
      response.push(parsingMCQ(content.match(regex)[0], i));
    } else {
      regex = new RegExp(
        `Q${i.toString()}\\..*?(?=Q${(i + 1).toString()}\\.)`
      );
      response.push(parsingMCQ(content.match(regex)[0], i));
    }
  }
  return response
};

// Parses a single question
function parsingMCQ(content, num) {
  let questionRegex = new RegExp(`Q${num.toString()}\\..*?(?=A\\.)`);
  let replaceRegex = new RegExp(`Q${num.toString()}\\.`);
  const question = content
    .match(questionRegex)[0]
    .replace(/NEwlInE/g, '\n')
    .replace(replaceRegex, '')
    .trim();
  const option1 = content
    .match(/A\..*?(?=B\.)/g)[0]
    .replace(/NEwlInE/g, '')
    .replace(/A\./, '')
    .trim();
  const option2 = content
    .match(/B\..*?(?=C\.)/g)[0]
    .replace(/NEwlInE/g, "")
    .replace(/B\./, "")
    .trim();
  const option3 = content
    .match(/C\..*?(?=D\.)/g)[0]
    .replace(/NEwlInE/g, "")
    .replace(/C\./, "")
    .trim();
  const option4 = content
    .match(/D\..*?(?=Answer)/g)[0]
    .replace(/NEwlInE/g, "")
    .replace(/D\./, "")
    .trim();
  const answer = answerIndex(
    content
      .match(/Answer:.*/g)[0]
      .replace(/NEwlInE/g, "")
      .replace(/Answer:/g, "")
      .trim()
  );
  return {
    question: question,
    answer: answer,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
  }
}

// returns index number associated with letter
function answerIndex(letter) {
  if (letter == "A") {
    return 0;
  } else if (letter == "B") {
    return 1;
  } else if (letter == "C") {
    return 2;
  } else return 3;
}