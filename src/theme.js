import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
    h4: {
      fontWeight: 700,
      fontFamily: 'Bona Nova',
    },
    body1: {
      fontWeight: 400,
      fontFamily: 'Bona Nova',
    },
    h61: {
      fontWeight: 400,
      fontStyle:'italic',
      fontFamily: 'Bona Nova',
    },
    h6: {
      fontWeight: 700,
      fontFamily: 'Bona Nova',
    },
  },
  components:{
    paper: {
      backgroundColor: "#F7F7F7",
      border: "1px solid #E5E5E5",
    }
  },
});
