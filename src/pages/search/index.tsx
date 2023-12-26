import { type FunctionComponent, useState } from "react";
import SearchTitle from "./SearchTitle";
import Filter from "./Filter";
import { Pagination } from "@mui/material";
import TagList from "../Home/TagList";
import { useSelector } from "react-redux";
import { type RootState } from "@/state/store";
import QuestionPreview from "../Home/QuestionPreview";

const Search: FunctionComponent = () => {
  const questionList = useSelector((state: RootState) => state.questionList);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const universe = useSelector((state: RootState) => state.universe);

  const renderQuestionPreview = (): JSX.Element[] => {
    return questionList.questions.map((question, index) => {
      return <QuestionPreview question={question} key={index} />;
    });
  };
  return (
    <>
      <div className="bg-character-primaryinverse w-full overflow-hidden text-left text-base text-character-title-85 font-h5-medium">
        <SearchTitle />
      </div>
      <div className="pt-6 px-[100px] bg-whitesmoke px-auto">
        <div className="text-left text-sm text-character-primary-85 font-footnote-description">
          <div className="flex gap-[45px]">
            <div className="text-xs text-button-primary w-full">
              <Filter />
              {/* Danh sách kết quả ở đây */}
              {currentPage}
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

export default Search;
