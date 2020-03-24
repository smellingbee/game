import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {getAllowedLetters, getAnswersOfDate, getCoreLetter} from "../../api/archiveScraper";
import {DateHeader} from "../dateHeader/DateHeader";
import Cookies from 'universal-cookie';

const _ = require('lodash');
const cookies = new Cookies();
const storedCurrentDate = cookies.get('current_date');
let initialCurrentDate = new Date();
if (storedCurrentDate) {
    initialCurrentDate = new Date(storedCurrentDate);
}

const App = () => {
        const [answers, setAnswers] = useState<string[]>([]);
        const [allowedLetters, setAllowedLetters] = useState<string[]>(['loading...']);
        const [coreLetter, setCoreLetter] = useState<string>('');
        const [guessFeedback, setGuessFeedback] = useState<string>('');
        const [currentDate, setCurrentDate] = useState<Date>(initialCurrentDate);
        const [found, setFound] = useState<string[]>([]);
        const [missed, setMissed] = useState<string[]>([]);

        const initializeGame = async () => {
            setFound([]);
            setMissed([]);
            setAllowedLetters(['loading...']);
            setAnswers([]);
            setCoreLetter('');

            let answers: string[] = await getAnswersOfDate(currentDate);
            let allowedLetters: string[] = getAllowedLetters(answers);
            setAnswers(answers);
            setCoreLetter(getCoreLetter(allowedLetters, answers));
            if (allowedLetters.length === 0) {
                allowedLetters = ['Error']
            }
            setAllowedLetters(allowedLetters);
            const savedProgress = cookies.get(currentDate.toDateString());
            if (savedProgress) {
                setFound(savedProgress);
            }
        };

        const handleRefreshButtonClick = () => {
            if (allowedLetters[0].length > 1) {
                initializeGame();
            } else {
                setAllowedLetters(_.shuffle(allowedLetters));
            }
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
                    displayFeedback("Nope");
                } else if (found.includes(guess)) {
                    displayFeedback("Already found");
                } else {
                    displayFeedback("Nice!");
                    found.push(guess);
                    setFound(found);
                    cookies.set(currentDate.toDateString(), JSON.stringify(found));
                }
            }
        };

        const toggleAnswers = () => {
            if (missed.length) {
                setMissed([]);
            } else {
                setMissed(answers.filter(answer => !found.includes(answer)));
            }
        };

        const nonCoreLetters = allowedLetters.filter(letter => letter !== coreLetter);

        useEffect(() => {
            initializeGame();
            cookies.set('current_date', JSON.stringify(currentDate));
        }, [currentDate]);


        return (
            <div className="App">
                <DateHeader currentDate={currentDate} setCurrentDate={setCurrentDate}/>
                <div className="game-content-container">
                    <div className="letters">
                        {nonCoreLetters.slice(0, 3)}
                        <span className="core-letter">{coreLetter}</span>
                        {nonCoreLetters.slice(3)}
                        <svg className="refresh-icon" onClick={handleRefreshButtonClick} aria-hidden="true"
                             focusable="false"
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
                            <div className="done-container" onClick={toggleAnswers}>
                                {missed.length ? 'Hide Answers' : 'Show Answers'}
                            </div>
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
