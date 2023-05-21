export class ConsoleProxy {
    private static _oldLog: (...args: any[]) => void = console.log;

    private static init() {
        console.log = (...args: any[]) => {
            this._oldLog(...args);
            this.logListeners.forEach((listener) => {
                listener(...args);
            });
        };
    }

    private static uninit() {
        console.log = this._oldLog;
    }

    public static logListeners: Array<(...args: any[]) => void> = [];

    public static addLogListener(listener: (...args: any[]) => void) {
        if (this.logListeners.length === 0) {
            this.init();
        }
        this.logListeners.push(listener);
    }

    public static removeLogListener(listener: (...args: any[]) => void) {
        this.logListeners = this.logListeners.filter((l) => l !== listener);
        if (this.logListeners.length === 0) {
            this.uninit();
        }
    }

}

export class ConsoleMessage {
    public display: string;
    public timestamp: Date;

    public args: any[];

    constructor(...args: any[]) {
        this.args = args;
        this.display = args.join(' ');
        this.timestamp = new Date();
    }

}

export class ConsoleWindow extends HTMLDivElement {
    
    public history: any[] = [];

    private _

    public setup() {

    }
    
    constructor() {
        super();
    }
}

customElements.define('console-window', ConsoleWindow, { extends: 'div' });