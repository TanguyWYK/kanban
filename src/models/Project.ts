import { Company } from './Company';
import { Resource } from './Resource';

export interface Project {
  id: number;
  name: string;
  company: Company;
  budget?: number;
  dateStart?: string;
  dateEnd?: string;
  comment?: string;
  resources: Resource[];
  state: string;
  feeling: string;
  lastUpdate?: string;
  progress?: number;
  expenses?: number;
}
