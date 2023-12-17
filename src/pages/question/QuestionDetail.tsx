import { useState, type FunctionComponent, useEffect } from "react";
import QuestionTitle from "./QuestionTitle";
import QuestionContent from "./QuestionContent";
import SingleCommentSvg from "assets/svg/question/SingleCommentSvg";
import QuestionAnswer from "./QuestionAnswer";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "state/store";
import { fetchQuestionDetail } from "state/questionDetail/reducers";

const QuestionDetail: FunctionComponent = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const questionId = 1;
    dispatch(fetchQuestionDetail(questionId)).catch((error) => {
      console.log(error);
    });
  }, [dispatch]);

  const handleRenderCount = (): void => {
    setRenderCount((prevCount: number) => prevCount + 1);
  };

  return (
    <div className="bg-character-primaryinverse w-full overflow-hidden text-left text-base text-character-title-85 font-h5-medium">
      <QuestionTitle />
      <div className="mt-6 max-w-[740px] mx-auto">
        <QuestionContent />
        <div className="rounded bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center py-1 px-[15px] gap-[8px] text-center text-sm text-character-primaryinverse border-[1px] border-solid border-primary-6 max-w-[150px] mx-auto">
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <SingleCommentSvg />
          </div>
          <div className="relative leading-[22px] text-white">
            Viết câu trả lời
          </div>
        </div>
        <div className="mx-auto leading-[24px] font-medium">
          {renderCount / 2} Câu trả lời
        </div>
        <div>
          <QuestionAnswer onRender={handleRenderCount} />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
