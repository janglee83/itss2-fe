import { type ITag } from "@/state/defineInterface";
import { startTransition, type FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router";

interface ITagList {
  tags: ITag[];
}

const TagList: FunctionComponent<ITagList> = ({ tags }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchByTag = (tag: ITag): void => {
    const searchParams = new URLSearchParams(location.search);
    const tagParams = searchParams.get("tags")?.split(/[,%2C]/);

    if (
      (Array.isArray(tagParams) && tagParams.length < 5) ||
      tagParams === undefined
    ) {
      const updatedTags = Array.isArray(tagParams)
        ? Array.from(new Set([...tagParams, tag.tagname]))
        : [tag.tagname];

      searchParams.set("tags", updatedTags.join(","));

      startTransition(() => {
        navigate("/search?" + searchParams.toString());
      });
    }
  };

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
                className="rounded-sm py-px px-2 gap-[3px] border-[1px] border-solid border-transparent cursor-pointer"
                style={{ backgroundColor: tag.color }}
                onClick={() => {
                  handleSearchByTag(tag);
                }}
              >
                <div className="leading-[22px] text-white text-sm">
                  {tag.tagname}
                </div>
              </div>
              <div className=" text-sm text-character-secondary-45">
                <div className="relative leading-[22px] text-sm">
                  {tag.count}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
