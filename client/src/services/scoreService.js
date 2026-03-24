import API from "./api";

export const addScore = (score) =>
  API.post("/scores", { score });

export const getScores = () =>
  API.get("/scores");