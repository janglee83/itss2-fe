import LikeSvg from "assets/svg/home/LikeSvg";
import SingleCommentSvg from "assets/svg/question/SingleCommentSvg";
import EyeSvg from "assets/svg/question/EyeSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import { useState, type FunctionComponent, startTransition } from "react";
import {
  type ITag,
  type IAuthor,
  type IQuestion,
} from "state/questionList/state";
import getRelativeTime from "utils/helper";
import { useNavigate } from "react-router-dom";

interface IQuestionPreview {
  question: IQuestion;
}

const QuestionPreview: FunctionComponent<IQuestionPreview> = ({ question }) => {
  const [author] = useState<IAuthor>(question.author);
  const [tags] = useState<ITag[]>(question.tags);
  const navigate = useNavigate();

  const renderTagComponent = (): JSX.Element[] => {
    return tags.map((tag: ITag) => {
      return (
        <div
          className="self-stretch rounded-sm flex flex-row items-center justify-start py-px px-2 border-[1px] border-solid text-white"
          key={tag.id}
          style={{ backgroundColor: tag.color }}
        >
          <div className="relative leading-[22px]">{tag.tagname}</div>
        </div>
      );
    });
  };

  const handleRedict = (questionId: number): void => {
    startTransition(() => {
      navigate(`/question/detail/${questionId}`);
    });
  };

  return (
    <div
      className=" bg-neutral-1 py-2.5 px-[23px] border-[1px] border-solid border-gray-100 flex gap-[18px] mt-[10px] cursor-pointer"
      onClick={() => {
        handleRedict(question.id);
      }}
    >
      <div className="rounded-81xl w-20 h-20 flex flex-col items-end justify-start">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center">
          <UserAvatar />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[24px]">
          <div className="overflow-hidden flex flex-col items-start justify-center">
            <div className="relative">{author.fullname}</div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-center text-button-disabled">
            <div className="relative">
              {getRelativeTime(question.createdat)}
            </div>
          </div>
        </div>
        <div className="py-1 px-0 text-xl text-character-primary-85">
          <div
            className="leading-[24px] font-medium"
            dangerouslySetInnerHTML={{ __html: question.content }}
          ></div>
        </div>
        <div className="flex items-center gap-[8px] text-sm text-character-secondary-45">
          <div className="h-[33px] flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <EyeSvg />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center">
                <div className="relative leading-[22px]">
                  {question.viewcount}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <LikeSvg />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center">
                <div className="relative leading-[22px]">
                  {question.likecount}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <SingleCommentSvg />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center">
                <div className="relative leading-[22px]">
                  {question.answercount}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-hitbox overflow-hidden flex flex-col items-start justify-center p-2 text-polar-green-6">
            <div className="shrink-0 flex flex-row items-center justify-end gap-[8px]">
              {renderTagComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPreview;
