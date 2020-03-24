import React, {FC} from "react";
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

    const selectDate =
        <div className="current-date">
            <select id="date-selector" onChange={handleDateSelect} value={`${monthNames[props.currentDate.getMonth()]} ${props.currentDate.getDate()}, ${props.currentDate.getFullYear()}`}>
                {_.range(438).map((day: number) => {
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