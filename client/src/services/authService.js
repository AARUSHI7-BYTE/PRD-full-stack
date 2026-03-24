import API from "./api";

export const signup = (data) => API.post("/auth/signup", data);

export const login = async (data) => {
  const res = await API.post("/auth/login", data);

  const token = res.data.session.access_token;
  localStorage.setItem("token", token);

  return res.data;
};