import { io } from 'socket.io-client';

// Agregamos comillas y https:// para que sea un texto válido
const URL = import.meta.env.VITE_SOCKET_URL || 'https://serverchatify-production.up.railway.app';

export const socket = io(URL, {
    auth: {
        serverOffset: 0,
        ackTimeout: 10000,
        retries: 3,
    }
});