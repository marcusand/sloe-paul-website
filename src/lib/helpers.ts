import moment from "moment";

export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const isDateUpcoming = (date: Date) => {
  return moment(date).isAfter(moment());
};
