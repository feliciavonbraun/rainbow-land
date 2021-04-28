import { ThemeProvider } from "@material-ui/styles";
import LoginProvider from '../loginContext'
import { BrowserRouter } from "react-router-dom";
import theme from "../Theme";
import Layout from "./layout";
import PostProvider from "../postsContext";


function App() {
  return (
      <BrowserRouter>
        <LoginProvider>
          <PostProvider>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
          </PostProvider>
        </LoginProvider>    
      </BrowserRouter>
  );
}

export default App;
