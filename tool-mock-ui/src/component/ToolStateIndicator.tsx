import React from "react";
import {ToolStates, isDown, isUpIdle, isUpStopped, isUpProcessing} from "../model/ToolStates";
import { StatesError } from "../model/state-errors";


export interface ToolStateProps {
    states: Array<ToolStates>,
}

const errorDisplay = (error: StatesError) => (
    <>{`${error.toString()}`}</>
);

export const ToolStateIndicator: React.FC<ToolStateProps> = ({states}: ToolStateProps) => {
    let display = <></>;

    try {

        if(isDown(states))
            display = <>DOWN</>;
        if(isUpIdle(states))
            display = <>UP | IDLE</>;
        if(isUpStopped(states))
            display = <>UP | STOPPED</>;
        if(isUpProcessing(states))
            display = <>UP | PROCESSING</>;

    } catch (error) {
        if(error instanceof StatesError)
            display = errorDisplay(error);
    }

    return display;
}