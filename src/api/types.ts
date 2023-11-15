
export interface IData {
  map: string,
  designType: DesignType,
  pointsList: [
    [
      x: number,
      y: number,
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