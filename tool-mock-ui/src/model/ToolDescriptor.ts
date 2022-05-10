import {ToolStates} from "./ToolStates";

export interface ToolDescriptor {
    readonly id: String;
    readonly name: String;
    readonly description: String;
    readonly states: Array<ToolStates>;
}
