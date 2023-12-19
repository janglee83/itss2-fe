import { useEffect, type FunctionComponent, useState } from "react";
import HomeHeader from "./HomeHeader";
import QuestionPreview from "./QuestionPreview";
import TagList from "./TagList";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "@/state/store";
import { fetchListQuestion } from "state/questionList/reducer";
import { Backdrop, CircularProgress, Pagination } from "@mui/material";
import { setIsLoading } from "state/universe";
import { fetchListTag } from "state/universe/reducer";

const Home: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const questionList = useSelector((state: RootState) => state.questionList);
  const universe = useSelector((state: RootState) => state.universe);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleGetListQuestion = (): void => {
    const payload = {
      numberOfPage: currentPage,
      pageSize: 10,
      sort: universe.sort,
    };
    dispatch(setIsLoading(true));
    dispatch(fetchListQuestion(payload))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const handleGetAllTags = (): void => {
    dispatch(setIsLoading(true));

    dispatch(fetchListTag())
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  useEffect(() => {
    handleGetListQuestion();
    handleGetAllTags();
  }, []);

  useEffect(() => {
    handleGetListQuestion();
  }, [currentPage]);

  useEffect(() => {
    handleGetListQuestion();
    handleGetAllTags();
  }, [universe.sort]);

  const renderQuestionPreview = (): JSX.Element[] => {
    return questionList.questions.map((question, index) => {
      return <QuestionPreview question={question} key={index} />;
    });
  };

  return (
    <>
      <div className="mt-6 max-w-[1550px] mx-auto">
        <div className="overflow-hidden text-left text-sm text-character-primary-85 font-footnote-description">
          <HomeHeader sort={universe.sort} />
        </div>
      </div>
      <div className="pt-6 px-[100px] bg-whitesmoke px-auto">
        <div className="text-left text-sm text-character-primary-85 font-footnote-description">
          <div className="flex gap-[45px]">
            <div className="text-xs text-button-primary w-full">
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={universe.isLoading}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              {renderQuestionPreview()}
              <div className="flex justify-center mt-4">
                <Pagination
                  count={20}
                  onChange={(e, value) => {
                    setCurrentPage(value);
                  }}
                />
              </div>
            </div>
            <TagList tags={universe.tags} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
