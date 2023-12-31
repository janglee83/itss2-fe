import { type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const LogoSvg: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleRedirectToHome = (): void => {
    navigate(0);
  };
  return (
    <svg
      onClick={() => {
        handleRedirectToHome();
      }}
      width="86"
      height="36"
      viewBox="0 0 86 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <g clipPath="url(#clip0_819_358)">
        <path d="M3 8.5H0V17.5H3V8.5Z" fill="white" />
        <path d="M16 8.5H13V17.5H16V8.5Z" fill="white" />
        <path
          d="M16 17.5C16 18.5506 15.7931 19.5909 15.391 20.5615C14.989 21.5321 14.3997 22.414 13.6569 23.1569C12.914 23.8997 12.0321 24.489 11.0615 24.891C10.0909 25.2931 9.05057 25.5 8 25.5C6.94942 25.5 5.90914 25.2931 4.93853 24.891C3.96793 24.489 3.08601 23.8997 2.34315 23.1569C1.60028 22.414 1.011 21.5321 0.608963 20.5615C0.206926 19.5909 -9.18442e-08 18.5506 0 17.5H2.99268C2.99268 18.1576 3.1222 18.8087 3.37384 19.4162C3.62548 20.0237 3.99432 20.5757 4.45929 21.0407C4.92426 21.5057 5.47627 21.8745 6.08378 22.1262C6.6913 22.3778 7.34243 22.5073 8 22.5073C8.65757 22.5073 9.3087 22.3778 9.91622 22.1262C10.5237 21.8745 11.0757 21.5057 11.5407 21.0407C12.0057 20.5757 12.3745 20.0237 12.6262 19.4162C12.8778 18.8087 13.0073 18.1576 13.0073 17.5H16Z"
          fill="white"
        />
        <path d="M23 25.5H20V16.5H23V25.5Z" fill="white" />
        <path d="M36 25.5H33V16.5H36V25.5Z" fill="white" />
        <path
          d="M36 16.5C36 15.4494 35.7931 14.4091 35.391 13.4385C34.989 12.4679 34.3997 11.586 33.6569 10.8431C32.914 10.1003 32.0321 9.511 31.0615 9.10896C30.0909 8.70693 29.0506 8.5 28 8.5C26.9494 8.5 25.9091 8.70693 24.9385 9.10896C23.9679 9.511 23.086 10.1003 22.3431 10.8431C21.6003 11.586 21.011 12.4679 20.609 13.4385C20.2069 14.4091 20 15.4494 20 16.5H22.9927C22.9927 15.8424 23.1222 15.1913 23.3738 14.5838C23.6255 13.9763 23.9943 13.4243 24.4593 12.9593C24.9243 12.4943 25.4763 12.1255 26.0838 11.8738C26.6913 11.6222 27.3424 11.4927 28 11.4927C28.6576 11.4927 29.3087 11.6222 29.9162 11.8738C30.5237 12.1255 31.0757 12.4943 31.5407 12.9593C32.0057 13.4243 32.3745 13.9763 32.6262 14.5838C32.8778 15.1913 33.0073 15.8424 33.0073 16.5H36Z"
          fill="white"
        />
        <path d="M43 8.5H40V25.5H43V8.5Z" fill="white" />
        <path
          d="M44 3C44 4.38071 42.8807 5.5 41.5 5.5C40.1193 5.5 39 4.38071 39 3C39 1.61929 40.1193 0.5 41.5 0.5C42.8807 0.5 44 1.61929 44 3Z"
          fill="white"
        />
        <path d="M47 8.50001L51 8.5L62 25.5H58L47 8.50001Z" fill="#FFBF00" />
        <path d="M62 8.50001L58 8.5L47 25.5H51L62 8.50001Z" fill="#FFBF00" />
        <path d="M69 18.5H66V35.5H69V18.5Z" fill="#FFBF00" />
        <path
          d="M66 18.5C66 16.236 66.7682 14.039 68.1791 12.2684C69.5899 10.4978 71.5598 9.25825 73.7666 8.75261C75.9734 8.24697 78.2864 8.50513 80.3275 9.48485C82.3685 10.4646 84.0166 12.1079 85.0024 14.146C85.9881 16.1841 86.2531 18.4964 85.7539 20.7047C85.2548 22.913 84.0211 24.8865 82.2546 26.3025C80.4881 27.7186 78.2934 28.4933 76.0295 28.5C73.7655 28.5066 73.5 28.5 71.6671 27.5V23.971C72.9057 24.952 74.4405 25.4836 76.0206 25.4789C77.6006 25.4743 79.1323 24.9336 80.3651 23.9454C81.5979 22.9571 82.4589 21.5798 82.8072 20.0386C83.1556 18.4975 82.9707 16.8838 82.2827 15.4614C81.5948 14.039 80.4445 12.8921 79.0201 12.2083C77.5957 11.5246 75.9814 11.3444 74.4413 11.6973C72.9012 12.0502 71.5264 12.9152 70.5418 14.151C69.5572 15.3867 69.021 16.92 69.021 18.5H66Z"
          fill="#FFBF00"
        />
      </g>
      <defs>
        <clipPath id="clip0_819_358">
          <rect
            width="86"
            height="35"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoSvg;
