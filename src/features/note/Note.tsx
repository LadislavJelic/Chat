import React, { FC } from "react";
import { DateFromat } from "../../shared/enums";
import { Message } from "../../shared/types";
import { convertTimestampToDate } from "../../utils/Utils";
import "./Note.scss";

interface INote {
  note: Message;
}

const Note: FC<INote> = ({ note }) => {
  const { author, message, timestamp } = note;
  const myself = author === "Ladislav"; // here we should have different condition for myself, but from response I can not conclude how to make distinction

  return (
    <div className={`note ${myself ? "myself" : "other"}`}>
      {!myself && <div className="author">{author}</div>}
      <div className="message">{message}</div>
      <div className="date">
        {convertTimestampToDate(timestamp, DateFromat.dayMonthYearHourMinute)}
      </div>
    </div>
  );
};

export default Note;
