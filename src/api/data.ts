import { AxiosRequestConfig } from "axios";
import { api } from "@/api/api";
import { EventId, LocationId, IUser } from "@/components/DataProvider/types"

export const fetchEvent = (id: EventId, config?: AxiosRequestConfig) => {
  return api.get(`/events/${id}`, config).then(({ data }) => {
    return data;
  });
};

export const fetchLocationId = (locationId: LocationId, config?: AxiosRequestConfig) => {
  // return api.get(`/events/locations/${locationId}`, config).then(({ data }) => {
    return api.get(`/events/${locationId}`, config).then(({ data }) => {
    return data;
  });
};

// delete ? in params
export const fetchQuestion = (userEmail?: IUser['email'], locationId?: LocationId, config?: AxiosRequestConfig) => {
  // request according to descr:
  // return api.get(`/api/questions?userEmail=${userEmail}&locationId=${locationId}`, config).then(({ data }) => {
  //   return data;
  
  // request according to db.json:
  return api.get('/questions', config).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const sendAnsweredQuestion = (answer: string, userEmail?: IUser['email'],  config?: AxiosRequestConfig) => {
  // request according to descr:
  console.log(answer);
  
  return api.get(`/api/questions/{questionId}/check?answer=${answer}&userEmail=${userEmail}`, config).then(({ data }) => {
    return data;
  
  // request according to db.json:
  // return api.get('/questions', config).then(({ data }) => {
  //   console.log(answer, data);
  //   return "SUCCESS";
  });
};

// https://locahost:3000/map?eventId=10
// const eventId = queryParam.get("eventId")
//   sessionStorage.setItem('eventId', eventId)

// https://locahost:3000/login?locationId=22
// const locationId = queryParam.get("locationId")
//   sessionStorage.setItem('locationId', locationId)

//   send request to localhost:8080/api/event/location?locationId=$locationId GET
// receive response EVENT OBJECT
//
// CLICK GOOGLE - request to localhost:8080/api/login-url?type=GOOGLE GET
// CLICK GITHUB - request to localhost:8080/api/login-url?type=GITHUB GET
// RECEIVE url - google.com
// REDIRECT USER TO github.com

export const fetchToken = (token: EventId, config?: AxiosRequestConfig) => {
  return api.get(`/token/${token}`, config).then(({ data }) => {
    //user
    return data;
  });
};