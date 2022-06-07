import StoreInventory from "./Store/StoreInventory";
import StoreOrder from "./Store/StoreOrder";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import StoreByOrderId from "./Store/StoreByOrderId";


const StoreList = () => {
    const { path } = useRouteMatch()

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={`${path}/inventory`} component={StoreInventory} ></Route>
                    <Route path={`${path}/order`} component={StoreOrder} ></Route>
                    <Route path={`${path}/order/{orderId}`} component={StoreByOrderId} ></Route>
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default StoreList;
