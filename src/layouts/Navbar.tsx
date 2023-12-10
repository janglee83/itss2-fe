import HomeSvg from "assets/svg/headers/HomeSvg";
import LogoSvg from "assets/svg/headers/LogoSvg";
import SearchSvg from "assets/svg/headers/SearchSvg";
import { type FunctionComponent } from "react";

const NavbarComponent: FunctionComponent = () => {
  return (
    <div className="bg-bg-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-20 overflow-hidden flex flex-row items-center justify-between py-3 px-6 box-border text-center text-xl text-neutral-13">
      <div className="flex flex-row items-center justify-start gap-[32px]">
        <div className="rounded bg-neutral-1 shadow-[4px_4px_0px_rgba(0,_0,_0,_0.8)] overflow-hidden hidden flex-row items-center justify-center p-2 gap-[8px] font-saira-stencil-one border-[1.5px] border-solid border-neutral-13">
          <img
            className="relative w-[34.9px] h-[35px]"
            alt=""
            src="/group.svg"
          />
          <div className="flex flex-col items-center justify-center">
            <div className="relative">UniXP</div>
          </div>
        </div>
        <LogoSvg />
        <div className="rounded bg-neutral-1 box-border w-[400px] flex flex-row items-center justify-start text-left text-sm text-character-disabled-placeholder-25 border-[1px] border-solid border-neutral-5">
          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-2 px-3">
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start">
              <div className="relative leading-[22px]">
                Tìm kiếm câu hỏi, bài viết, người dùng...
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center py-0 px-4 gap-[8px] text-center text-neutral-1 border-[1px] border-solid border-primary-6">
            <SearchSvg />
            <div className="relative leading-[22px] hidden">Button Title</div>
          </div>
        </div>
        <div className="rounded-sm overflow-hidden flex flex-row items-center justify-center py-[6.400000095367432px] px-[15px] gap-[10px] text-base text-neutral-1">
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <HomeSvg />
          </div>
          <div className="relative leading-[24px] font-semibold">TRANG CHỦ</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[12px] text-base text-neutral-1">
        <div className="rounded-sm overflow-hidden flex flex-row items-center justify-center py-[6.400000095367432px] px-[15px] gap-[10px]">
          <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
            {/* <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/wrapper.svg"
            /> */}
          </div>
          <div className="relative leading-[24px]">Login</div>
        </div>
        <div className="rounded-sm overflow-hidden flex flex-row items-center justify-center py-[6.400000095367432px] px-[15px] gap-[10px]">
          <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
            {/* <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/wrapper.svg"
            /> */}
          </div>
          <div className="relative leading-[24px]">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
