import { useState, type FunctionComponent } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AntSwitch from "./antSwitch";

interface CreatePostAnsWerDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CreatePostAnsWerDialog: FunctionComponent<
  CreatePostAnsWerDialogProps
> = ({ open, handleClose }) => {
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [editorContent, setEditorContent] = useState<string>("");

  const handleEditorChange = (content: string): void => {
    setEditorContent(content);
  };

  const handleAnonymousToggle = (): void => {
    setAnonymous(!anonymous);
  };

  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
      <DialogTitle className="text-4xl font-extrabold text-black">
        Viết câu trả lời
      </DialogTitle>
      <DialogContent>
        <DialogContentText className="text-2xl font-semibold text-black my-5">
          Đăng với chế độ ẩn danh
        </DialogContentText>
        <FormControlLabel
          className="ml-2 mb-5"
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

        <Quill
          className="h-96 mb-20"
          value={editorContent}
          onChange={handleEditorChange}
          theme="snow"
          style={{ fontFamily: "Arial, sans-serif" }}
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

export default CreatePostAnsWerDialog;
