import HeartSvg from "assets/svg/question/HeartSvg";
import StarSvg from "assets/svg/question/StarSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import { type FunctionComponent } from "react";

const QuestionContent: FunctionComponent = () => {
  return (
    <div className="rounded-md bg-character-primaryinverse py-3 pr-0 pl-3 text-center text-volcano-6 border-[1px] border-solid border-gray-400 flex">
      <div className="rounded-81xl bg-volcano-2 self-stretch overflow-hidden relative leading-[24px] max-w-[45px] w-full">
        <UserAvatar />
      </div>
      <div className="py-0 px-4 gap-[10px] text-left text-text-default">
        <div className="self-stretch overflow-hidden gap-[24px] flex">
          <div className="font-medium leading-[24px]">Ẩn danh</div>
          <div className="text-gray-300 leading-[24px]">05/05/2022 20:50</div>
        </div>
        <div className="relative w-11 text-sm text-character-secondary-45 gap-[6px] flex items-center">
          <StarSvg />
          <div className="overflow-hidden relative leading-[22px]">232</div>
        </div>
        <p className="overflow-hidden text-character-title-85 font-text-sm-text-sm leading-[24px] m-0 my-[16px]">
          Em chào thầy cô và các bạn ạ. Em là sinh viên khoá K64. Hiện đang
          trong thời gian xét nhận ĐATN, em thấy chỗ kết quả xét nhận có hiện
          ghi chú của học phần bơi lội, trong khi e đã hoàn thành 5 môn thể.
          Thầy/cô cho em hỏi nó có ảnh hưởng gì không ạ.
        </p>
        <div className="flex gap-[8px] mb-[10px]">
          <div className="text-xs text-dust-red-6">
            <div className="rounded-sm bg-dust-red-1 flex flex-row items-center justify-start py-px px-2 gap-[3px] border-[1px] border-solid border-dust-red-3">
              <div className="relative leading-[20px]">Sự nghiệp</div>
            </div>
          </div>
          <div className="text-xs text-dust-red-6">
            <div className="rounded-sm bg-dust-red-1 flex flex-row items-center justify-start py-px px-2 gap-[3px] border-[1px] border-solid border-dust-red-3">
              <div className="relative leading-[20px]">Sự nghiệp</div>
            </div>
          </div>
          <div className="text-xs text-dust-red-6">
            <div className="rounded-sm bg-dust-red-1 flex flex-row items-center justify-start py-px px-2 gap-[3px] border-[1px] border-solid border-dust-red-3">
              <div className="relative leading-[20px]">Sự nghiệp</div>
            </div>
          </div>
        </div>
        <div className="relative w-12 text-sm text-character-secondary-45 flex items-center gap-[8px]">
          <HeartSvg className="cursor-pointer" />
          <div className="overflow-hidden relative leading-[22px]">147</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContent;
