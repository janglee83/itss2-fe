/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FunctionComponent } from "react";
import HomeHeader from "./HomeHeader";
import QuestionPreview from "./QuestionPreview";
import TagList from "./TagList";

const Home: FunctionComponent = () => {
  return (
    <>
      <div className="mt-6 max-w-[1550px] mx-auto">
        <div className="overflow-hidden text-left text-sm text-character-primary-85 font-footnote-description">
          <HomeHeader />
        </div>
      </div>
      <div className="pt-6 px-[100px] bg-whitesmoke px-auto">
        <div className="overflow-hidden text-left text-sm text-character-primary-85 font-footnote-description">
          <div className="flex gap-[45px]">
            <QuestionPreview />
            <TagList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
