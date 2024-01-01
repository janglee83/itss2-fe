/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type RootState } from "@/state/store";
import chroma from "chroma-js";
import { useEffect, useState, type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { type MultiValue, type StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import { type ITag } from "state/defineInterface";

interface ITagOption {
  readonly color: string;
  readonly count: number | undefined;
  readonly id: number;
  readonly value: string;
  readonly label: string;
}

const colourStyles: StylesConfig<ITagOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isSelected, isFocused }) => {
    let color: chroma.Color | undefined;
    if (data?.color?.length > 0) color = chroma(data.color);

    const renderBackgroundRule = () => {
      if (isDisabled) {
        return undefined;
      } else if (isSelected) {
        return data.color;
      } else if (isFocused) {
        if (color !== undefined) return color.alpha(0.1).css();
        return undefined;
      } else {
        return undefined;
      }
    };

    const renderColorRule = () => {
      if (isDisabled) {
        return "#ccc";
      }
      if (color === undefined) return "black";
      if (isSelected) {
        if (chroma.contrast(color, "white") > 2) {
          return "white";
        } else {
          return "black";
        }
      }
      return data.color;
    };

    return {
      ...styles,
      backgroundColor: renderBackgroundRule(),
      color: renderColorRule(),
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  multiValue: (styles, { data }) => {
    let color: chroma.Color | undefined;
    if (data?.color?.length > 0) color = chroma(data.color);

    const renderBackgroundRule = () => {
      if (color === undefined) return "#F5F5F5";
      return data.color;
    };

    return {
      ...styles,
      backgroundColor: renderBackgroundRule(),
      color: "black",
    };
  },
  multiValueLabel: (styles, { data }) => {
    const renderColorRule = () => {
      if (data?.color === undefined) return "black";
      return "white";
    };

    return {
      ...styles,
      color: renderColorRule(),
    };
  },
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

interface ICustomSelect {
  updateListTagsState: (newValue: string[]) => void;
}

const CustomSelect: FunctionComponent<ICustomSelect> = ({
  updateListTagsState,
}) => {
  const listTags = useSelector((state: RootState) => state.universe.listtags);
  const [tags, setTags] = useState<ITagOption[]>([]);
  useEffect(() => {
    setTags(
      listTags.map((item: ITag) => ({
        color: item.color,
        count: item.count,
        id: item.id,
        value: item.tagname,
        label: item.tagname,
      })),
    );
  }, []);

  const handleUpdateListTag = (choice: MultiValue<ITagOption>) => {
    updateListTagsState(choice.map((item) => item.value));
  };
  return (
    <>
      <CreatableSelect
        isMulti
        options={tags}
        closeMenuOnSelect={false}
        styles={colourStyles}
        onChange={(choice) => {
          handleUpdateListTag(choice);
        }}
      />
    </>
  );
};

export default CustomSelect;
