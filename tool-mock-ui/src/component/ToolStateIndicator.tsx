import React from "react";
import {ToolStates, isDown, isUpIdle, isUpStopped, isUpProcessing} from "../model/ToolStates";
import { StatesError } from "../model/state-errors";
import {Chip} from "@mui/material";


export interface ToolStateProps {
    states: Array<ToolStates>,
}

const errorDisplay = (error: StatesError) => (
    <Chip color="error" variant="outlined" label={`${error.toString()}`}/>
);

export const ToolStateIndicator: React.FC<ToolStateProps> = ({states}: ToolStateProps) => {
    let display = <></>;

    try {

        if(isDown(states))
            display = <Chip color="error" label="DOWN"/>;
        if(isUpIdle(states))
            display = <>
                <Chip color="success" label="UP"/>
                <Chip color="primary" label="IDLE"/>
            </>;
        if(isUpStopped(states))
            display = <>
                <Chip color="success" label="UP"/>
                <Chip color="warning" label="STOPPED"/>
            </>;
        if(isUpProcessing(states))
            display = <>
                <Chip color="success" label="UP"/>
                <Chip color="success" label="PROCESSING"/>
            </>;

    } catch (error) {
        if(error instanceof StatesError)
            display = errorDisplay(error);
    }

    return display;
}