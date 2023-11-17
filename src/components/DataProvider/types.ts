
export interface IData {
  map: string,
  designImage: string,
  designType: DesignType,
  pointsList: [
    [
      x: number | null,
      y: number | null,
      prymary: boolean,
      message: string
    ]
  ],
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