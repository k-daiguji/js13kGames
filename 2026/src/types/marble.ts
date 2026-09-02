export interface Marble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isActive: boolean;
  color: string;
  isPlayer: boolean;
  originalX?: number;
  originalY?: number;
  originalColor?: string;
}
