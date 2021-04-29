import { Route, Switch } from "react-router";
import CarouselPage from "./carouselPage/carouselPage";
import AccountPage from "./accountPage/accountPage";
import ProfilePage from "./profilePage";
import StartPage from "./startPage/startpage";

function Main() {
    return (
        <Switch>
            <Route exact path='/'>
                <StartPage />
            </Route>
            <Route path='/carousel/:id' >
                <CarouselPage />
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