import { DesignType, IData } from "@/components/DataProvider/types";
export const initialState: IData = {
  map: "/images/exhibitionfloor.png",
  designImage: "/images/duck_blue.png",
  designType: DesignType.Duck,
  pointsList: [[ 50, 26, true, "Hello!!!" ]],
  loginMessage: "loginMessage",
  descriptionMessage: "descriptionMessage",
}
