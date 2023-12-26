import ArrowDownSvg from "assets/svg/headers/ArrowDownSvg";
import HomeSvg from "assets/svg/headers/HomeSvg";
import LogoSvg from "assets/svg/headers/LogoSvg";
import NotificationSvg from "assets/svg/headers/NotificationSvg";
import SearchSvg from "assets/svg/headers/SearchSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import DropdownMenu from "components/ui/dropdownMenu";
import Notification from "components/ui/notification";
import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type AppDispatch, type RootState } from "state/store";
import { setIsLoading } from "state/universe";
import { fetchListMessages } from "state/universe/reducer";

const NavbarComponent: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isExpandedDropdownMenu, setIsExpandedDropdownMenu] =
    useState<boolean>(false);
  const { listMessage } = useSelector((state: RootState) => state.universe);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const [notiCount, setNotiCount] = useState<number>(listMessage.length);

  const handleShowNoti = (): void => {
    setIsExpanded(!isExpanded);
  };

  const handleShowDropdownMenu = (): void => {
    setIsExpandedDropdownMenu(!isExpandedDropdownMenu);
  };

  const handleRedirectToHome = (): void => {
    navigate("/");
  };

  const handleFetchMessages = (): void => {
    dispatch(setIsLoading(true));

    dispatch(fetchListMessages())
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  useEffect(() => {
    handleFetchMessages();
  }, []);

  useEffect(() => {
    setNotiCount(listMessage.length);
  }, [listMessage]);

  const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();
  const handleSearchClick = (): void => {
    // if (searchQuery.trim() !== "") {
    //   startTransition(() => {
    //     navigate(`/search/${encodeURIComponent(searchQuery)}`);
    //   });
    // }
  };

  return (
    <div className="bg-bg-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-20 overflow-hidden flex items-center justify-between py-3 px-6 text-xl text-neutral-13">
      <div className="flex items-center gap-[32px]">
        <div className="rounded bg-neutral-1 shadow-[4px_4px_0px_rgba(0,_0,_0,_0.8)] overflow-hidden hidden flex items-center p-2 gap-[8px] font-saira-stencil-one border-[1.5px] border-solid border-neutral-13">
          <div className="flex items-center">
            <div className="relative">UniXP</div>
          </div>
        </div>
        <LogoSvg />
        {/* <div className="rounded bg-neutral-1 box-border flex items-center text-left text-sm text-character-disabled-placeholder-25 border-[1px] border-solid border-neutral-5">
          <div className="flex-1 overflow-hidden py-2 px-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              placeholder="Tìm kiếm câu hỏi"
              className="relative leading-[22px] w-full"
            />
          </div>
          <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex items-center justify-center py-0 px-4 gap-[8px] text-center text-neutral-1 border-[1px] border-solid border-primary-6"> */}
        <div className="rounded bg-neutral-1 flex items-center text-left text-sm text-character-disabled-placeholder-25 w-[400px]">
          <div className="flex-1 rounded overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              placeholder="Tìm kiếm câu hỏi"
              className="relative leading-[22px] py-2 px-3 w-full"
            />
          </div>
          <div
            className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-6 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex items-center justify-center py-0 px-4 gap-[8px] text-center text-neutral-1 cursor-pointer"
            onClick={handleSearchClick}
          >
            <SearchSvg />
          </div>
        </div>
        <div
          className="rounded-sm overflow-hidden flex items-center justify-center py-[6.4px] px-[15px] gap-[10px] text-base text-neutral-1 cursor-pointer"
          onClick={() => {
            handleRedirectToHome();
          }}
        >
          <div className="bg-hitbox overflow-hidden flex items-center">
            <HomeSvg />
          </div>
          <div className="relative leading-[24px] font-semibold">TRANG CHỦ</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[12px] text-base text-neutral-1">
        <div className="rounded-sm overflow-hidden flex items-center justify-center py-[6.4px] px-[15px] gap-[10px]">
          <div
            className="leading-[24px]"
            onClick={() => {
              handleShowNoti();
            }}
          >
            <NotificationSvg />
            <div
              style={{
                position: "absolute",
                right: "245px",
                top: "10px",
                borderRadius: "12px",
                backgroundColor: "red",
                padding: "0 8px",
              }}
            >
              {notiCount}
            </div>
            {isExpanded && <Notification />}
          </div>
        </div>
        <div
          className="rounded-sm overflow-hidden flex items-center justify-center py-[6.4px] px-[15px] gap-[10px] cursor-pointer"
          onClick={() => {
            handleShowDropdownMenu();
          }}
        >
          <div className="leading-[24px] flex items-center gap-[8px]">
            <UserAvatar />
            <div>Nguyen Van A</div>
            <ArrowDownSvg />
          </div>
          {isExpandedDropdownMenu && <DropdownMenu />}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
