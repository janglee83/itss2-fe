import LikeSvg from "assets/svg/home/LikeSvg";
import SingleCommentSvg from "assets/svg/question/SingleCommentSvg";
import EyeSvg from "assets/svg/question/EyeSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import { type FunctionComponent } from "react";
import { Pagination } from "@mui/material";

const QuestionPreview: FunctionComponent = () => {
  return (
    <div className=" gap-[12px] text-xs text-button-primary">
      <div className=" bg-neutral-1 py-2.5 px-[23px] border-[1px] border-solid border-gray-100 flex gap-[18px]">
        <div className="rounded-81xl w-20 h-20 flex flex-col items-end justify-start">
          <div className="self-stretch flex-1 flex flex-row items-center justify-center">
            <UserAvatar />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[24px]">
            <div className="overflow-hidden flex flex-col items-start justify-center">
              <div className="relative">Ẩn danh</div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-center text-button-disabled">
              <div className="relative">an hour ago</div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-1 px-0 text-xl text-character-primary-85">
            <div className="relative leading-[24px] font-medium flex items-center">
              Mọi người cho em hỏi học ngành Vật lí kỹ thuật sau này cần những
              kỹ năng gì để có việc làm ạ? anh chị nào review hộ em chương trình
              học ngành này với ạ...
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-between text-sm text-character-secondary-45">
            <div className="h-[33px] flex flex-row items-center justify-start gap-[16px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                  <EyeSvg />
                </div>
                <div className="overflow-hidden flex flex-col items-start justify-center">
                  <div className="relative leading-[22px]">10.4k</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                  <LikeSvg />
                </div>
                <div className="overflow-hidden flex flex-col items-start justify-center">
                  <div className="relative leading-[22px]">156</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                  <SingleCommentSvg />
                </div>
                <div className="overflow-hidden flex flex-col items-start justify-center">
                  <div className="relative leading-[22px]">0</div>
                </div>
              </div>
            </div>
            <div className="bg-hitbox overflow-hidden flex flex-col items-start justify-center p-2 text-polar-green-6">
              <div className="shrink-0 flex flex-row items-center justify-end gap-[8px]">
                <div className="self-stretch rounded-sm bg-polar-green-1 flex flex-row items-center justify-start py-px px-2 border-[1px] border-solid border-polar-green-3">
                  <div className="relative leading-[22px]">Học tập</div>
                </div>
                <div className="self-stretch rounded-sm bg-geek-blue-1 flex flex-row items-center justify-start py-px px-2 text-geek-blue-6 border-[1px] border-solid border-geek-blue-3">
                  <div className="relative leading-[22px]">Cuộc sống</div>
                </div>
                <div className="self-stretch rounded-sm bg-dust-red-1 flex flex-row items-center justify-start py-px px-2 text-dust-red-6 border-[1px] border-solid border-dust-red-3">
                  <div className="relative leading-[22px]">Sự nghiệp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination count={11} defaultPage={6} siblingCount={0} />
      </div>
    </div>
  );
};

export default QuestionPreview;
