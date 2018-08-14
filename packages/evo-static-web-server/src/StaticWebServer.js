// @flow
import path from 'path';
import express from 'express';

export const EVENTS = {
    CONNECTION: 'connection'
};

export default class StaticWebServer {
    _staticDir: string;
    _port: number;
    _defaultIndex: string;
    _httpServer: any;

    constructor(
        staticDir: string,
        port: number = 3000,
        defaultIndex: ?string = 'index.html',
        httpServer: ?any = express(),
    ) {
        this._staticDir = staticDir;
        this._port = port;
        this._httpServer = httpServer;
        this._defaultIndex = defaultIndex;
    }

    connect() {
        this._httpServer.use(express.static(this._staticDir));

        this._httpServer.get('*', (request, response) => {
            response.sendFile(path.resolve(this._staticDir, this._defaultIndex));
        });

        this._httpServer.listen(this._port);
    }
}
