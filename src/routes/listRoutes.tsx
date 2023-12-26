import { lazy } from "react";

// Import pages
const HomePage = lazy(async () => await import("pages/Home"));
const QuestionDetailPage = lazy(
  async () => await import("pages/questionDetail/index"),
);

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "question",
    children: [
      {
        path: "detail/:questionId",
        element: <QuestionDetailPage />,
      },
    ],
  },
];

export default routes;
