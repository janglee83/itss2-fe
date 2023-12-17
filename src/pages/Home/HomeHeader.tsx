import CreatePostDialog from "components/ui/createQuestionDialog";
import PlusSvg from "assets/svg/home/PlusSvg";
import { useState, type FunctionComponent } from "react";

const HomeHeader: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className="text-base">
        <div className="bg-neutral-1 flex flex-col items-start justify-start pt-6 px-0 pb-4 box-border gap-[18px]">
          <div className="self-stretch hidden flex-col items-start justify-start">
            <div className="bg-hitbox flex flex-row items-end justify-start gap-[32px]">
              <div className="overflow-hidden flex flex-col items-center justify-end text-primary-6"></div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-13xl">
            <div className="overflow-hidden shrink-0 flex flex-row items-center justify-start">
              <div className="leading-[24px] font-medium">Câu hỏi hàng đầu</div>
            </div>
            <div
              className="shrink-0 flex flex-row items-center justify-start text-center text-xl text-neutral-1 cursor-pointer"
              onClick={handleToggle}
            >
              <div className="self-stretch rounded-81xl bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center py-[6.400000095367432px] px-[15px] gap-[10px] border-[1px] border-solid border-primary-6">
                <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                  <PlusSvg />
                </div>
                <div className="leading-[24px]">Viết câu hỏi</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-center text-sm">
            <div className="rounded-sm flex flex-row items-start justify-start">
              <div className="shrink-0 flex flex-row items-start justify-start">
                <div className="shrink-0 flex flex-row items-start justify-start [transform:_rotate(180deg)]">
                  <div className="rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-neutral-1 overflow-hidden flex flex-row items-center justify-start [transform:_rotate(180deg)] border-[1px] border-solid border-neutral-5">
                    <div className="shrink-0 flex flex-row items-start justify-start py-[5px] px-4 gap-[4px]">
                      <div className="leading-[22px] z-[2]">
                        Chưa giải quyết
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-1 overflow-hidden flex flex-row items-center justify-start [transform:_rotate(180deg)] ml-[-1px] border-[1px] border-solid border-neutral-5">
                    <div className="shrink-0 flex flex-row items-start justify-start py-[5px] px-4 gap-[4px]">
                      <div className="leading-[22px] z-[2]">Mới nhất</div>
                    </div>
                  </div>
                  <div className="rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 [transform:_rotate(180deg)] ml-[-1px] text-primary-6 border-[1px] border-solid border-primary-6">
                    <div className="leading-[22px]">Phổ biến</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreatePostDialog open={open} handleClose={handleToggle} />
    </>
  );
};

export default HomeHeader;