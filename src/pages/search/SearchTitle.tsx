import { type FunctionComponent } from "react";

interface ISearchTitle {
  keyword?: string;
}

const SearchTitle: FunctionComponent<ISearchTitle> = ({ keyword }) => {
  return (
    <>
      <div className="bg-character-primaryinverse shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden flex flex-col justify-center text-[30px] font-text-sm-text-sm">
        <div className="bg-character-primaryinverse overflow-hidden flex flex-col items-start justify-center p-[24px] box-border">
          <div className="relative leading-[36px] font-semibold flex items-center shrink-0">
            Kết quả tìm kiếm cho &quot;{keyword}&quot;
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTitle;
