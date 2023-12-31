import LikeSvg from "assets/svg/home/LikeSvg";
import SingleCommentSvg from "assets/svg/question/SingleCommentSvg";
import EyeSvg from "assets/svg/question/EyeSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import CheckSvg from "assets/svg/question/CheckSvg";
import { useState, type FunctionComponent, startTransition } from "react";
import {
  type ITag,
  type IAuthor,
  type IQuestion,
} from "state/questionList/state";
import getRelativeTime from "utils/helper";
import formatNumber from "utils/formatNumber";
import { useNavigate } from "react-router-dom";

interface IQuestionPreview {
  question: IQuestion;
}

const QuestionPreview: FunctionComponent<IQuestionPreview> = ({ question }) => {
  const [author] = useState<IAuthor>(question.author);
  const navigate = useNavigate();

  const handleRedict = (questionId: number): void => {
    startTransition(() => {
      navigate(`/question/detail/${questionId}`);
    });
  };

  const renderImageComponent = (): JSX.Element => {
    if (question.isanonymous > 0)
      return <UserAvatar style={{ zoom: "calc(80 / 45)" }} />;
    return (
      <img
        src={question.author.avatarurl}
        style={{
          zoom: "calc(80 / 45)",
          maxWidth: "45px",
          maxHeight: "45px",
        }}
      />
    );
  };

  return (
    <div
      className="bg-neutral-1 py-2.5 px-[23px] border-[1px] border-solid border-gray-100 rounded-lg flex gap-[18px] mb-[10px] cursor-pointer"
      onClick={() => {
        handleRedict(question.id);
      }}
    >
      <div className="rounded-81xl flex flex-col items-end justify-start">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center">
          {renderImageComponent()}
        </div>
      </div>
      <div className="flex flex-col grow">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[24px] leading-normal">
          <div className="overflow-hidden flex flex-col items-start justify-center">
            <div className="relative">
              {question.isanonymous > 0 ? "Ẩn danh" : author.fullname}
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-center text-button-disabled">
            <div className="relative">
              {getRelativeTime(question.createdat)}
            </div>
          </div>
        </div>
        <div className="ps-[24px] py-[4px] h-[48px] text-xl text-neutral-13 line-clamp-2">
          <div
            className="leading-[24px] font-medium"
            dangerouslySetInnerHTML={{ __html: question.title }}
          ></div>
        </div>
        <div className="flex justify-between items-center gap-[8px] text-sm text-character-secondary-45">
          <div className="h-[33px] flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-row items-center justify-start gap-[8px] fill-character-secondary-45">
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <EyeSvg />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center">
                <div className="relative leading-[22px]">
                  {formatNumber(question.viewcount)}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] fill-character-secondary-45">
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <LikeSvg />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center">
                <div className="relative leading-[22px]">
                  {formatNumber(question.likecount)}
                </div>
              </div>
            </div>
            <div
              className={`flex flex-row items-center justify-start gap-[8px] ${
                question.acceptedanswerid !== null
                  ? "bg-accepted fill-white text-white px-[6px] py-[5px] rounded-[15px]"
                  : "fill-character-secondary-45"
              }`}
            >
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <SingleCommentSvg />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center">
                <div className="relative leading-[22px]">
                  {formatNumber(question.answercount)}
                </div>
              </div>
              {question.acceptedanswerid !== null && (
                <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                  <CheckSvg />
                </div>
              )}
            </div>
          </div>
          <div className="bg-hitbox overflow-hidden flex flex-col items-start justify-center p-2 text-polar-green-6">
            <div className="shrink-0 flex flex-row items-center justify-end gap-[8px]">
              {question.tags.map((tag: ITag) => {
                return (
                  <div
                    className="self-stretch rounded-sm flex flex-row items-center justify-start py-px px-2 border-[1px] border-solid text-white"
                    key={tag.id}
                    style={{ backgroundColor: tag.color }}
                  >
                    <div className="relative leading-[22px]">{tag.tagname}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPreview;
