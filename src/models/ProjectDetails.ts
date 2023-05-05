import { BudgetModel, SingleNumberModel, SingleStringModel } from '../api/models/ProjectModel';
import { Company } from './Company';
import { Resource } from './Resource';

export interface ProjectDetails {
  id: number;
  name: string;
  company: Company;
  budget: BudgetModel[];
  dateStart: SingleStringModel[];
  dateEnd: SingleStringModel[];
  comment: SingleStringModel[];
  resources: Resource[];
  state: string;
  feeling: string;
  lastUpdate?: string;
  progress: SingleNumberModel[];
  expenses: SingleNumberModel[];
}
