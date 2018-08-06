// @flow
import {iRacingService} from 'src/modules/IRacing/IRacingServiceFactory';

describe('IRacingService', () => {
    beforeEach(() => {

    });

    it('should successfully connect to the iRacing server', async () => {
        console.info('----');
        iRacingService.connect();
    });
});
