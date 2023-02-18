import moment from "moment";

export const convertTimestampToDate = (timestamp: number) => {
    return moment(timestamp).format("DD MMM YYYY HH:MM");
}