import {Route, Switch} from 'react-router-dom';
import Home from "../views/Home";

export const routesConfig = [
    {
        component: Home,
        path: '/home',
        title: 'Home',
        exact: true
    },
]

const AllRoutes = () => {
    return (
        <Switch>
            {
                routesConfig.map(route =>
                    <Route key={route.path} path={route.path} exact component={route.component} />
                )
            }
        </Switch>
    )
}

export default AllRoutes;