import { createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFBE85',
        },
        secondary: {
            main: '#92D2F5',
        },
        text: {
            primary: '#414141',
        }
    },
    typography: {
        fontFamily: [
            'Josefin Sans',
            'sans-serif',
        ].join(','),
        fontSize: '1rem',
        h1: {
            color: 'black',
            fontSize: '2rem',
        },
        h2: {
            fontFamily: 'Sansita, sans-serif',
            color: '#F8ABC7',
            fontSize: '4rem',
            fontWeight: 'bold',
            webkitTextStroke: '3px var(--crlWhite)', // funkar ej  
        }
    },
    shadows: "none",
  });

  export default theme;