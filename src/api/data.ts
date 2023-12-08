import { AxiosRequestConfig } from "axios";
import { api } from "@/api/api";
import { EventId, LocationId } from "@/components/DataProvider";

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