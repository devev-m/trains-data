export interface ITrain {
  id?: number
  name: string
  description: string
  speedLimits: SpeedLimit[]
}

interface SpeedLimit {
  name: string
  speedLimit: number
}
