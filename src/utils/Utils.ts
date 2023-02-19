import moment from "moment";
import { DateFromat } from "../shared/enums";

export const convertTimestampToDate = (timestamp: number, format: DateFromat) => {
    return moment(timestamp).format(format);
}