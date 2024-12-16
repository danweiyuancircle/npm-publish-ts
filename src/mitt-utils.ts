import mitt from 'mitt';

export function getEmitter() {
    return mitt();
}
