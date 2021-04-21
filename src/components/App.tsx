import { ThemeProvider } from "@material-ui/styles";
import btnTheme from "../Theme";
import Layout from "./layout";


function App() {
  return (
    <div>
      <ThemeProvider theme={btnTheme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
