import { DesignType, IData } from "@/components/DataProvider/types";

// main, login
export const initialState: IData = {
  map: "/images/exhibitionfloor.png",
  // change
  loginImg: "/images/duck_explorer_2.png",
  errorImg: "/images/duck_crying.png",
  designImg: "/images/duck_blue.png",
  // 
  designType: DesignType.Duck,
  pointsList: [
    [ 1, 31, 37, true, "North" ],
    [ 2, 41, 50, true, "West" ],
    [ 3, 47, 63, true, "Center" ],
    [ 4, 64, 80, true, "South" ],
    [ 5, 69, 78, true, "East" ],
],
  loginMessage: "Quack Treasure Hunt - can you find all hidden ducks?",
  descriptionMessage: "Find all QR Codes, answer the questions and check" +
    "if you can crack the code to the Quack's safe at Capgemini stand",
}
//  when open link -> first req IData -> fechtEventData(evenId)
// 2 request: if login sent {user.email, locationId} fethQuestionsData(userEmail, locationId)
// user.email after login in google => {}
// response:
// {} - you visited 
//IQuestion {questionId, questionMessage, ["answer"]}
// if {} => map
// if {questionMessage, ["answer"]} => sent request with questionId and answer fethQuestionsResult(QuestionId, answer)
// Enam response: sucsees, fald, cont
//  if cont => again
// if sucsees => map
// when map -> req IData
// eventId to get IData

// to do: 
// pointsList.map
