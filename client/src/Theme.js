import { createMuiTheme } from "@material-ui/core";


const btnTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFBE85',
        },
        secondary: {
            main: '#92D2F5'
        },
    },
    typography: {
        fontFamily: [
            'Josefin Sans',
            'sans-serif',
        ].join(',')
    },
    shape: {
        borderRadius: 30,
    },
    shadows: "none",

  });

  export default btnTheme;