import {InvalidStateTermError, InvalidStateObjectError, NoValidSubStatesError} from "./state-errors";

export enum ToolStates {
    DOWN = 'DOWN',
    UP = 'UP',
    UP_STOPPED = 'UP_STOPPED',
    UP_IDLE = 'UP_IDLE',
    UP_PROCESSING = 'UP_PROCESSING',
}


export function isDown(states: Array<ToolStates>): boolean {
    if (states.length === 0)
        throw new InvalidStateObjectError();

    switch(states[0]) {
        case ToolStates.DOWN:
            if(states.length > 1)
                throw new InvalidStateObjectError("DOWN state cannot have sub states.");
            return true;
        case ToolStates.UP:
            if(states.length < 2)
                throw new NoValidSubStatesError(ToolStates.UP);
            return false;
        default:
            throw new InvalidStateTermError(states[0]);
    }
}

export function isUp(states: Array<ToolStates>): boolean {

    if (states.length === 0)
        throw new InvalidStateObjectError();

    if(states.length <= 2) {
        switch(states[0]) {
            case ToolStates.UP:
                switch(states[1]) {
                    case ToolStates.UP_IDLE:
                    case ToolStates.UP_PROCESSING:
                    case ToolStates.UP_STOPPED:
                        return true;
                    default:
                        throw new NoValidSubStatesError(ToolStates.UP);
                }
            case ToolStates.DOWN:
                return false;
            default:
                throw new InvalidStateTermError(states[0]);
        }
    }

    throw new InvalidStateObjectError();

}

export function isUpStopped(states: Array<ToolStates>): boolean {
    return checkSubstateOfUp(states, ToolStates.UP_STOPPED);
}


export function isUpIdle(states: Array<ToolStates>): boolean {
    return checkSubstateOfUp(states, ToolStates.UP_IDLE);
}


export function isUpProcessing(states: Array<ToolStates>): boolean {
    return checkSubstateOfUp(states, ToolStates.UP_PROCESSING);
}

function checkSubstateOfUp(states: Array<ToolStates>, subState: ToolStates): boolean {
    if (states.length === 0)
        throw new InvalidStateObjectError();

    if(states.length <= 2) {
        if(states[0] === ToolStates.UP)
            return (states[1] === subState);
    }

    throw new InvalidStateObjectError("expecting an UP state with one valid substate.");
}