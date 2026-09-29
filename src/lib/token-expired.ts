/**
 * Todos los tokens del flujo (registro, checkout, vinculación de Lichess)
 * caducan a los 30 minutos y la API responde 410 cuando ya no sirven.
 *
 * La salida es siempre la misma, así que vive en un solo lugar: /expired
 * explica cómo pedir un link nuevo por WhatsApp.
 */
export function redirectIfExpired(status: number): boolean {
  if (status !== 410) return false;
  window.location.href = '/expired';
  return true;
}

/** Destino único para un link que ya no se puede usar. */
export function goToExpired(): void {
  window.location.href = '/expired';
}
