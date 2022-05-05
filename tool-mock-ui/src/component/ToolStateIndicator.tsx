import React from "react";
import {AvailabilityStates, ToolState} from "../model/ToolState";


export interface ToolStateProps {
    state: ToolState,
}

export const ToolStateIndicator: React.FC<ToolStateProps> = ({state}: ToolStateProps) => {
    let display;
    if(state.main === AvailabilityStates.UP) {
        display = <p>{state.main} / {state.up}</p>
    } else {
        display = <p>{state.main}</p>
    }

    return (
        <>
            {display}
        </>
    );
}