import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// import page
const HomePage = lazy(async () => await import("pages/Home"));
const QuestionPage = lazy(async () => await import("pages/question/index"));
const QuestionDetailPage = lazy(
  async () => await import("pages/question/QuestionDetail")
);
const Search = lazy(async () => await import("pages/search/index"));

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "question",
    children: [
      {
        path: "",
        element: <QuestionPage />,
        children: [],
      },
      {
        path: "detail/:questionId",
        element: <QuestionDetailPage />,
        children: [],
      },
    ],
  },
  {
    path: "search",
    element: <Search />,
  },
]);
