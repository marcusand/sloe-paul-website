import moment from "moment";

export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const isDateUpcoming = (date: string): boolean => {
  return moment(date).isAfter(moment());
};

export const getStandardFormattedDate = (date: string): string => {
  return moment(date).format("DD.MM.YYYY");
};
