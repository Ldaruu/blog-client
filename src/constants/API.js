export let HOST;
export let PORT;
export let ENDPOINT;
export let DOMAIN;
export let WEBSOCKET_PROTOCOL;

if (process.env.NODE_ENV === 'development') {
	HOST = 'http://localhost:3001';
	DOMAIN = 'localhost:3001';
	ENDPOINT = '/';
}

WEBSOCKET_PROTOCOL = 'wss';

export const URL = HOST + ENDPOINT;
