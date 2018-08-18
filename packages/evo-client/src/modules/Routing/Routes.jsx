// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteConfig, routeConfig } from './routeConfig';

const RouteWithSubRoutes = (route: RouteConfig) => {
    const getSubRoute = (subRoute: RouteConfig) => (
        <Route key={subRoute.name} exact={subRoute.exact} path={`${subRoute.path}${subRoute.params}`} render={(props) => <subRoute.component {...props} {...subRoute.props} />} />
    );

    const path = route.params ? `${route.path}${route.params}` : route.path;
    return (
        <Route
            key={route.name}
            exact={route.exact}
            path={path}
            render={(props) => (
                <route.component {...props} {...route.props}>
                    {// Check for sub routes
                    route.routes && route.routes.length && route.routes.map(getSubRoute)}
                </route.component>
            )}
        />
    );
};

class Routes extends Component<Props> {
    render() {
        const { location } = this.props;
        return <Switch location={location}>{routeConfig.map((route) => <RouteWithSubRoutes key={route.name} {...route} />)}</Switch>;
    }
}

export default Routes;
