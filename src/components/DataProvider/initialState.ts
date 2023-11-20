import { DesignType, IData } from "@/components/DataProvider/types";
export const initialState: IData = {
  map: "/images/exhibitionfloor.png",
  loginImg: "/images/duck_explorer_2.png",
  designImage: "/images/duck_blue.png",
  designType: DesignType.Duck,
  pointsList: [[ 50, 26, true, "Hello!!!" ]],
  loginMessage: "Quack Treasure Hunt - can you find all hidden ducks?",
  descriptionMessage: "Find all QR Codes, answer the questions and check" +
    "if you can crack the code to the Quack's safe at Capgemini stand",
}
