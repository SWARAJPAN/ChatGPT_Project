import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#2B2C2F",
    },
    error: {
      main: "#d93025",
    },
    // background: {
    //   default: "#fff",
    // },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          textTransform: "none",
          textAlign: "right",
          fontSize: "1rem",
          alignItems: "center",
          justifyContent: "left",
          padding: "5px 20px ",
          width: "100%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "80%",
          margin: "3rem auto",
          display: "flex",
          position: "absolute",
          bottom: "0px",
          left: "0px",
          right: "0px",
          backgroundColor: "#40414F",
          borderRadius: "5px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            input: {
              color: "#ffff",
            },
          },
          "@media (max-width: 768px)": {
            width: "95%",
            margin: "2rem auto",
          },
        },
      },
    },
  },
});

export default theme;
