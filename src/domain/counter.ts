/**
 * ============================================================================
 * 🥊 RETO 01 — Dominio del Contador (TypeScript puro)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 *
 * 📖 CONTEXTO (BASE PARA EL SCREENCAST):
 * El Bar Salesiano necesita contadores de productos (sanduches, empanadas,
 * jugos). Este archivo es el "motor" lógico: no usa React Native, solo
 * TypeScript puro, por eso se puede probar sin encender la app.
 *
 * 🛠️ RETO (responde con código, no con texto):
 *  1. En `calcularValor`: ¿qué operación aplicas al subir? ¿y al bajar? ¿cómo evitas
 *     salirte de `minimo`/`maximo`?
 *  2. En `estadoUI`: ¿cuándo el contador está en un extremo? ¿y cuándo no?
 *  3. Ejecuta en tu terminal: `pnpm run start:01`
 */

export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';

export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}

export function calcularValor(config: ContadorConfig, direccion: Direccion): number {
  let nuevoValor = config.valor;

  if (direccion === 'incrementar') {
    nuevoValor += config.paso;
  } else if (direccion === 'decrementar') {
    nuevoValor -= config.paso;
  }

  return Math.max(config.minimo, Math.min(config.maximo, nuevoValor));
}

export function estadoUI(valor: number, config: ContadorConfig): EstadoUI {
  if (valor <= config.minimo) {
    return 'MINIMO';
  }
  if (valor >= config.maximo) {
    return 'MAXIMO';
  }
  return 'IDLE';
}
