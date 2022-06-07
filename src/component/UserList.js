import { BrowserRouter, useLocation, Route, Switch, useRouteMatch } from "react-router-dom";
import Utility from "./Utility/Utility";
import UserName from "./User/UserName";
import UserLogout from "./User/UserLogout";
import UserLogin from "./User/UserLogin";
import UserCreateList from "./User/UserCreateList";
import UserCreateWithArray from "./User/UserCreateWithArray";


const UserList = () => {
    const { path } = useRouteMatch()
    const { pathname } = useLocation()

    return (
        <>
            {pathname === path && <Utility></Utility>}
            <BrowserRouter>
                <Switch>
                    <Route path={`${path}/createWithArray`} component={UserCreateWithArray} ></Route>
                    <Route path={`${path}/createWithList`} component={UserCreateList} ></Route>
                    <Route path={`${path}/login`} component={UserLogin} ></Route>
                    <Route path={`${path}/logout`} component={UserLogout} ></Route>
                    <Route path={`${path}/{username}`} component={UserName} ></Route>
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default UserList;
