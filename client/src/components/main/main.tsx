import { Route, Switch } from "react-router";
import DetailPage from "./detailPage/detailPage";
import AccountPage from "./loginPage/accountPage";
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
            <Route path='/accountPage'>
                <AccountPage />
            </Route>
        </Switch>
    )
}
export default Main;