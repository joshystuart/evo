// @flow
import {ComponentType} from 'react';
import HomeScene from 'src/modules/Scenes/Home/HomeScene';
import BasicTelemetryOverlayScene from 'src/modules/Scenes/Overlays/Telemetry/BasicTelemetryOverlayScene';

export type RouteConfig = {
    name: string,
    path: string,
    params: string,
    exact: boolean,
    component: ComponentType<any>,
    props?: {},
    routes?: RouteConfig[]
};

export const routes = {
    home: '/',
    overlays: '/overlays',
    savedOverlays: '/overlays/saved',
    basicTelemetryOverlay: '/overlays/telemetry/basic'
};

export const routeConfig: RouteConfig[] = [
    {
        name: 'home',
        path: routes.home,
        exact: true,
        component: HomeScene
    },
    {
        name: 'my saved overlays',
        path: routes.savedOverlays,
        exact: true,
        component: BasicTelemetryOverlayScene
    },
    {
        name: 'overlays',
        path: routes.overlays,
        exact: true,
        component: BasicTelemetryOverlayScene
    },
    {
        name: 'telemetry',
        path: routes.basicTelemetryOverlay,
        exact: true,
        component: BasicTelemetryOverlayScene
    }
];
