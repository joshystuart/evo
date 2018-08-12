// @flow
import http from 'http';
import express from 'express';

export const app = express();
export const httpServer = http.createServer(app);
