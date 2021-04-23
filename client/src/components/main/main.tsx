import { Route, Switch } from "react-router";
import DetailPage from "./detailPage/detailPage";
import LoginPage from "./loginPage/loginPage";
import StartPage from "./startPage/startpage";

function Main() {
    return (
        <Switch>
            <Route exact path='/'>
                <StartPage />
            </Route>
            <Route path='/carousel/:id' >
                <DetailPage />
            </Route>
            <Route path='/loginPage'>
                <LoginPage />
            </Route>
        </Switch>
    )
}
export default Main;