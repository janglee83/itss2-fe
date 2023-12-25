import FilterSvg from "assets/svg/search/FilterSvg";
import ClearIcon from "@mui/icons-material/Clear";
import { FunctionComponent } from "react";

const Filter: FunctionComponent = () => {
  return (
    <>
      <div className="text-black bg-neutral-1 py-2.5 px-[23px] border-[1px] border-solid border-gray-100 mt-[10px]">
        <div className="flex flex-row items-center">
          <FilterSvg />
          <h2 className="text-black">Lọc</h2>
        </div>
        

        <div className="flex items-center flex-row">
          <div className="m-4">Tag:</div>
          <div className="shrink-0 flex flex-row items-center gap-[8px]">
            {/* tag 1*/}
            <div
              className="self-stretch rounded-sm flex flex-row items-center justify-start py-px px-2 border-[1px] border-solid text-white"
              // key={1}
              style={{ backgroundColor: "#5468ff" }}>
              <div className="relative leading-[22px]">tagname1</div>
              <ClearIcon style={{ fontSize: "medium" }} />
            </div>
            {/* end tag 1*/}
            {/* tag 2*/}
            <div
              className="self-stretch rounded-sm flex flex-row items-center justify-start py-px px-2 border-[1px] border-solid text-white"
              // key={1}
              style={{ backgroundColor: "#5468ff" }}>
              <div className="relative leading-[22px]">tagname2</div>
              <ClearIcon style={{ fontSize: "medium" }} />
            </div>
            {/* end tag 2*/}
          </div>
        </div>


        <div className="flex items-center flex-row">
          <div className="m-4">Trạng thái:</div>
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div
              className={`bg-neutral-1 overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-5 cursor-pointer ${
                true && "text-primary-6 border-primary-6 "
              }`}
              onClick={() => {}}>
              <div className="shrink-0 flex flex-row items-start justify-start py-[5px] px-4 gap-[4px]">
                <div className="leading-[22px] z-[2]">Tất cả</div>
              </div>
            </div>
            <div
              className={`rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 ml-[-1px] border-[1px] border-solid  cursor-pointer ${
                false && "text-primary-6  border-primary-6"
              }`}
              onClick={() => {}}>
              <div className="leading-[22px]">chưa giải quyết</div>
            </div>
            <div
              className={`rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 ml-[-1px] border-[1px] border-solid  cursor-pointer ${
                false && "text-primary-6  border-primary-6"
              }`}
              onClick={() => {}}>
              <div className="leading-[22px]">Đã giải quyết</div>
            </div>
          </div>
        </div>


        <div className="flex items-center flex-row">
          <div className="m-4">Sắp xếp theo:</div>
          {/* đoạn này t cop từ homeHeader */}
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div
              className={`bg-neutral-1 overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-5 cursor-pointer ${
                // isMetSortCondition("newest") &&
                "text-primary-6 border-primary-6 "
              }`}
              onClick={() => {
                // handleChangeSortValue("newest");
              }}>
              <div className="shrink-0 flex flex-row items-start justify-start py-[5px] px-4 gap-[4px]">
                <div className="leading-[22px] z-[2]">Mới nhất</div>
              </div>
            </div>
            <div
              className={`rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 ml-[-1px] border-[1px] border-solid  cursor-pointer ${
                // isMetSortCondition("trending") &&
                "text-primary-6  border-primary-6"
              }`}
              onClick={() => {
                // handleChangeSortValue("trending");
              }}>
              <div className="leading-[22px]">Phổ biến</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
