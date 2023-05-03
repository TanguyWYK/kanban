export interface RessourceModel {
  id: number;
  daily_pricing: number;
  title: string;
  sfeirian: SfeirianModel;
}

export interface SfeirianModel {
  data: {
    id: number;
    attributes: {
      first_name: string;
      last_name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface BudgetModel {
  id: number;
  description: string;
  value: number;
  date_creation: string;
}

export interface SingleModel {
  id: number;
  date_creation: string;
  value: string;
}

export interface LogoModel {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface CompanyModel {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      logo: LogoModel;
    };
  };
}

export interface ProjectModel {
  id: number;
  attributes: {
    name: string;
    description: string | null;
    feeling: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    state: string;
    company: CompanyModel;
    logo: LogoModel;
    resources: RessourceModel[];
    budget: BudgetModel[];
    date_start: SingleModel[];
    date_end: SingleModel[];
    comment: SingleModel[];
  };
}
