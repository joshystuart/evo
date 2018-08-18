// @flow
import { ComponentType } from 'react';
import HomeScene from '../Scenes/Home/HomeScene';
import BasicTelemetryOverlayScene from '../Scenes/Overlays/Telemetry/BasicTelemetryOverlayScene';
import OverlaysScene from '../Scenes/Overlays/OverlaysScene';
import BasicTelemetryOverlayDemoScene from '../Scenes/Overlays/Telemetry/BasicTelemetryOverlayDemoScene';

export type RouteConfig = {
    name: string,
    path: string,
    params: string,
    exact: boolean,
    component: ComponentType<any>,
    props?: {},
    routes?: RouteConfig[],
};

export const routes = {
    home: '/',
    overlays: '/overlays',
    savedOverlays: '/overlays/saved',
    basicTelemetryOverlay: '/overlays/telemetry/basic',
    basicTelemetryOverlayDemo: '/overlays/telemetry/basic-demo',
};

export const routeConfig: RouteConfig[] = [
    {
        name: 'home',
        path: routes.home,
        exact: true,
        component: HomeScene,
    },
    {
        name: 'overlays',
        path: routes.overlays,
        exact: true,
        component: OverlaysScene,
    },
    {
        name: 'my saved overlays',
        path: routes.savedOverlays,
        exact: true,
        component: BasicTelemetryOverlayScene,
    },
    {
        name: 'basic telemetry overlay',
        path: routes.basicTelemetryOverlay,
        exact: true,
        component: BasicTelemetryOverlayScene,
    },
    {
        name: 'basic telemetry overlay demo',
        path: routes.basicTelemetryOverlayDemo,
        exact: true,
        component: BasicTelemetryOverlayDemoScene,
    },
];
