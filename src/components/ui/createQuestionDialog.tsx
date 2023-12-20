/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { type FunctionComponent, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import makeAnimated from "react-select/animated";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { colourOptions } from "data/subject";
import AntSwitch from "./antSwitch";
import { useDispatch } from "react-redux";
import { createNewQuestion } from "state/questionDetail/reducers";
import { type AppDispatch } from "state/store";
import Select from "react-select";

const animatedComponents = makeAnimated();

interface CreatePostDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CreatePostDialog: FunctionComponent<CreatePostDialogProps> = ({
  open,
  handleClose,
}) => {
  const [anonymous, setAnonymous] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  // const [selectedTags, setSelectedTags] = useState<ColourOption[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const handleAnonymousToggle = (): void => {
    setAnonymous(!anonymous);
  };
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [editorError, setEditorError] = useState("");
  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };
  const validateInputs = () => {
    let isValid = true;

    // Title validation
    if (title.trim().length === 0) {
      setTitleError("Đây là trường bắt buộc");
      isValid = false;
    } else if (title.length > 255) {
      setTitleError("Vui lòng nhập tiêu đề dưới 255 ký tự");
      isValid = false;
    } else {
      setTitleError("");
    }

    // Editor content validation
    if (editorContent.trim().length === 0) {
      setEditorError("Đây là trường bắt buộc");
      isValid = false;
    } else if (editorContent.length > 40000) {
      setEditorError(
        "Nội dung quá dài. Vui lòng giảm độ dài dưới 40,000 ký tự",
      );
      isValid = false;
    } else {
      setEditorError("");
    }

    return isValid;
  };
  const handleSubmit = async () => {
    if (!validateInputs()) {
      return; // Do not proceed if validation fails
    }

    const isAnonymous = anonymous ? 1 : 0;
    const inputElement = document.getElementById(
      "name",
    ) as HTMLInputElement | null;
    const questionTitle = inputElement != null ? inputElement.value : "";
    const payload = {
      questionTitle,
      content: editorContent,
      tags: ["tag 1", "tag 2"],
      is_anonymous: isAnonymous,
      user_id: 99,
    };

    try {
      const result = await dispatch(createNewQuestion(payload));
      console.log(result);
      handleClose(); // Close the dialog on successful submission
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
      <DialogTitle className="text-4xl font-extrabold text-black mb-5">
        Tạo bài đăng
      </DialogTitle>
      <DialogContent>
        <DialogContentText className="text-2xl font-semibold text-black">
          Tiêu đề
        </DialogContentText>
        <Box className="border border-gray-300 p-2 rounded">
          <TextField
            autoFocus
            id="name"
            label=""
            type="text"
            fullWidth
            variant="standard"
            style={{ width: "calc(50% - 8px)" }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError(""); // Clear title error on change
            }}
            error={Boolean(titleError)}
            helperText={titleError}
          />
        </Box>
        <DialogContentText className="text-2xl font-semibold text-black mb-5">
          Gắn thẻ cho câu hỏi
        </DialogContentText>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={colourOptions}
          // onChange={handleTagChange}
        />
        <DialogContentText className="text-2xl font-semibold text-black my-5">
          Nội dung
        </DialogContentText>
        <Quill
          className="h-96"
          value={editorContent}
          onChange={handleEditorChange}
          theme="snow"
          style={{ fontFamily: "Arial, sans-serif" }}
        />
        {editorError}
        <DialogContentText className="text-2xl font-semibold text-black mt-20 mb-5">
          Đăng với chế độ ẩn danh
        </DialogContentText>
        <FormControlLabel
          className="ml-2"
          control={
            <AntSwitch
              checked={anonymous}
              onChange={handleAnonymousToggle}
              name="anonymous"
              className="scale-150"
            />
          }
          label=""
        />
      </DialogContent>
      <DialogActions className="mr-3 mb-5">
        <Button
          onClick={handleClose}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-40 mr-3 rounded-3xl"
        >
          Huỷ bỏ
        </Button>
        <Button
          onClick={() => {
            handleSubmit();
          }}
          className="bg-blue-500 hover.bg-blue-700 text-white font.bold py-2 px-4 w-40 rounded-3xl"
        >
          Đăng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostDialog;
