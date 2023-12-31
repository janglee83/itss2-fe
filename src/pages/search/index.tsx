import { type AppDispatch, type RootState } from "@/state/store";
import { Pagination } from "@mui/material";
import {
  // startTransition,
  useEffect,
  useState,
  type FunctionComponent,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { type ITag, type TSort, type TStatus } from "state/defineInterface";
import { setFilter, setIsLoading } from "state/search";
import { fetchResult } from "state/search/reducer";
import { setIsLoading as setListTagIsLoading } from "state/universe";
import { fetchListTag, fetchTopTag } from "state/universe/reducer";
import NoData from "components/ui/NoData";
import QuestionPreview from "../Home/QuestionPreview";
import TagList from "../Home/TagList";
import Filter from "./Filter";
import SearchTitle from "./SearchTitle";

const Search: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.search);
  const universe = useSelector((state: RootState) => state.universe);
  const [currentPage, setCurrentPage] = useState<number>(search.page ?? 1);

  const location = useLocation();
  // const navigate = useNavigate();

  const renderQuestionPreview = (): JSX.Element[] | JSX.Element => {
    if (search.result === null || search.result.data?.length === 0) {
      return <NoData />;
    }

    return search.result.data?.map((question, index) => {
      return <QuestionPreview question={question} key={index} />;
    });
  };

  const handleGetAllTags = (): void => {
    dispatch(setListTagIsLoading(true));

    dispatch(fetchListTag())
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setListTagIsLoading(false));
      });
  };

  const handleGetTopTags = (): void => {
    dispatch(setListTagIsLoading(true));

    dispatch(fetchTopTag())
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setListTagIsLoading(false));
      });
  };

  const handleResult = (): void => {
    const payload = {
      page: currentPage,
      sort: search.sort,
      keyword: search.keyword,
      status: search.status,
      tags: search.tags?.map((tag) => tag.tagname),
    };
    dispatch(setIsLoading(true));
    dispatch(fetchResult(payload))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  useEffect(() => {
    handleGetAllTags();
    handleGetTopTags();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get("keyword") ?? "";
    const tags = searchParams.get("tags")?.split(/[,%2C]/) ?? [];
    const sort: TSort = (searchParams.get("sort") ?? "newest") as TSort;
    const status: TStatus = (searchParams.get("status") ?? "all") as TStatus;
    const page = Number(searchParams.get("page") ?? 1);

    let listTag: ITag[] = [];
    if (universe.listtags?.length > 0 && tags?.length > 0) {
      listTag = universe.listtags.filter((tagObject) => {
        return tags.includes(tagObject.tagname);
      });
    }

    dispatch(
      setFilter({
        sort,
        page,
        status,
        tags: listTag,
        keyword,
      }),
    );
  }, [location.search, universe.listtags]);

  useEffect(() => {
    handleResult();
  }, [search.keyword, currentPage, search.sort, search.status, search.tags]);

  return (
    <>
      <div>
        <div className="mb-[30px] max-w-[1224px] mx-auto">
          <div className="overflow-hidden text-left text-sm text-character-primary-85 font-footnote-description">
            {/* <div className="bg-character-primaryinverse w-full overflow-hidden text-left text-base text-character-title-85 font-h5-medium"> */}
            <SearchTitle keyword={search.keyword} />
          </div>
        </div>
      </div>
      <div className="bg-whitesmoke grow">
        <div className="max-w-[1224px] mx-auto py-6">
          <div className="text-left text-sm text-character-primary-85 font-footnote-description">
            <div className="flex gap-[24px]">
              <div className="text-xs text-button-primary w-full">
                <div className="text-xs text-button-primary w-full">
                  <Filter />
                  {/* Danh sách kết quả ở đây */}
                  {renderQuestionPreview()}
                  <div className="flex justify-center mt-4">
                    {search.result !== null &&
                      search.result.data?.length !== 0 && (
                        <Pagination
                          count={search.result?.meta?.totalPages}
                          onChange={(e, value) => {
                            setCurrentPage(value);
                          }}
                        />
                      )}
                  </div>
                </div>
              </div>
              <TagList tags={universe.toptags} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-6 px-[100px] bg-whitesmoke px-auto">
        <div className="text-left text-sm text-character-primary-85 font-footnote-description">
          <div className="flex gap-[45px]">
            
            <TagList tags={universe.tags} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Search;
