export interface CameraPosition {
  x: number;
  y: number;
  zoom: number;
  rotation?: number;
}

export interface SqlEmployee {
  id: number;
  nama: string;
  nomor_hp: string;
  berat_badan: number;
}

export interface NoSqlLogDocument {
  id: string;
  tag: string;
  color: string;
  badge: string;
  jsonPreview: Record<string, any>;
}

export interface ComparisonPoint {
  aspect: string;
  sqlVal: string;
  nosqlVal: string;
}
