import { type ITag } from "@/state/defineInterface";
import { type FunctionComponent } from "react";

interface ITagList {
  tags: ITag[];
}

const TagList: FunctionComponent<ITagList> = ({ tags }) => {
  return (
    <div className="rounded-lg bg-neutral-1 p-3 text-xs border-[1px] border-solid border-gray-300 w-full max-w-[200px] h-full">
      <div className="self-stretch overflow-hidden">
        <div className="text-xl color-text-primary flex justify-around">
          Tags
        </div>
      </div>
      <div className=" gap-[6px]">
        {tags.map((tag) => {
          return (
            <div className=" gap-[12px] flex mt-[8px]" key={tag.id}>
              <div
                className="rounded-sm py-px px-2 gap-[3px] border-[1px] border-solid border-transparent"
                style={{ backgroundColor: tag.color }}
              >
                <div className="leading-[20px] text-white">{tag.tagname}</div>
              </div>
              <div className=" text-sm text-character-secondary-45">
                <div className="relative leading-[22px]">{tag.count}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
