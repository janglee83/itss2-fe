/* eslint-disable @typescript-eslint/explicit-function-return-type */
// apiHelper.ts
import axios, { type AxiosInstance } from "axios";

const baseURL = "https://unixp.h4ck.me";

const apiHelper: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createQuestion = async (data: unknown) => {
  const response = await apiHelper.post("/question/create", data);
  return response.data;
};

export const questionDetail = async (questionId: number) => {
  const response = await apiHelper.get(`/question/${questionId}`);
  return response.data;
};
