import React, { useState, type FunctionComponent } from "react";
import Button from "@mui/material/Button";
import CreatePostDialog from "../components/ui/createQuestionDialog";

const Home: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <React.Fragment>
      <Button
        className="border border-blue-500 px-4 py-2 text-blue-500 rounded"
        variant="outlined"
        onClick={handleToggle}
      >
        Viết câu hỏi
      </Button>
      <CreatePostDialog open={open} handleClose={handleToggle} />
    </React.Fragment>
  );
};

export default Home;
