import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import Form from "./Form"
const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 10%" textAlign="center">
                <Typography
                    fontWeight="bold"
                    fontSize="25px"
                    color="primary"
                >
                    acm portal
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "80%"}
                p="4rem"
                m="4rem auto"
                borderRadius="2.5rem"
                backgroundColor={theme.palette.background.alt}
            >
            <Typography fontWeight="400" variant="h5" sx={{mb:"1.5rem"}}>
                students portal for acm amritapuri chapter
            </Typography>
            <Form />
            </Box>
        </Box>
    )
}
export default LoginPage