/** Geographic bounds of Uruguay — used to frame the full country on load. */
export const URUGUAY_BOUNDS = {
  south: -35.03,
  west: -58.48,
  north: -30.08,
  east: -53.07,
} as const;

/** Main cities and towns where NES charging network is represented on the map. */
export const URUGUAY_CHARGING_TOWNS = [
  { id: "montevideo", lat: -34.9011, lng: -56.1645 },
  { id: "artigas", lat: -30.4004, lng: -56.4661 },
  { id: "canelones", lat: -34.5228, lng: -56.2778 },
  { id: "melo", lat: -32.3703, lng: -54.1675 },
  { id: "colonia", lat: -34.4712, lng: -57.844 },
  { id: "durazno", lat: -33.3806, lng: -56.5236 },
  { id: "trinidad", lat: -33.5167, lng: -56.9 },
  { id: "florida", lat: -34.0956, lng: -56.2142 },
  { id: "minas", lat: -34.3756, lng: -55.2377 },
  { id: "maldonado", lat: -34.9083, lng: -54.9583 },
  { id: "puntaDelEste", lat: -34.9667, lng: -54.95 },
  { id: "paysandu", lat: -32.3214, lng: -58.0756 },
  { id: "frayBentos", lat: -33.1167, lng: -58.3 },
  { id: "rivera", lat: -30.9053, lng: -55.5508 },
  { id: "rocha", lat: -34.4833, lng: -54.3333 },
  { id: "salto", lat: -31.3833, lng: -57.9667 },
  { id: "sanJose", lat: -34.3375, lng: -56.7136 },
  { id: "mercedes", lat: -33.2524, lng: -58.0305 },
  { id: "tacuarembo", lat: -31.7333, lng: -55.9833 },
  { id: "treintaTres", lat: -33.2333, lng: -54.3833 },
] as const;

export type ChargingTownId = (typeof URUGUAY_CHARGING_TOWNS)[number]["id"];
