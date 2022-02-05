import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export default styled(Typography)`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(71, 121, 255, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
