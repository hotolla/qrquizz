import {fetchLocationId} from "@/api/data";

export interface IPointsList {
  points: [
    id: number,
    left: number | null,
    top: number | null,
    visited: boolean,
    message: string,
  ][];
}

export interface IEvent {
  id: number | string,
  map: string,
  designType: DesignType,
  pointsList: IPointsList['points'],
  loginMessage: string,
  descriptionMessage: string,
}

export interface IState {
  event: IEvent | null
}

export interface IUser {
  email: string,
  listOfVisitedLoctaions: string,
  recievedCode: string,
}

export interface IQuiz {
  questionsId: number,
  questionMessage: string,
  questionAnswers: string[],
}

export enum DesignType {
  Duck = "DUCK",
  Type2 = "TYPE2",
  Type3 = "TYPE3",
  Type4 = "TYPE4",
}

export enum Types {
  FetchEvent = 'FETCH_EVENT',
  FetchLocationId = 'FETCH_LOCATION_ID',
  FetchQuiz = 'FETCH_QUIZ'
}

export type EventId = number | string
export type LocationId = number | string