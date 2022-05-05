export enum AvailabilityStates {
    DOWN = "DOWN",
    UP = "UP",
}

export enum UpStates {
    VOID,
    STOPPED = "STOPPED",
    IDLE = "IDLE",
    PROCESSING = "PROCESSING",
}

export interface ToolState {
    main: AvailabilityStates,
    up: UpStates,
}