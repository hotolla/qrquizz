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
  loginImg: string,
  designImg: string,
  errorImg: string,
  designType: DesignType,
  pointsList: IPointsList['points'],
  loginMessage: string,
  descriptionMessage: string,
}

export enum DesignType {
  Duck = "DUCK",
  Type2 = "TYPE2",
  Type3 = "TYPE3",
  Type4 = "TYPE4",
}

export enum Types {
  FetchData = 'FETCH_DATA'
}