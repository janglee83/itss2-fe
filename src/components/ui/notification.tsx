import { type RootState } from "state/store";
import YellowNotification from "assets/svg/headers/YellowNotificationSvg";
import UserAvatar from "assets/svg/question/UserAvatar";
import { type FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const Notification: FunctionComponent = () => {
  const [isExpanded] = useState(true);

  const { listMessage } = useSelector((state: RootState) => state.universe);

  return (
    <CSSTransition in={isExpanded} timeout={300} unmountOnExit>
      <div
        className="text-black border border-solid border-gray-300 shadow-md bg-white absolute z-10 overflow-hidden overflow-y-scroll"
        key="dropdown"
        style={{ width: "300px", maxHeight: "350px", right: "250px" }}
      >
        <div className="flex items-center border-b border-solid border-gray-300">
          <div className="my-2 mx-4">
            <YellowNotification />
          </div>
          <div>
            <b>Thông báo</b>
          </div>
        </div>
        {listMessage.map((item) => (
          <div
            className="flex items-center border-b border-solid border-gray-300"
            key={item.id}
          >
            <div className="m-2">
              <UserAvatar />
            </div>
            <div
              style={{
                overflow: "hidden",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default Notification;
