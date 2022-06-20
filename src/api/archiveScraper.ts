export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getAnswersOfDate = async (date: Date): Promise<string[]> => {
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const proxyUrl = 'https://cors.bridged.cc/';
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const url = `${proxyUrl}https://spellingbeeanswers.com/spelling-bee-${month}-${day}-${year}-answers`;
    console.log(url)
    return await fetch(url,
        {mode: 'cors'})
        .then(response => response.text())
        .then(html => {
            const answers: string[] = []
            const parser = new DOMParser().parseFromString(html, "text/html");
            const links = parser.getElementsByTagName("a");
            for (let i = 0; i < links.length; i++) {
                const link = links.item(i);
                if (link?.getAttribute("href")?.includes("wordunscrambler.org/")) {
                    const textContent: string | null = link.textContent;
                    if (textContent) {
                        answers.push(textContent.split("+")[0])
                    }
                }
            }
            console.log(answers)
            return answers;
        })
};

export const getAllowedLetters = (answers: string[]): string[] => {
    const letters: string[] = [];
    for (let letter of answers.join('')) {
        if (!letters.includes(letter))
            letters.push(letter);
    }
    return letters.slice(1);
};

export const getCoreLetter = (allowedLetters: string[], answers: string[]): string => {
    let letterCounts = allowedLetters.map(letter => answers.filter(answer => answer.includes(letter)).length);
    return allowedLetters[letterCounts.indexOf(Math.max(...letterCounts))];
};

