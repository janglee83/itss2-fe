import { type FunctionComponent } from "react";

interface UserAvatarProps {
  style?: React.CSSProperties;
}

const UserAvatar: FunctionComponent<UserAvatarProps> = ({ style }) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <rect width="45" height="45" rx="22.5" fill="#FFD8BF" />
      <g clipPath="url(#clip0_801_103641)">
        <path
          d="M25.1406 16.625H26.6406V24.3203C26.6406 25.1745 26.4505 25.8854 26.0703 26.4531C25.6901 27.0208 25.1849 27.4479 24.5547 27.7344C23.9297 28.0156 23.25 28.1562 22.5156 28.1562C21.7448 28.1562 21.0469 28.0156 20.4219 27.7344C19.8021 27.4479 19.3099 27.0208 18.9453 26.4531C18.5859 25.8854 18.4062 25.1745 18.4062 24.3203V16.625H19.8984V24.3203C19.8984 24.9141 20.0078 25.4036 20.2266 25.7891C20.4453 26.1745 20.75 26.4609 21.1406 26.6484C21.5365 26.8359 21.9948 26.9297 22.5156 26.9297C23.0417 26.9297 23.5 26.8359 23.8906 26.6484C24.2865 26.4609 24.5938 26.1745 24.8125 25.7891C25.0312 25.4036 25.1406 24.9141 25.1406 24.3203V16.625Z"
          fill="#FA541C"
        />
      </g>
      <defs>
        <clipPath id="clip0_801_103641">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserAvatar;
