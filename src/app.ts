import { ipcRenderer } from 'electron';

export class App {
    private responses: Array<any> = [];
    private message: string;

    activate() {
        ipcRenderer.on('response', (event, arg) => {
            this.responses.push(arg);
        });
    }

    send() {
        ipcRenderer.send('request', this.message);
    }
}
