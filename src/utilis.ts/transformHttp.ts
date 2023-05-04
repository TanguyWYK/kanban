import {
  CompanyModel,
  GetAllProjectsPayload,
  ProjectModel,
  ResourceModel,
  SfeirianModel,
} from '../api/models/ProjectModel';
import { Company } from '../models/Company';
import { Project } from '../models/Project';
import { Resource } from '../models/Resource';
import { Sfeirian } from '../models/Sfeirian';
import { URL_MEDIA } from './constants';

export const transformProjectsPayload = (
  payload: GetAllProjectsPayload
): Project[] => {
  const projects: ProjectModel[] = payload.data.data;
  let result: Project[] = [];
  console.log(payload);
  for (let project of projects) {
    result.push(transformProjectPayload(project));
  }
  return result;
};

const calculateLastUpdate = (project: ProjectModel): string | undefined => {
  let lastUpdate;

  // Add here if new attribute should be watched for the last update field on ProjectCard Component;
  const attributesWatchedForUpdate = [
    'budget',
    'date_start',
    'date_end',
    'progress',
    'expenses',
  ] as const;

  type AttributesWatchedForUpdate = typeof attributesWatchedForUpdate[number];

  let isUpdated = false;
  attributesWatchedForUpdate.forEach(
    (key: AttributesWatchedForUpdate) =>
      (isUpdated ||= project.attributes[key].length > 1)
  );
  if (isUpdated) {
    let dates: string[] = [];
    attributesWatchedForUpdate.forEach((key: AttributesWatchedForUpdate) =>
      project.attributes[key].map((attribute) =>
        dates.push(attribute.date_creation)
      )
    );
    dates = dates.sort((a: string, b: string) => {
      return new Date(b).getTime() - new Date(a).getTime();
    });
    lastUpdate = dates[0];
  }
  return lastUpdate;
};

const transformProjectPayload = (project: ProjectModel): Project => {
  const company: Company = transformCompanyPayload(project.attributes.company);
  const resources: Resource[] = transformResourcePayload(
    project.attributes.resources
  );
  let result: Project = {
    id: project.id,
    name: project.attributes.name,
    company: company,
    budget: project.attributes.budget.length
      ? project.attributes.budget[project.attributes.budget.length - 1].value
      : undefined,
    dateStart: project.attributes.date_start.length
      ? project.attributes.date_start[project.attributes.date_start.length - 1]
          .value
      : undefined,
    dateEnd: project.attributes.date_end.length
      ? project.attributes.date_end[project.attributes.date_end.length - 1]
          .value
      : undefined,
    comment: project.attributes.comment.length
      ? project.attributes.comment[project.attributes.comment.length - 1].value
      : undefined,
    resources: resources,
    state: project.attributes.state,
    feeling: project.attributes.feeling,
    lastUpdate: calculateLastUpdate(project),
    progress: project.attributes.progress.length
      ? project.attributes.progress[project.attributes.progress.length - 1]
          .value
      : undefined,
    expenses: project.attributes.expenses.length
      ? project.attributes.expenses[project.attributes.expenses.length - 1]
          .value
      : undefined,
  };
  return result;
};

const transformResourcePayload = (payload: ResourceModel[]): Resource[] => {
  let result: Resource[] = [];
  payload.map((resource: ResourceModel) =>
    result.push({
      id: resource.id,
      title: resource.title,
      dailyPricing: resource.daily_pricing,
      sfeirian: transformSfeirianPayload(resource.sfeirian),
    })
  );
  return result;
};

const transformSfeirianPayload = (
  payload: SfeirianModel | undefined
): Sfeirian | undefined => {
  return payload && payload.data
    ? {
        id: payload.data.id,
        firstName: payload.data.attributes.first_name,
        lastName: payload.data.attributes.last_name,
        email: payload.data.attributes.email,
      }
    : undefined;
};

const transformCompanyPayload = (payload: CompanyModel): Company => {
  let result: Company = {
    id: payload.data.id,
    name: payload.data.attributes.name,
    logoUrl: URL_MEDIA + payload.data.attributes.logo.data.attributes.url,
  };
  return result;
};
