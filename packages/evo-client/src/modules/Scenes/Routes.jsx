// @flow
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Route as RouteType, routeConfig} from 'src/modules/Routing/routeConfig';

const RouteWithSubRoutes = (route: RouteType) => {
    const getSubRoute = (subRoute: RouteType) => (
        <Route
            key={subRoute.name}
            exact={subRoute.exact}
            path={`${subRoute.path}${subRoute.params}`}
            render={props => <subRoute.component {...props} {...subRoute.props} />}
        />
    );

    return (
        <Route
            key={route.name}
            exact={route.exact}
            path={`${route.path}${route.params}`}
            render={props => (
                <route.component {...props} {...route.props}>
                    {// Check for sub routes
                        route.subRoutes &&
                        route.subRoutes.length &&
                        route.subRoutes.map(getSubRoute)}
                </route.component>
            )}
        />
    );
};


class Routes extends Component<Props> {
    render() {
        return (
            <Switch location={location}>
                {routeConfig.map(route => (
                    <RouteWithSubRoutes key={route.name} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Routes;
