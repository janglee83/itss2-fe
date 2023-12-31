import Typography from "@mui/material/Typography";
import { type FunctionComponent } from "react";

interface NoDataProps {
  message?: string;
}

const NoData: FunctionComponent<NoDataProps> = ({
  message = "Không tìm thấy kết quả phù hợp",
}) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="body1">{message}</Typography>
    </div>
  );
};

export default NoData;
