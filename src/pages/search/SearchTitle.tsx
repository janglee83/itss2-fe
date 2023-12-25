import { FunctionComponent } from "react";

const SearchTitle: FunctionComponent = () => {
  return (
    <>
      <div className="bg-character-primaryinverse shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden flex flex-col items-center justify-center text-[30px] font-text-sm-text-sm">
        <div className="bg-character-primaryinverse overflow-hidden flex flex-col items-start justify-center py-4 px-0 box-border">
          <div className="relative leading-[36px] font-semibold flex items-center shrink-0">
            Kết quả tìm kiếm cho "từ khóa ..."
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTitle;
