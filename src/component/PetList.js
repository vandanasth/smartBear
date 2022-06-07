import PetByStatus from "./Pet/PetByStatus";
import PetByTags from "./Pet/PetByTags";
import { BrowserRouter, useLocation, Route, Switch, useRouteMatch } from "react-router-dom";
import Utility from "./Utility/Utility";
import PetById from "./Pet/PetById";


const PetList = () => {
    const { path } = useRouteMatch()
    const { pathname } = useLocation()

    return (
        <>
            {(pathname === path) && <Utility></Utility>}
            <BrowserRouter>
                <Switch>
                    <Route path={`${path}/findByStatus`} component={PetByStatus} ></Route>
                    <Route path={`${path}/findByTags`} component={PetByTags} ></Route>
                    <Route path={`${path}/{petId}`} component={PetById} ></Route>
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default PetList;
