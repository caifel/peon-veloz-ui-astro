/**
 * Todos los tokens del flujo (registro, vinculación de Lichess, alta de evento)
 * caducan y la API responde 410 cuando ya no sirven.
 *
 * La salida es siempre la misma, así que vive en un solo lugar: /expired explica
 * cómo pedir un link nuevo por WhatsApp.
 *
 * `caso` cambia esas instrucciones, porque no son las mismas para un jugador que
 * para el organizador: el jugador manda el nombre del evento, el organizador
 * escribe `crear-evento`.
 */
export type ExpiredCase = 'jugador' | 'organizador';

function expiredUrl(caso: ExpiredCase): string {
  return caso === 'jugador' ? '/expired' : `/expired?caso=${caso}`;
}

export function redirectIfExpired(status: number, caso: ExpiredCase = 'jugador'): boolean {
  if (status !== 410) return false;
  window.location.href = expiredUrl(caso);
  return true;
}

/** Destino único para un link que ya no se puede usar. */
export function goToExpired(caso: ExpiredCase = 'jugador'): void {
  window.location.href = expiredUrl(caso);
}
