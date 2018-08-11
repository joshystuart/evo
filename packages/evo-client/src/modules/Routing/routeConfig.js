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
    props?: {},
    subRoutes?: Route[]
};

export const routes = {
    home: '/',
    overlays: {
        root: '/overlays',
        telemetry: {
            root: '/telemetry',
            basic: '/basic'
        }
    }
};

export const routeConfig: Route[] = [
    {
        name: 'home',
        path: routes.home,
        params: '',
        exact: true,
        component: HomeScene
    },
    {
        name: 'overlays',
        path: `${routes.overlays.root}${routes.overlays.telemetry.root}${routes.overlays.telemetry.basic}`,
        params: '',
        exact: true,
        component: BasicTelemetryOverlayScene
    }
];
