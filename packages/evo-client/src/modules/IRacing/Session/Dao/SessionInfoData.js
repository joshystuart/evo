// @flow

export type SessionInfoData = {
    Sessions: SessionData[]
};

export type DriverSessionResultsData = {
    LapsDriven: number,
    LapsComplete: number,
    FastestTime: number,
    ReasonOutStr: string,
    LapsLed: number,
    JokerLapsComplete: number,
    Lap: number,
    ReasonOutId: number,
    Incidents: number,
    Time: number,
    CarIdx: number,
    LastTime: number,
    Position: number,
    ClassPosition: number,
    FastestLap: number
}

export type FastedLapData = {
    CarIdx: number,
    FastestLap: number,
    FastestTime: number
}

export type SessionData = {
    ResultsNumLeadChanges: number,
    SessionSubType: string | null,
    SessionLaps: string,
    SessionSkipped: number,
    SessionTime: string,
    ResultsOfficial: number,
    ResultsNumCautionFlags: number,
    SessionNumLapsToAvg: number,
    ResultsPositions: DriverSessionResultsData[],
    SessionName: string,
    ResultsNumCautionLaps: number,
    ResultsFastestLap: FastedLapData[],
    SessionNum: number,
    SessionType: string,
    ResultsAverageLapTime: number,
    SessionRunGroupsUsed: number,
    SessionTrackRubberState: string,
    ResultsLapsComplete: number
}
