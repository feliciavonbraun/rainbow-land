import { Route, Switch } from "react-router";
import DetailPage from "./detailPage/detailPage";
import AccountPage from "./loginPage/accountPage";
import ProfilePage from "./profilePage";
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
            <Route path='/profile'>
                <ProfilePage />
            </Route>
        </Switch>
    )
}
export default Main;