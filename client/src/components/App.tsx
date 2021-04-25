import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "../Theme";
import Layout from "./layout";


function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
