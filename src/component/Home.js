import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Info from "./Info";
import PetList from './PetList';
import StoreList from './StoreList';
import UserList from './UserList';


const Home = (() => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={withRouter(Info)}></Route>
                    <Route path="/pet" component={withRouter(PetList)}></Route>
                    <Route path="/store" component={withRouter(StoreList)}></Route>
                    <Route path="/user" component={withRouter(UserList)}></Route>
                </Switch>
            </BrowserRouter>
    )
})

export default Home