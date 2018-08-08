// @flow
const net = require('net');

const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port}, () => {
    client.end();

    if (!startedElectron) {
        console.info('starting electron');
        startedElectron = true;
        // eslint-disable-next-line global-require
        const {exec} = require('child_process');
        exec('npm run electron');
    }
});

tryConnection();

client.on('error', (error) => {
    console.error(error);
    setTimeout(tryConnection, 1000);
});
