import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {getAllowedLetters, getAnswersOfDate, getCoreLetter, monthNames} from "../../api/archiveScraper";

const _ = require('lodash');

const App = () => {
        const [answers, setAnswers] = useState<string[]>([]);
        const [allowedLetters, setAllowedLetters] = useState<string[]>([]);
        const [coreLetter, setCoreLetter] = useState<string>('');
        const [guessFeedback, setGuessFeedback] = useState<string>('');
        const [found, setFound] = useState<string[]>([]);
        const [missed, setMissed] = useState<string[]>([]);
        const [currentDate, setCurrentDate] = useState<Date>(new Date(Date.now()));

        const initializeGame = async () => {
            setFound([]);
            setMissed([]);
            let answers: string[] = await getAnswersOfDate(currentDate);
            let allowedLetters: string[] = getAllowedLetters(answers);
            setAnswers(answers);
            setAllowedLetters(allowedLetters);
            setCoreLetter(getCoreLetter(allowedLetters, answers));
        };

        const shuffleLetters = () => {
            setAllowedLetters(_.shuffle(allowedLetters));
        };

        const displayFeedback = (feedback: string) => {
            setGuessFeedback(feedback);
            _.delay(() => {
                setGuessFeedback('')
            }, 500);
        };

        const handleGuess = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const guess = event.currentTarget.value.toLowerCase();
            let keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.currentTarget.value = '';
                if (guess.length <= 3) {
                    displayFeedback("Too short");
                } else if (!answers.includes(guess)) {
                    if (Math.random() < 0.1) {
                        displayFeedback("Fuck you");
                    } else {
                        displayFeedback("Nope");
                    }
                } else if (found.includes(guess)) {
                    displayFeedback("Already found");
                } else {
                    displayFeedback("Nice!");
                    found.push(guess);
                    setFound(found);
                }
            }
        };

        const handleDone = () => {
            setMissed(answers.filter(answer => !found.includes(answer)));
        };

        const handleDateSelect = (event: any) => {
            setCurrentDate(new Date(event.target.value));
        };

        const nonCoreLetters = allowedLetters.filter(letter => letter !== coreLetter);

        useEffect(() => {
            initializeGame();
        }, [currentDate]);

        const dayMillis = 24 * 60 * 60 * 1000;
        const prevDate = new Date(currentDate.getTime() - dayMillis);
        const nextDate = new Date(currentDate.getTime() + dayMillis);
        const today = new Date(Date.now());

        return (
            <div className="App">
                <div className="dates-container-large">
                    <div className="previous-date" onClick={() => setCurrentDate(prevDate)}>
                        {`< ${monthNames[prevDate.getMonth()]} ${prevDate.getDate()}, ${prevDate.getFullYear()}`}
                    </div>
                    <div className="current-date">
                        <select id="date-selector" onChange={handleDateSelect}>
                            {_.range(1000).map((day: number) => {
                                const newDate = new Date(today.getTime() - (dayMillis * day));
                                return (
                                    <option
                                        key={day}
                                        value={`${monthNames[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`}>
                                        {`${monthNames[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="next-date"
                         onClick={() => setCurrentDate(nextDate)}>{`${monthNames[nextDate.getMonth()]} ${nextDate.getDate()}, ${nextDate.getFullYear()} >`}
                    </div>
                </div>

                <div className="dates-container-small">
                    <div className="previous-date" onClick={() => setCurrentDate(prevDate)}>
                        {`<  ${monthNames[prevDate.getMonth()]} ${prevDate.getDate()}`}
                    </div>
                    <div className="current-date">
                        <select id="date-selector" onChange={handleDateSelect}>
                            {_.range(365).map((day: number) => {
                                const newDate = new Date(currentDate.getTime() - (dayMillis * day));
                                return (
                                    <option
                                        key={day}
                                        value={`${monthNames[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`}>
                                        {`${monthNames[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="next-date"
                         onClick={() => setCurrentDate(nextDate)}>{`${monthNames[nextDate.getMonth()]} ${nextDate.getDate()}  >`}
                    </div>
                </div>

                <div className="game-content-container">
                    <div className="letters">
                        {nonCoreLetters.slice(0, 3)}
                        <span className="core-letter">{coreLetter}</span>
                        {nonCoreLetters.slice(3)}
                        <svg className="refresh-icon" onClick={shuffleLetters} aria-hidden="true" focusable="false"
                             data-prefix="fas" data-icon="sync"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"/>
                        </svg>
                    </div>
                    <input className="guess-input" onKeyPress={handleGuess}/>
                    <div className="bottom-panel">
                        <div className="found">
                            {found.map((word, index) =>
                                <div className="found-item" key={index}>{`${index + 1}. ${word}`}</div>
                            )}

                            {missed.map((word, index) =>
                                <div className="missed-item" key={index}>{`${index + found.length + 1}. ${word}`}</div>
                            )}
                        </div>
                        <div className="bottom-right-panel">
                            <div className="done-container" onClick={handleDone}>Show Answers</div>
                            <div className="num-remaining-container">{`${found.length}/${answers.length} found`}</div>
                        </div>
                    </div>

                </div>
                <div className="guess-feedback__outer-container">
                    <div
                        className={`guess_feedback ${guessFeedback.length ? 'guess_feedback__active' : ''} ${guessFeedback === 'Nice!' ? 'guess_feedback__correct' : ''}`}>
                        {guessFeedback}
                    </div>
                </div>
            </div>
        );
    }
;

export default App;
