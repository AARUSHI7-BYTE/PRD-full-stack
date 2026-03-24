import API from "./api";

export const getDashboard = () => API.get("/dashboard");
export const addScore = (score) => API.post("/scores", { score });