export interface ITrain {
  name: string;
  description: string;
  speedLimits: SpeedLimit[];
}

interface SpeedLimit {
  name: string;
  speedLimit: number;
}
