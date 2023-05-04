export interface ResourceModel {
  id: number;
  daily_pricing?: number;
  title: string;
  sfeirian?: SfeirianModel;
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

export interface SingleStringModel {
  id: number;
  date_creation: string;
  value: string;
}

export interface SingleNumberModel {
  id: number;
  date_creation: string;
  value: number;
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
    resources: ResourceModel[];
    budget: BudgetModel[];
    date_start: SingleStringModel[];
    date_end: SingleStringModel[];
    comment: SingleStringModel[];
    progress: SingleNumberModel[];
    expenses: SingleNumberModel[];
  };
}

export interface GetAllProjectsPayload {
  data: {
    data: ProjectModel[];
  };
  status: number;
}

export interface GetProjectPayload {
  data: {
    data: ProjectModel;
  };
  status: number;
}
