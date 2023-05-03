import { Sfeirian } from './Sfeirian';

export interface Resource {
  id: number;
  dailyPricing?: number;
  sfeirian ?: Sfeirian;
}