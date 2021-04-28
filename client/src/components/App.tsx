import { ThemeProvider } from "@material-ui/styles";
import LoginProvider from '../loginContext'
import { BrowserRouter } from "react-router-dom";
import theme from "../Theme";
import Layout from "./layout";


function App() {
  return (
      <BrowserRouter>
        <LoginProvider>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </LoginProvider>    
      </BrowserRouter>
  );
}

export default App;
