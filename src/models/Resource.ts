import { Sfeirian } from './Sfeirian';

export interface Resource {
  id: number;
  title: string;
  dailyPricing?: number;
  sfeirian?: Sfeirian;
}
