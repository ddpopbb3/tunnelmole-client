import { program } from "../../bin/tunnelmole";


export default async function log(message: string, level : 'info'|'warning'|'error' = 'info') {
    switch (level) {
        case 'info':
            if (program.debug) {
                console.info(message);
            }
            break;
        case 'warning':
            console.warn(message);
            break;
        case 'error':
            console.error(message);
            break;
        default:
            console.info(message);
            break;
    }
}