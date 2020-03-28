import React, {FC, useMemo} from "react";
import {monthNames} from "../../api/archiveScraper";
const _ = require('lodash');

export const dayMillis = 24 * 60 * 60 * 1000;

export interface DateHeaderProps {
    currentDate: Date;
    setCurrentDate: (arg0: Date) => void;
}

export const DateHeader: FC<DateHeaderProps> = (props) => {
    const prevDate = new Date(props.currentDate.getTime() - dayMillis);
    const nextDate = new Date(props.currentDate.getTime() + dayMillis);
    const today = new Date(Date.now());

    const handleDateSelect = (event: any) => {
        props.setCurrentDate(new Date(event.target.value));
    };

    const availableDates = useMemo(() => {
        const availableDates = [];
        let newDate = today;
        let day = 1;
        while (newDate >= new Date("January 10, 2019")) {
            availableDates.push(newDate);
            newDate = new Date(today.getTime() - (dayMillis * day));
            day++;
        }
        return availableDates;
    }, [today]);

    const selectDate =
        <div className="current-date">
            <select
                id="date-selector"
                onChange={handleDateSelect}
                value={`${monthNames[props.currentDate.getMonth()]} ${props.currentDate.getDate()}, ${props.currentDate.getFullYear()}`}
            >
                { availableDates.map((date: Date, index: number) => (
                            <option
                                key={index}
                                value={`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}>
                                {`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
                            </option>
                        )
                )}
            </select>
        </div>;

    return (
        <>
            <div className="dates-container-large">
                <div className="previous-date" onClick={() => props.setCurrentDate(prevDate)}>
                    {`< ${monthNames[prevDate.getMonth()]} ${prevDate.getDate()}, ${prevDate.getFullYear()}`}
                </div>
                {selectDate}
                <div className="next-date"
                     onClick={() => props.setCurrentDate(nextDate)}>{`${monthNames[nextDate.getMonth()]} ${nextDate.getDate()}, ${nextDate.getFullYear()} >`}
                </div>
            </div>

            <div className="dates-container-small">
                <div className="previous-date" onClick={() => props.setCurrentDate(prevDate)}>
                    {`<  ${monthNames[prevDate.getMonth()]} ${prevDate.getDate()}`}
                </div>
                {selectDate}
                <div className="next-date"
                     onClick={() => props.setCurrentDate(nextDate)}>{`${monthNames[nextDate.getMonth()]} ${nextDate.getDate()}  >`}
                </div>
            </div>
        </>
    );
};