// @flow

export type SessionInfoData = {
    Sessions: SessionData[]
};

export type PositionData = {
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

export type FastestLapData = {
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
    ResultsPositions: PositionData[],
    SessionName: string,
    ResultsNumCautionLaps: number,
    ResultsFastestLap: FastestLapData[],
    SessionNum: number,
    SessionType: string,
    ResultsAverageLapTime: number,
    SessionRunGroupsUsed: number,
    SessionTrackRubberState: string,
    ResultsLapsComplete: number
}

