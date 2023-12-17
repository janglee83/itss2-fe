import { useState, type FunctionComponent, useEffect } from "react";
import QuestionTitle from "./QuestionTitle";
import QuestionContent from "./QuestionContent";
import SingleCommentSvg from "assets/svg/question/SingleCommentSvg";
import QuestionAnswer from "./QuestionAnswer";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "state/store";
import { fetchQuestionDetail } from "state/questionDetail/reducers";
import { type IAnswerDetail } from "@/state/questionDetail/state";

const QuestionDetail: FunctionComponent = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const questionDetailState = useSelector(
    (state: RootState) => state.questionDetail,
  );

  useEffect(() => {
    const questionId = 1;
    dispatch(fetchQuestionDetail(questionId)).catch((error) => {
      console.log(error);
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
    <div className="bg-character-primaryinverse w-full overflow-hidden text-left text-base text-character-title-85 font-h5-medium">
      <QuestionTitle />
      <div className="mt-6 max-w-[740px] mx-auto">
        <QuestionContent />
        <div className="rounded bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center py-1 px-[15px] gap-[8px] text-center text-sm text-character-primaryinverse border-[1px] border-solid border-primary-6 max-w-[150px] my-[10px]">
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
  );
};

export default QuestionDetail;
