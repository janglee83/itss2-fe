import { type ITagDetail } from "@/state/questionDetail/state";
import { type RootState } from "@/state/store";
import HeartSvg from "assets/svg/question/HeartSvg";
import StarSvg from "assets/svg/question/StarSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import { type ReactNode, type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const QuestionContent: FunctionComponent = () => {
  const questionDetailState = useSelector(
    (state: RootState) => state.questionDetail,
  );

  const renderImageComponent = (): JSX.Element => {
    if (questionDetailState.isanonymous > 0) return <UserAvatar />;
    return (
      <img
        src={questionDetailState.authorDetail.avatarUrl}
        style={{
          maxWidth: "45px",
          maxHeight: "45px",
        }}
      />
    );
  };

  return (
    <div className="rounded-md bg-character-primaryinverse py-3 pr-0 pl-3 text-center text-volcano-6 border-[1px] border-solid border-gray-400 flex">
      <div className="rounded-81xl bg-volcano-2 self-stretch overflow-hidden relative leading-[24px] max-w-[45px] w-full">
        {renderImageComponent()}
      </div>
      <div className="py-0 px-4 gap-[10px] text-left text-text-default">
        <div className="self-stretch overflow-hidden gap-[24px] flex">
          <div className="font-medium leading-[24px] text-[#094067]">
            {questionDetailState.isanonymous > 0
              ? "Ẩn danh"
              : questionDetailState.authorDetail.fullName}
          </div>
          <div className="text-gray-300 leading-[24px]">
            {moment(questionDetailState.createAt).format("DD/MM/YYYY HH:mm")}
          </div>
        </div>
        <div className="relative w-11 text-sm text-character-secondary-45 gap-[6px] flex items-center">
          <StarSvg />
          <div className="overflow-hidden relative leading-[22px]">
            {questionDetailState.viewCount}
          </div>
        </div>
        <p
          className="overflow-hidden text-character-title-85 font-text-sm-text-sm leading-[24px] m-0 my-[16px]"
          dangerouslySetInnerHTML={{ __html: questionDetailState.content }}
        ></p>
        <div className="flex gap-[8px] mb-[10px]">
          {questionDetailState.tagsDetail.map((tag: ITagDetail): ReactNode => {
            return (
              <div
                className="text-xs"
                style={{ backgroundColor: tag.color }}
                key={tag.id}
              >
                <div className="rounded-sm flex flex-row items-center justify-start py-px px-2 gap-[3px] border-[1px] border-solid">
                  <div className="relative leading-[24px] text-white text-base">
                    {tag.tagName}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-12 text-sm text-character-secondary-45 flex items-center gap-[8px]">
          <HeartSvg
            className="cursor-pointer"
            answerId={questionDetailState.id}
            isLikeByUser={questionDetailState.is_liked}
          />
          <div className="overflow-hidden relative leading-[22px]">
            {questionDetailState.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContent;
