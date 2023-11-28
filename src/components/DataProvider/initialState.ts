import { DesignType, IData } from "@/components/DataProvider/types";

export const initialState: IData = {
  map: "",
  designType: DesignType.Duck,
  pointsList: [],
  loginMessage: "",
  descriptionMessage: "",
}
//  when open link -> first req IData -> fetchEventData(evenId)
// 2 request: if login sent {user.email, locationId} fetchQuestionsData(userEmail, locationId)
// user.email after login in google => {}
// response:
// {} - you visited
//IQuestion {questionId, questionMessage, ["answer"]}
// if {} => map
// if {questionMessage, ["answer"]} => sent request with questionId and answer fetchQuestionsResult(QuestionId, answer)
// Enum response: successes, failed, continue
//  if continue => again
// if successes => map
// when map -> req IData
// eventId to get IData

// to do:
// pointsList, map
