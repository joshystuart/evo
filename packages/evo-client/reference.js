const _ = window._;
const REQUEST_PARAMS = [];
const REQUEST_PARAMS_ONCE = [];
const FPS = 1;
const SERVER = '127.0.0.1:8182';
const MY_DRIVER_ID = 256366;
const COMMANDS = {
    CHANGE_CAMERA_POSITION: 'cam_switch_pos',
    CHANGE_CAMERA_DRIVER: 'cam_switch_num',
    CAMERA_SET_STATE: 'cam_set_state',
};
const CAMERA_INTERVAL = 10; // in seconds
const HIDE_UI_POLLING = 30; // in seconds

const CAMERAS = {
    NOSE: 1,
    GEARBOX: 2,
    ROLL_BAR: 3,
    LF_SUSPENSION: 4,
    LR_SUSPENSION: 5,
    GYRO: 6,
    RF_SUSPENSION: 7,
    RR_SUSPENSION: 8,
    COCKPIT: 9,
    BLIMP: 10,
    CHOPPER: 11,
    CHASE: 12,
    FAR_CHASE: 13,
    REAR_CHASE: 14,
    PIT_LANE_1: 15,
    PIT_LANE_2: 16,
    SCENIC: 17,
    TV_1: 18,
    TV_2: 19,
    TV_3: 20,
};

const CAMERA_GROUPS = [CAMERAS.CHOPPER];

let currentDriver = null;
const ws = new WebSocket('ws://' + SERVER + '/ws');

const getData = (requestParams, requestParamsOnce) => {
    const request = {
        fps: FPS,
        readIbt: false,
        requestParams: requestParams,
        requestParamsOnce: requestParamsOnce,
    };
    ws.send(JSON.stringify(request));
};

const sendCommand = (command, ...args) => {
    const request = {
        command: command,
        args: args,
    };
    ws.send(JSON.stringify(request));
};

const getDriverInfo = () => {
    getData(['DriverInfo'], []);
};

const changeCamera = (cameraGroup) => {
    // if we have the current driver focus on them
    if (currentDriver) {
        sendCommand(COMMANDS.CHANGE_CAMERA_DRIVER, currentDriver.CarNumberRaw, cameraGroup, 0);
        console.info('Changing the camera to ' + cameraGroup + ' on driver ' + currentDriver.UserName);
    } else {
        // else just change camera on current
        sendCommand(COMMANDS.CHANGE_CAMERA_POSITION, 0, cameraGroup, 0);
        console.info('Changing the camera to ' + cameraGroup);
    }
};

const rotateCameraGroups = () => {
    let i = 0;

    setInterval(() => {
        // reset to the start
        if (typeof CAMERA_GROUPS[i] === 'undefined') {
            i = 0;
        }

        changeCamera(CAMERA_GROUPS[i]);
        i++;
    }, CAMERA_INTERVAL * 1000);
};

const hideUi = () => {
    console.info('Hiding the UI elements');
    // hide
    sendCommand(COMMANDS.CAMERA_SET_STATE, 8);
    // make sure we hide it if it pops up again
    setInterval(() => {
        console.info('Hiding the UI elements');
        sendCommand(COMMANDS.CAMERA_SET_STATE, 8);
    }, HIDE_UI_POLLING * 1000);
};

const handleDriverInfoData = (driverInfo) => {
    const drivers = _.get(driverInfo, 'Drivers');

    if (drivers) {
        currentDriver = _.find(drivers, (driver) => {
            return driver.UserID === MY_DRIVER_ID;
        });
        console.info('Found driver', currentDriver);
    }
};

const parseData = (message) => {
    try {
        const parsedData = JSON.parse(message.data);

        const driverInfo = _.get(parsedData, 'data.DriverInfo');
        if (driverInfo) {
            handleDriverInfoData(driverInfo);
        }
    } catch (error) {
        console.error(error);
    }
};

ws.onopen = () => {
    console.info('Starting camera rotator');
    // hide the UI
    hideUi();

    // get driver data
    getDriverInfo();

    // rotate
    rotateCameraGroups();
};

ws.onmessage = (message) => {
    if (message.data) {
        parseData(message);
    }
};
