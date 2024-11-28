import { BfbButton } from "@components/BfbButton";
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const ToScoresButton = () => (
  <BfbButton
    component={Link}
    to="/scores"
    endIcon={<ArrowRight />}
    sx={{
      position: "absolute",
      right: "2vw",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    Til poengene
  </BfbButton>
);
