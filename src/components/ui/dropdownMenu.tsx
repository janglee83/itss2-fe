import { type FunctionComponent, useState } from "react";
import { CSSTransition } from "react-transition-group";

const DropdownMenu: FunctionComponent = () => {
  const [isExpanded] = useState(true);

  return (
    <CSSTransition in={isExpanded} timeout={300} unmountOnExit>
      <div
        className="text-black border border-solid border-gray-300 shadow-md bg-white absolute z-10"
        key="dropdown"
        style={{
          width: "210px",
          maxHeight: "350px",
          top: "60px",
          right: "30px",
        }}
      >
        <div className="border-b border-solid border-gray-300">
          <div className="m-4">Xem Thông tin cá nhân</div>
        </div>
        <div className="border-b border-solid border-gray-300">
          <div className="m-4">Đăng xuất</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DropdownMenu;
