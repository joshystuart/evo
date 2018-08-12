const EVENTS = {
    MESSAGE: 'message',
    OPEN: 'open',
    ERROR: 'error',
    CLOSED: 'closed'
};

// TODO move to camera service
const COMMANDS = {
    CHANGE_CAMERA_POSITION: 'cam_switch_pos',
    CHANGE_CAMERA_DRIVER: 'cam_switch_num',
    CAMERA_SET_STATE: 'cam_set_state'
};

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
    TV_3: 20
};

export {EVENTS, COMMANDS, CAMERAS};
