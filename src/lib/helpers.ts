import moment from "moment";
import { Concert } from "../api/interfaces";

export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const isDateUpcoming = (date: string): boolean => {
  return moment(date).isAfter(moment());
};

export const getStandardFormattedDate = (date: string): string => {
  return moment(date).format("DD.MM.YYYY");
};

export const sortConcerts = (concerts: Concert[]): Concert[] =>
  concerts.sort((concertA, concertB) => {
    const dateA = new Date(concertA.date).getTime();
    const dateB = new Date(concertB.date).getTime();

    return dateA - dateB;
  });
