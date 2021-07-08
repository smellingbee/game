export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getAnswersOfDate = async (date: Date): Promise<string[]> => {
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const proxyUrl = 'https://cors.bridged.cc/';
    return await fetch(`${proxyUrl}https://spellingbeeanswers.com/spelling-bee-${month}-${day}-${year}-answers`,
        {mode: 'cors'})
        .then(response => response.text())
        .then(html => {
            let answerDivs = new DOMParser().parseFromString(html, "text/html").getElementsByClassName('aanswer');
            const answers: string[] = [];
            for (let i = 0; i < answerDivs.length; i++) {
                let answer = answerDivs.item(i)?.innerHTML.substring(6);
                if (answer != null) {
                    answers.push(answer);
                }
            }
            return answers;
        })
};

export const getAllowedLetters = (answers: string[]): string[] => {
    const letters: string[] = [];
    for (let letter of answers.join('')) {
        if (!letters.includes(letter))
            letters.push(letter);
    }
    return letters;
};

export const getCoreLetter = (allowedLetters: string[], answers: string[]): string => {
    let letterCounts = allowedLetters.map(letter => answers.filter(answer => answer.includes(letter)).length);
    return allowedLetters[letterCounts.indexOf(Math.max(...letterCounts))];
};

