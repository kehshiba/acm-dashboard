import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled(Box)(({ theme })=> ({
    padding: "1rem 1rem 0.5rem 1rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}));

export default Wrapper;
