import { ToolStates} from "./ToolStates";

export abstract class StatesError {
    constructor(protected readonly message: String = "unknown states error.") {
    }

    abstract toString(): String;
}

export class InvalidStateObjectError extends StatesError {
    constructor(message: String = "invalid state object.") {
        super(message);
    }

    toString(): String {
        return `${this.message}`;
    }
}

export class NoValidSubStatesError extends StatesError {
    constructor(
        protected readonly state: ToolStates,
        message: String = "no valid substates",) {

        super(message);
    }

    toString(): String {
        return `${this.message} for ${this.state}`;
    }
}

export class InvalidStateTermError extends StatesError {
    constructor(
        protected readonly stateTerm: ToolStates,
        message = "invalid state term.") {

        super(message);
    }

    toString(): String {
        return `${this.message} { term=${this.stateTerm} }`;
    }
}