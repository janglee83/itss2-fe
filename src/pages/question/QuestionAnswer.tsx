import UserAvatar from "assets/svg/question/UserAvatar";
import HeartSvg from "assets/svg/question/HeartSvg";
import StarSvg from "assets/svg/question/StarSvg";
import { useEffect, type FunctionComponent } from "react";
import CheckSvg from "assets/svg/question/CheckSvg";
import { type IAnswerDetail } from "@/state/questionDetail/state";

interface IQuestionAnswer {
  onRender: () => void;
  answer: IAnswerDetail;
}

const QuestionAnswer: FunctionComponent<IQuestionAnswer> = ({
  onRender,
  answer,
}) => {
  useEffect(() => {
    onRender();
  }, []);

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
        <div className="z-[1] text-character-title-85 leading-[24px] my-[16px]">
          {answer.content}
        </div>
        <div className="z-[2] text-sm text-character-secondary-45 flex gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <HeartSvg className="cursor-pointer" />
            <div className="relative leading-[22px]">{answer.likeCount}</div>
          </div>
          <div className="text-accepted leading-[22px] flex items-center gap-[4px]">
            <CheckSvg />
            <div>Câu trả lời được chấp nhận</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
