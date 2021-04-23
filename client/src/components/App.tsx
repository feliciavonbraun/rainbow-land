import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import btnTheme from "../Theme";
import Layout from "./layout";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={btnTheme}>
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
