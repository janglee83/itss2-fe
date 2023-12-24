/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type FunctionComponent, useEffect } from "react";
import QuestionTitle from "./QuestionTitle";
import QuestionContent from "./QuestionContent";
import SingleCommentSvg from "assets/svg/question/SingleCommentSvg";
import QuestionAnswer from "./QuestionAnswer";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "state/store";
import { fetchQuestionDetail } from "state/questionDetail/reducers";
import { type IAnswerDetail } from "@/state/questionDetail/state";
import { useParams } from "react-router-dom";
import { setIsLoading } from "state/universe";
import CreateAnswerDialog from "components/ui/CreateAnswerDialog";

const QuestionDetail: FunctionComponent = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const questionDetailState = useSelector(
    (state: RootState) => state.questionDetail,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { questionId } = useParams<{ questionId?: string }>();

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    let id = -1;
    if (questionId != null) id = parseInt(questionId);
    dispatch(setIsLoading(true));
    dispatch(fetchQuestionDetail(id))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, [dispatch]);

  const handleRenderCount = (): void => {
    setRenderCount((prevCount: number) => prevCount + 1);
  };

  const renderQuestionAnswer = (): JSX.Element[] => {
    return questionDetailState.answersDetail.map((answer: IAnswerDetail) => (
      <QuestionAnswer
        onRender={handleRenderCount}
        key={answer.id}
        answer={answer}
      />
    ));
  };

  return (
    <>
      <div className="bg-character-primaryinverse w-full overflow-hidden text-left text-base text-character-title-85 font-h5-medium">
        <QuestionTitle />
        <div className="mt-6 max-w-[740px] mx-auto">
          <QuestionContent />
          <div
            className="rounded bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center py-1 px-[15px] gap-[8px] text-center text-sm text-character-primaryinverse border-[1px] border-solid border-primary-6 max-w-[150px] my-[10px]"
            onClick={handleToggle}
          >
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <SingleCommentSvg />
            </div>
            <div className="relative leading-[22px] text-white">
              Viết câu trả lời
            </div>
          </div>
          <div className="mx-auto leading-[24px] font-medium">
            {renderCount} Câu trả lời
          </div>
          <div>{renderQuestionAnswer()}</div>
        </div>
      </div>
      <CreateAnswerDialog
        open={isOpen}
        handleClose={handleToggle}
        questionId={questionId}
      />
    </>
  );
};

export default QuestionDetail;
