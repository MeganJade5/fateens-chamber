import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color={"purple"} align="center">
            {"Copyright © Fateen "}
            {new Date().getFullYear()}
        </Typography>
    )
}

const Footer = (props) => {
  return (
    <Box sx={{bgcolor: 'blanchedalmond', py:6 }}>
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
                {props.title}
            </Typography>

        <Typography variant="subtitle1" align="center" color={"skyblue"}>
            {props.description}
        </Typography>
        <Copyright />
        </Container>

    </Box>
//     <footer>
//     <h3>Visit again.</h3>
//     <h5>
    //   Whatever your problem may be, my fortune-telling shall lead to the
    //   solution.
//     </h5>
//   </footer>
  );
};

export default Footer;
