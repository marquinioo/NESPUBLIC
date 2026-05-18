/* Minimal Google Maps types for the charging map (full types from @types/google.maps optional). */
declare namespace google.maps {
  class LatLng {
    constructor(lat: number, lng: number);
  }
  class LatLngBounds {
    constructor(sw?: LatLngLiteral, ne?: LatLngLiteral);
    extend(point: LatLng | LatLngLiteral): LatLngBounds;
    fitBounds?: never;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    styles?: MapTypeStyle[];
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
    gestureHandling?: string;
    backgroundColor?: string;
  }
  interface MapTypeStyle {
    elementType?: string;
    featureType?: string;
    stylers?: Record<string, string | number>[];
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    icon?: SymbolIcon;
  }
  interface SymbolIcon {
    path?: SymbolPath | string;
    scale?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWeight?: number;
  }
  enum SymbolPath {
    CIRCLE = 0,
  }
  interface Padding {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
    fitBounds(bounds: LatLngBounds, padding?: number | Padding): void;
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
  }
}

declare namespace google {
  const maps: typeof google.maps;
}
