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
      fontWeight: 300,
    },
    h4: {
      fontWeight: 500,
      fontFamily: 'Commissioner',
    },
    body1: {
      fontWeight: 300,
      fontFamily: 'Commissioner'
    },
    body3: {
      fontWeight: 300,
      fontFamily: 'Commissioner',
      color: 'white'
    },
    h61: {
      fontWeight:300,
      fontStyle:'italic',
      fontFamily: 'Commissioner',
    },
    h5: {
      fontWeight: 300,
      fontFamily: 'Commissioner',
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Commissioner',
    },
  },
  components:{
    paper: {
      backgroundColor: "#132d46",
      border: "1px solid #E5E5E5",
    }
  },
});
