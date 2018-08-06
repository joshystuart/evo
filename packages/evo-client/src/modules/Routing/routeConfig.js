// @flow
import * as React from 'react';
import HomeScene from 'src/modules/Scenes/Home/HomeScene';
import BasicTelemetryOverlayScene from 'src/modules/Scenes/Overlays/BasicTelemetryOverlayScene';

export type Route = {
    name: string,
    path: string,
    params: string,
    exact: boolean,
    component: React.ComponentType<any>,
    isPrivate: boolean,
    props?: {},
    subRoutes?: Route[]
};

export const routes = {
    home: '/',
    overlays: '/overlays'
};

export const routeConfig: Route[] = [
    {
        name: 'home',
        path: routes.home,
        params: '',
        exact: true,
        component: HomeScene,
        isPrivate: false
    },
    {
        name: 'overlays',
        path: routes.overlays,
        params: '',
        exact: true,
        component: BasicTelemetryOverlayScene,
        isPrivate: false
    }
];
