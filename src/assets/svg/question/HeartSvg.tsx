import { type AppDispatch } from "state/store";
import { handleLikeComment } from "state/universe/reducer";
import { useState, type FunctionComponent } from "react";
import { useDispatch } from "react-redux";

interface IHeartSvg {
  className: string;
  answerId: number;
}

const HeartSvg: FunctionComponent<IHeartSvg> = ({ className, answerId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleChangeIsLikedValue = (): void => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    dispatch(handleLikeComment(answerId)).catch((error) => {
      console.log(error);
    });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={isLiked ? "red" : "black"}
      className={className}
      onClick={() => {
        handleChangeIsLikedValue();
      }}
    >
      <path
        d="M15.3397 3.91907C15.1003 3.36485 14.7552 2.86262 14.3236 2.4405C13.8917 2.01712 13.3825 1.68066 12.8236 1.44943C12.2441 1.2087 11.6226 1.08548 10.9951 1.08693C10.1147 1.08693 9.25578 1.328 8.50935 1.78336C8.33078 1.89228 8.16113 2.01193 8.00042 2.14228C7.8397 2.01193 7.67006 1.89228 7.49149 1.78336C6.74506 1.328 5.88613 1.08693 5.00578 1.08693C4.37185 1.08693 3.75756 1.20836 3.1772 1.44943C2.61649 1.68157 2.11113 2.0155 1.6772 2.4405C1.24506 2.86215 0.899843 3.36449 0.661133 3.91907C0.412919 4.49586 0.286133 5.10836 0.286133 5.73871C0.286133 6.33336 0.407561 6.953 0.648633 7.58336C0.850419 8.11014 1.1397 8.65657 1.50935 9.20836C2.09506 10.0816 2.90042 10.9923 3.90042 11.9155C5.55756 13.4459 7.19863 14.503 7.26828 14.5459L7.69149 14.8173C7.87899 14.9369 8.12006 14.9369 8.30756 14.8173L8.73078 14.5459C8.80042 14.5012 10.4397 13.4459 12.0986 11.9155C13.0986 10.9923 13.904 10.0816 14.4897 9.20836C14.8593 8.65657 15.1504 8.11014 15.3504 7.58336C15.5915 6.953 15.7129 6.33336 15.7129 5.73871C15.7147 5.10836 15.5879 4.49586 15.3397 3.91907ZM8.00042 13.4048C8.00042 13.4048 1.64328 9.33157 1.64328 5.73871C1.64328 3.91907 3.14863 2.44407 5.00578 2.44407C6.31113 2.44407 7.44328 3.17264 8.00042 4.23693C8.55756 3.17264 9.6897 2.44407 10.9951 2.44407C12.8522 2.44407 14.3576 3.91907 14.3576 5.73871C14.3576 9.33157 8.00042 13.4048 8.00042 13.4048Z"
        fill={isLiked ? "red" : "black"}
        fillOpacity="0.45"
      />
    </svg>
  );
};

export default HeartSvg;
