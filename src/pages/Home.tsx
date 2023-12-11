import React, { type FunctionComponent } from "react";
import Button from "@mui/material/Button";
import CreatePostDialog from "../components/ui/createQuestionDialog";

const Home: FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        className="border border-blue-500 px-4 py-2 text-blue-500 rounded"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Viết câu hỏi
      </Button>
      <CreatePostDialog open={open} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default Home;
