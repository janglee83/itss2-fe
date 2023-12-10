import EmailSvg from "assets/svg/footer/EmailSvg";
import FacebookSvg from "assets/svg/footer/FacebookSvg";
import GithubSvg from "assets/svg/footer/GithubSvg";
import { type FunctionComponent } from "react";

const FooterComponent: FunctionComponent = () => {
  return (
    <div className="[background:linear-gradient(90deg,_#fff_68.05%,_rgba(255,_255,_255,_0))] box-border w-full overflow-hidden flex flex-row items-center justify-between py-1.5 px-6 text-text-primary border-t-[1px] border-solid border-side-bar-border">
      <div className="overflow-hidden flex flex-row items-center justify-start">
        <b className="relative leading-[22px]"> </b>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[14px] text-character-title-85">
        <div className="overflow-hidden flex flex-col items-start justify-center">
          <b className="relative leading-[22px]">FAQs</b>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-center">
          <b className="relative leading-[22px]">Contact</b>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-center">
          <b className="relative leading-[22px]">{"Privacy & Terms"}</b>
        </div>
        <div className="relative text-base leading-[16px] font-font-awesome-6-brands text-neutral-13">
          <GithubSvg />
        </div>
        <div className="relative text-base leading-[16px] font-font-awesome-6-brands text-neutral-13">
          <FacebookSvg />
        </div>
        <div className="relative text-base leading-[16px] font-font-awesome-5-free text-neutral-13">
          <EmailSvg />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
