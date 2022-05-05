import {ToolState} from "./ToolState";

export interface ToolDescriptor {
    readonly id: String;
    readonly name: String;
    readonly description: String;
    readonly state: ToolState;
}
