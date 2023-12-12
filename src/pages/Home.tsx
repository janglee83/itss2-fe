/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, type FunctionComponent } from "react";
import Button from "@mui/material/Button";
import CreatePostDialog from "components/ui/createQuestionDialog";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "state/store";
import { decrement, incrementAsync } from "state/counter/counterSlice";

const Home: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Button
        className="border border-blue-500 px-4 py-2 text-blue-500 rounded"
        variant="outlined"
        onClick={handleToggle}
      >
        Viết câu hỏi
      </Button>
      <CreatePostDialog open={open} handleClose={handleToggle} />

      <>
        <h2>{count}</h2>
        <div>
          <button onClick={async () => await dispatch(incrementAsync(10))}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </>
    </>
  );
};

export default Home;
