import { type FunctionComponent, useState } from "react";
import Button from "@mui/material/Button";
import CreateAnswerDialog from "components/ui/CreateAnswerDialog";

const Question: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        className="border border-blue-500 px-4 py-2 text-blue-500 rounded"
        variant="outlined"
        onClick={handleToggle}
      >
        Viết câu trả lời
      </Button>
      <CreateAnswerDialog open={isOpen} handleClose={handleToggle} />
    </>
  );
};

export default Question;
