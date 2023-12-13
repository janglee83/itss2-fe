// apiHelper.ts
import axios, { type AxiosInstance } from "axios";

const baseURL = "http://4.193.172.80";

const apiHelper: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createQuestion = async (data: unknown): Promise<unknown> => {
  const response = await apiHelper.post("/question/create", data);
  return response.data;
};

export const questionDetail = async (questionId: number): Promise<unknown> => {
  const response = await apiHelper.get(`/question/${questionId}`);
  return response.data;
};
