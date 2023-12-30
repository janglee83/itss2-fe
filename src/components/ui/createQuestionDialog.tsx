/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FunctionComponent } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import makeAnimated from "react-select/animated";
import "react-quill/dist/quill.snow.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { colourOptions } from "data/subject";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "state/store";
import Select from "react-select";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { type ICreateQuestion } from "state/universe/state";
import { FormControlLabel, FormHelperText, Switch } from "@mui/material";
import ReactQuill from "react-quill";
import { createNewQuestion } from "state/questionDetail/reducers";
import { setIsLoading } from "state/universe";

const animatedComponents = makeAnimated();

interface CreatePostDialogProps {
  open: boolean;
  handleClose: () => void;
}

const validateRule = (): Yup.ObjectSchema<
  {
    title: string;
    editorContent: string;
    anonymous: NonNullable<boolean | undefined>;
  },
  Yup.AnyObject,
  {
    title: undefined;
    editorContent: undefined;
    anonymous: undefined;
  },
  ""
> => {
  return Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .max(255, "Title must be at most 255 characters"),
    editorContent: Yup.string()
      .required("Editor content is required")
      .max(40000, "Editor content must be at most 40000 characters"),
    anonymous: Yup.boolean().required("Please specify if anonymous or not"),
  });
};

const CreatePostDialog: FunctionComponent<CreatePostDialogProps> = ({
  open,
  handleClose,
  ...other
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const createQuestion = useSelector(
    (state: RootState) => state.universe.createQuestion,
  );

  const handleSubmitForm = async (
    values: ICreateQuestion,
    {
      setErrors,
      setStatus,
      setSubmitting,
    }: { setErrors: any; setStatus: any; setSubmitting: any },
  ): Promise<void> => {
    dispatch(setIsLoading(true));
    const payload = {
      title: values.title,
      content: values.editorContent,
      tags: ["tag 1", "tag 2"],
      is_anonymous: values.anonymous ? 1 : 0,
      user_id: 1,
    };
    try {
      await dispatch(createNewQuestion(payload));
      setStatus({ success: true });
      setSubmitting(false);
      handleClose();
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
      <DialogTitle className="text-4xl font-extrabold text-black mb-5">
        Tạo bài đăng
      </DialogTitle>
      <Formik
        initialValues={createQuestion}
        validationSchema={validateRule}
        onSubmit={handleSubmitForm}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setFieldValue,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...other}>
            <DialogContent>
              <DialogContentText className="text-2xl font-semibold text-black">
                Tiêu đề
              </DialogContentText>
              <Box className="border border-gray-300 p-2 rounded">
                <TextField
                  autoFocus
                  id="title"
                  type="text"
                  fullWidth
                  variant="standard"
                  style={{ width: "calc(50% - 8px)" }}
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="title"
                  autoComplete="off"
                  inputProps={{}}
                />
              </Box>

              {(touched.title ?? false) && errors.title != null && (
                <FormHelperText error>{errors.title}</FormHelperText>
              )}

              <DialogContentText className="text-2xl font-semibold text-black mb-5">
                Gắn thẻ cho câu hỏi
              </DialogContentText>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={colourOptions}
              />
              <DialogContentText className="text-2xl font-semibold text-black my-5">
                Nội dung
              </DialogContentText>
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
              <DialogContentText className="text-2xl font-semibold text-black mt-20 mb-5">
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
            </DialogContent>
            <DialogActions className="mr-3 mb-5">
              <Button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-40 mr-3 rounded-3xl"
                onClick={handleClose}
              >
                Huỷ bỏ
              </Button>
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font.bold py-2 px-4 w-40 rounded-3xl"
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

export default CreatePostDialog;
