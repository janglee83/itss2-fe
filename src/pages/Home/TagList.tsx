import { type FunctionComponent } from "react";

const TagList: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-neutral-1 p-3 text-xs border-[1px] border-solid border-gray-300 w-full max-w-[150px]">
      <div className="self-stretch overflow-hidden">
        <div className="h-6 overflow-hidden flex flex-col items-start justify-center">
          Tags
        </div>
      </div>
      <div className=" gap-[6px]">
        <div className=" gap-[12px] flex">
          <div className="rounded-sm bg-neutral-2  py-px px-2 gap-[3px] border-[1px] border-solid border-neutral-5">
            <div className="relative leading-[20px]">Học tập</div>
            <img
              className="relative w-2.5 h-2.5 overflow-hidden shrink-0 hidden"
              alt=""
              src="/close.svg"
            />
          </div>
          <div className=" text-sm text-character-secondary-45">
            <div className="relative leading-[22px]">32323</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagList;
