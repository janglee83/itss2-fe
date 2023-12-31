import {
  useAutocomplete,
  type AutocompleteGetTagProps,
} from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type ITag } from "state/defineInterface";
import { setTag } from "state/search";
import { type AppDispatch, type RootState } from "state/store";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
  width: 100%;
`,
);

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 100%;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

const StyledTag = styled(Tag)<TagProps>(
  () => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  & span {
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    fill: white;
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 200px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
  color: string;
}

function Tag(props: TagProps): JSX.Element {
  const { label, color, onDelete, ...other } = props;
  return (
    <div style={{ backgroundColor: color }} {...other}>
      <span className="relative leading-[22px]">{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

interface IInputTag {
  options: ITag[];
}

const InputTag: FunctionComponent<IInputTag> = ({ options }) => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.search);
  const navigate = useNavigate();

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    value: search.tags,
    onChange: (e, v) => {
      dispatch(setTag(v));
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("tags", v.map((tag) => tag.tagname).join(","));

      console.log(searchParams.toString());
      // Update the URL with the new search parameters
      navigate("/search?" + searchParams.toString());
    },
    multiple: true,
    options: options,
    getOptionLabel: (option: ITag) => option.tagname,
  });

  const isTagLimitReached = value.length >= 5;

  return (
    <Root>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option: ITag, index: number) => (
            // eslint-disable-next-line
            <StyledTag
              color={option.color}
              label={option.tagname}
              {...getTagProps({
                index,
              })}
            />
          ))}
          <input {...getInputProps()} disabled={isTagLimitReached} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof options).map(
            (option: ITag, index: number) => (
              <li key={index} {...getOptionProps({ option, index })}>
                <span>{option.tagname}</span>
                <CheckIcon fontSize="small" />
              </li>
            ),
          )}
        </Listbox>
      ) : null}
    </Root>
  );
};

export default InputTag;
