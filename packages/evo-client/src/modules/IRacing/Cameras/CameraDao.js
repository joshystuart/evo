// @flow
import {COMMANDS} from 'src/modules/IRacing/IRacingServiceConstants';
import type IRacingService from 'src/modules/IRacing/IRacingService';

export default class CameraDao {
    _iRacingService: IRacingService;

    constructor(iRacingService: IRacingService) {
        this._iRacingService = iRacingService;
    }

    hideUi(): void {
        this._iRacingService.sendCommand(COMMANDS.CAMERA_SET_STATE, 8);
    }

    changeCamera(camera: number, driver: ?DriverDto): void {
        if (driver) {
            this._iRacingService.sendCommand(COMMANDS.CHANGE_CAMERA_DRIVER, driver ? driver.carNumber : 0, camera, 0);
        } else {
            this._iRacingService.sendCommand(COMMANDS.CHANGE_CAMERA_POSITION, 0, camera, 0);
        }
    }
}
