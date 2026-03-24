import API from "./api";

export const createDraw = () =>
  API.post("/draws");

export const getDraws = () =>
  API.get("/draws");