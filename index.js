const wordCapitalize = (word) =>
	word ? word[0].toUpperCase() + word.slice(1) : "";

export const capitalizeText = (sentence, justFirst = false) => {
	if (justFirst) {
		return wordCapitalize(sentence.toLowerCase());
	}

	return sentence.toLowerCase().split(" ").map(wordCapitalize).join(" ");
};
