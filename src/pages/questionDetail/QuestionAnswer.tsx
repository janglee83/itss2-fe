/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { type IAnswerDetail } from "@/state/questionDetail/state";
import { type AppDispatch } from "@/state/store";
import CheckSvg from "assets/svg/question/CheckSvg";
import HeartSvg from "assets/svg/question/HeartSvg";
import StarSvg from "assets/svg/question/StarSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import { useEffect, type FunctionComponent, startTransition } from "react";
import { useDispatch } from "react-redux";
import { acceptAnswer } from "../../state/questionDetail/reducers";
import { setIsLoading } from "state/universe";
import { useNavigate } from "react-router-dom";

interface IQuestionAnswer {
  onRender: () => void;
  answer: IAnswerDetail;
  acceptedAnswerId: number | null;
  questionId: string | undefined;
}

const QuestionAnswer: FunctionComponent<IQuestionAnswer> = ({
  onRender,
  answer,
  acceptedAnswerId,
  questionId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    onRender();
  }, []);

  const handleAcceptAnswer = (): void => {
    dispatch(setIsLoading(true));
    const payload = {
      userId: 1,
      answerId: answer.id,
    };
    dispatch(acceptAnswer(payload))
      .then(() => {
        startTransition(() => {
          navigate(`/question/detail/${questionId}`);
        });
      })
      .catch((error) => {
        console.log((error as Error).message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  return (
    <div className="text-button-primary rounded-lg bg-character-primaryinverse py-3 pr-0 pl-3 border-[1px] border-solid border-gray-400 flex my-[18px]">
      <div className="rounded-81xl bg-cover bg-no-repeat bg-[top] max-w-[45px] w-full">
        <UserAvatar />
      </div>
      <div className="py-0 px-4 relative gap-[10px]">
        <div className="z-[0] flex ">
          <div className="font-medium leading-[24px]">
            {answer.authorDetail.fullName}
          </div>
          <div className="text-gray-300 leading-[24px]">{answer.createAt}</div>
        </div>
        <div className="text-sm text-character-secondary-45">
          <div className="flex items-center">
            <StarSvg />
            <div className="relative leading-[22px]">
              {answer.diem_danh_gia}
            </div>
          </div>
        </div>
        <div
          className="z-[1] text-character-title-85 leading-[24px] my-[16px]"
          dangerouslySetInnerHTML={{ __html: answer.content }}
        ></div>
        <div className="z-[2] text-sm text-character-secondary-45 flex gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <HeartSvg className="cursor-pointer" />
            <div className="relative leading-[22px]">{answer.likeCount}</div>
          </div>
          {acceptedAnswerId === answer.id && (
            <div className="text-accepted leading-[22px] flex items-center gap-[4px]">
              <CheckSvg />
              <div>Câu trả lời được chấp nhận</div>
            </div>
          )}
          {acceptedAnswerId === null && (
            <div
              className="text-neutral-6 leading-[22px] flex items-center gap-[4px] cursor-pointer hover:text-accepted fill-neutral-6 hover:fill-accepted"
              onClick={handleAcceptAnswer}
            >
              <CheckSvg />
              <div>Chấp nhận</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
