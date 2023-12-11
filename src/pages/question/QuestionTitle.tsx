import CommentSvg from "assets/svg/question/DoubleCommentSvg";
import EyeSvg from "assets/svg/question/EyeSvg";
import { type FunctionComponent } from "react";

const QuestionTitle: FunctionComponent = () => {
  return (
    <div className="bg-character-primaryinverse shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden flex flex-col items-center justify-center text-[30px] font-text-sm-text-sm">
      <div className="bg-character-primaryinverse overflow-hidden flex flex-col items-start justify-center py-4 px-0 box-border">
        <div className="flex flex-row items-center justify-center">
          <div className="relative leading-[36px] font-semibold flex items-center shrink-0">
            Cho em xin review thi giữa kì môn kỹ thuật lập trình C/C++ cô Đỗ Thị
            Ngọc Diệp với ạ
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px] text-base text-gray-200 font-h5-medium">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <EyeSvg />
            <div className="relative leading-[24px] font-medium flex items-center shrink-0">
              11.1k
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <CommentSvg />
            <div className="relative leading-[24px] font-medium flex items-center shrink-0">
              3
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-sm text-gray-300 font-text-sm-text-sm">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[20px]">
                Đã đăng vào 2 ngày trước
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[20px]">
                Chỉnh sửa lần cuối vào 2 tiếng trước
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionTitle;
