export interface IPointsList {
  points: [
    id: number,
    left: number | null,
    top: number | null,
    visited: boolean,
    message: string,
  ][];
}

export interface IData {
  map: string,
  designType: DesignType,
  pointsList: IPointsList['points'],
  loginMessage: string,
  descriptionMessage: string,
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
  FetchData = 'FETCH_DATA',
  FetchQuiz = 'FETCH_QUIZ'
}