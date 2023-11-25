import { DesignType, IData } from "@/components/DataProvider/types";

// main, login
export const initialState: IData = {
  map: "",
  designType: DesignType.Duck,
  pointsList: [],
  loginMessage: "",
  descriptionMessage: "",
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
