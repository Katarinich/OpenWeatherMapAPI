/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
export default function searchMatches(options, inputValue, amount) {
  const matches = [];
  const substrRegex = new RegExp(inputValue, 'i');
  let b = 0;

  for (let i = 0; i < options.length; i++) {
    substrRegex.test(options[i].name) && matches.push(options[i]) && b++;
    if (b > amount) break;
  }

  return matches;
}
