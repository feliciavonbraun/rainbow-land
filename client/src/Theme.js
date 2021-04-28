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
        fontSize: 12,
        h1: {
            color: '#414141',
            fontSize: '2rem',
        },
        h2: {
            fontFamily: 'Sansita, sans-serif',
            color: '#F8ABC7',
            fontSize: '4rem',
            fontWeight: 'bold',
            WebkitTextStroke: '3px white', 
        },
        h3: {
            color: '#414141',
            fontSize: '1.2rem'
        },
        subtitle1: {
            color: '#414141',
            fontSize: '1.1rem',
            fontWeight: 'bold'

        }
    },
    shadows: "none",
  });

  export default theme;