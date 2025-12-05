import authApi from "./authAxios";

export const signupApi = (data) => {
  return authApi.post("/app/register", data);
};

export const loginApi = (data) => {
  return authApi.post("/app/login", data);
};
