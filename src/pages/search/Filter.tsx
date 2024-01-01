import FilterSvg from "assets/svg/search/FilterSvg";
// import ClearIcon from "@mui/icons-material/Clear";
import InputTag from "components/ui/InputTag";
import { type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type TSort, type TStatus } from "state/defineInterface";
import { setSort, setStatus } from "state/search";
import { type AppDispatch, type RootState } from "state/store";

const Filter: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.search);
  const universe = useSelector((state: RootState) => state.universe);

  const isMetSortCondition = (string: TSort): boolean => {
    return string === search.sort;
  };

  const isMetStatusCondition = (string: TStatus): boolean => {
    return string === search.status;
  };

  const handleChangeSortValue = (string: TSort): void => {
    dispatch(setSort(string));
  };

  const handleChangeStatusValue = (string: TStatus): void => {
    dispatch(setStatus(string));
  };

  return (
    <>
      <div className="text-black bg-neutral-1 border-[1px] border-solid rounded-lg border-gray-100 mb-3">
        <div className="flex flex-row gap-[10px] items-center px-[24px] py-3 border-b-[1px] border-solid border-gray-100">
          <FilterSvg />
          <h2 className="text-black">Lọc</h2>
        </div>

        <div className="flex items-center flex-row px-[24px] py-3">
          <div className="me-[24px] text-base">Tag:</div>
          <div className="shrink-0 flex flex-row items-center gap-[8px] grow">
            <InputTag options={universe.listtags} />
          </div>
        </div>

        <div className="flex items-center flex-row px-[24px] py-3">
          <div className="me-[24px] text-base">Trạng thái:</div>
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div
              className={`bg-neutral-1 overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-5 rounded-l cursor-pointer ${
                isMetStatusCondition("all") &&
                "text-primary-6 border-primary-6 z-[0]"
              }`}
              onClick={() => {
                handleChangeStatusValue("all");
              }}
            >
              <div className="shrink-0 flex flex-row items-start justify-start py-[5px] px-4 gap-[4px]">
                <div className="leading-[22px] z-[0]">Tất cả</div>
              </div>
            </div>
            <div
              className={`bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 border-[1px] ml-[-1px] border-solid border-neutral-5 cursor-pointer ${
                isMetStatusCondition("not resolved") &&
                "text-primary-6 border-primary-6 z-[0]"
              }`}
              onClick={() => {
                handleChangeStatusValue("not resolved");
              }}
            >
              <div className="leading-[22px]">Chưa giải quyết</div>
            </div>
            <div
              className={`bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 border-[1px] ml-[-1px] border-solid rounded-r border-neutral-5 cursor-pointer ${
                isMetStatusCondition("solved") &&
                "text-primary-6 border-primary-6 z-[0]"
              }`}
              onClick={() => {
                handleChangeStatusValue("solved");
              }}
            >
              <div className="leading-[22px]">Đã giải quyết</div>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-row px-[24px] py-3">
          <div className="me-[24px] text-base">Sắp xếp theo:</div>
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div
              className={`rounded-l bg-neutral-1 overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-5 cursor-pointer ${
                isMetSortCondition("newest") &&
                "text-primary-6 border-primary-6 z-[0]"
              }`}
              onClick={() => {
                handleChangeSortValue("newest");
              }}
            >
              <div className="shrink-0 flex flex-row items-start justify-start py-[5px] px-4 gap-[4px]">
                <div className="leading-[22px]">Mới nhất</div>
              </div>
            </div>
            <div
              className={`rounded-r bg-neutral-1 overflow-hidden flex flex-row items-center justify-start py-[5px] px-4 border-[1px] border-solid border-neutral-5 ml-[-1px] cursor-pointer ${
                isMetSortCondition("trending") &&
                "text-primary-6  border-primary-6 z-[0]"
              }`}
              onClick={() => {
                handleChangeSortValue("trending");
              }}
            >
              <div className="leading-[22px]">Phổ biến</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
