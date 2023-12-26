/* eslint-disable @typescript-eslint/explicit-function-return-type */
// apiHelper.ts
import { type TSortType } from "state/questionList/reducer";
import axios, { type AxiosInstance } from "axios";

const baseURL = "https://unixp.h4ck.me/";

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

export const createAnswer = async (data: unknown) => {
  const response = await apiHelper.post("/answer", data);
  return response.data;
};

export const questionDetail = async (questionId: number) => {
  const response = await apiHelper.get(`/question/${questionId}`);
  return response.data;
};

export const getAllQuestionInMainPage = async ({
  numberOfPage,
  pageSize,
  sort,
}: {
  numberOfPage: number;
  pageSize: number;
  sort: TSortType;
}) => {
  const { data } = await apiHelper.get(
    `/question/all?numberOfPage=${numberOfPage}&pageSize=${pageSize}&sort=${sort}`,
  );
  return data;
};

export const getAllTags = async () => {
  const { data } = await apiHelper.get("/tag/top-tags");
  return data;
};

export const acceptAnswerApi = async (answerId: number, data: unknown) => {
  const response = await apiHelper.post(
    `/answer/${answerId}/accept-answer`,
    data,
  );
  return response.data;
};

export const getListMessage = async () => {
  const response = await apiHelper.get("/user/1/notifications?page=1");

  return response.data;
};
