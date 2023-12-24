/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { startTransition, type FunctionComponent } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "@/state/store";
import { type ICreateAnswer } from "@/state/universe/state";
import { Field, Formik } from "formik";
import { FormControlLabel, FormHelperText, Switch } from "@mui/material";
import ReactQuill from "react-quill";
import { setIsLoading } from "state/universe";
import { createNewAnswer } from "state/questionDetail/reducers";
import { useNavigate } from "react-router-dom";

interface ICreateAnswerDialog {
  open: boolean;
  handleClose: () => void;
  questionId?: string | undefined;
}

const validateRule = (): Yup.ObjectSchema<
  {
    editorContent: string;
    anonymous: NonNullable<boolean | undefined>;
  },
  Yup.AnyObject,
  {
    editorContent: undefined;
    anonymous: undefined;
  },
  ""
> => {
  return Yup.object().shape({
    editorContent: Yup.string()
      .required("Editor content is required")
      .max(40000, "Editor content must be at most 40000 characters"),
    anonymous: Yup.boolean().required("Please specify if anonymous or not"),
  });
};

const CreateAnswerDialog: FunctionComponent<ICreateAnswerDialog> = ({
  open,
  handleClose,
  questionId,
  ...other
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const createAnswer = useSelector(
    (state: RootState) => state.universe.createAnswer,
  );
  const navigate = useNavigate();

  const handleSubmitForm = async (
    values: ICreateAnswer,
    {
      setErrors,
      setStatus,
      setSubmitting,
    }: { setErrors: any; setStatus: any; setSubmitting: any },
  ): Promise<void> => {
    dispatch(setIsLoading(true));
    const payload = {
      user_id: 1,
      question_id: questionId,
      content: values.editorContent,
      is_anonymous: values.anonymous ? 1 : 0,
    };
    try {
      await dispatch(createNewAnswer(payload));
      setStatus({ success: true });
      setSubmitting(false);
      handleClose();
      startTransition(() => {
        navigate(`/question/detail/${questionId}`);
      });
    } catch (error) {
      setStatus({ success: false });
      setErrors({ submit: (error as Error).message });
      setSubmitting(false);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
      <Formik
        initialValues={createAnswer}
        validationSchema={validateRule}
        onSubmit={handleSubmitForm}
      >
        {({
          errors,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setFieldValue,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...other}>
            <DialogTitle className="text-4xl font-extrabold text-black">
              Viết câu trả lời
            </DialogTitle>
            <DialogContent>
              <DialogContentText className="text-2xl font-semibold text-black my-5">
                Đăng với chế độ ẩn danh
              </DialogContentText>
              <Field name="anonymous">
                {({ field }: { field: any }) => (
                  <FormControlLabel
                    control={<Switch {...field} className="scale-150" />}
                    className="ml-2"
                    name={field.name}
                    label={undefined}
                  />
                )}
              </Field>
              {(touched.editorContent ?? false) &&
                errors.editorContent != null && (
                  <FormHelperText error>{errors.editorContent}</FormHelperText>
                )}
              <Field name="editorContent">
                {() => (
                  <ReactQuill
                    className="h-96"
                    value={values.editorContent}
                    theme="snow"
                    style={{ fontFamily: "Arial, sans-serif" }}
                    onChange={async (newValue) =>
                      await setFieldValue("editorContent", newValue)
                    }
                  />
                )}
              </Field>
            </DialogContent>
            <DialogActions className="mr-3 mb-5">
              <Button
                onClick={handleClose}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-40 mr-3 rounded-3xl"
              >
                Huỷ bỏ
              </Button>
              <Button
                className="bg-blue-500 hover.bg-blue-700 text-white font.bold py-2 px-4 w-40 rounded-3xl"
                disabled={isSubmitting}
                disableElevation
                fullWidth
                size="large"
                type="submit"
              >
                Đăng
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default CreateAnswerDialog;
