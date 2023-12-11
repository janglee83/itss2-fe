import React, { type FunctionComponent } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { colourOptions } from "../../data/subject";

const animatedComponents = makeAnimated();

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

interface CreatePostDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CreatePostDialog: FunctionComponent<CreatePostDialogProps> = ({
  open,
  handleClose,
}) => {
  const [anonymous, setAnonymous] = React.useState(false);
  const [editorContent, setEditorContent] = React.useState("");

  const handleEditorChange = (content: string): void => {
    setEditorContent(content);
  };

  const handleAnonymousToggle = (): void => {
    setAnonymous(!anonymous);
  };

  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
      <DialogTitle className="text-2xl font-bold text-black mb-5">
        Tạo bài đăng
      </DialogTitle>
      <DialogContent>
        <DialogContentText className="text-base font-semibold text-black">
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
          />
        </Box>
        <DialogContentText className="text-base font-semibold text-black mb-5">
          Gắn thẻ cho câu hỏi
        </DialogContentText>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={colourOptions}
        />
        <DialogContentText className="text-base font-semibold text-black my-5">
          Nội dung
        </DialogContentText>
        <Quill
          className="h-96"
          value={editorContent}
          onChange={handleEditorChange}
          theme="snow"
          style={{ fontFamily: "Arial, sans-serif" }}
        />
        <DialogContentText className="text-base font-semibold text-black mt-20 mb-5">
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
          onClick={handleClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-40 rounded-3xl"
        >
          Đăng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostDialog;
