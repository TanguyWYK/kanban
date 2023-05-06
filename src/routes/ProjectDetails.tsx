import { Outlet, useLoaderData } from 'react-router-dom';
import classes from './ProjectDetails.module.css';
import { ProjectService } from '../api/services/ProjectService';
import { transformProjectDetailsPayload } from '../utilis.ts/transformHttp';
import {
  GetProjectPayload,
  SingleNumberModel,
  SingleStringModel,
} from '../api/models/ProjectModel';
import ErrorPage from '../components/ErrorPage';
import ProjectAttribute from '../components/ProjectAttribute';
import { ProjectDetails as ProjectDetailsModel } from '../models/ProjectDetails';
import {
  convertDatetimeToDateFr,
  formatNumberWithThousandSeparator,
} from '../utilis.ts/formatters';
import Resources from '../components/Resources';

const ProjectDetails = () => {
  const project = useLoaderData() as ProjectDetailsModel;

  const mapBudgetArray = (budget: SingleNumberModel[]) => {
    let result = JSON.parse(JSON.stringify(budget));
    result.forEach((budget: SingleStringModel) => {
      budget.value = formatNumberWithThousandSeparator(budget.value);
    });
    return result;
  };

  const mapDateArray = (dates: SingleStringModel[]) => {
    let result = JSON.parse(JSON.stringify(dates));
    result.forEach((date: SingleStringModel) => {
      date.value = convertDatetimeToDateFr(date.value);
    });
    return result;
  };

  const convertExpensesToBudget = (
    expenses: SingleNumberModel[],
    lastBudget: number | undefined
  ): SingleNumberModel[] | undefined => {
    if (lastBudget) {
      let result = JSON.parse(JSON.stringify(expenses));
      result.forEach((expense: SingleNumberModel) => {
        if (expense.value) {
          expense.value = Math.round((expense.value / lastBudget) * 100);
        }
      });
      return result;
    }
    return undefined;
  };

  return (
    <>
      <Outlet></Outlet>
      {project && (
        <div className={classes.container}>
          <div>
            <div>
              <h2>{project.company.name}</h2>
              <h3 className={classes.projectName}>{project.name}</h3>
            </div>
            <img className={classes.logo} src={project.company.logoUrl} />
          </div>
          <div className="attributes">
            <ProjectAttribute
              name="Budget global"
              unit="€"
              values={mapBudgetArray(project.budget)}></ProjectAttribute>
            <ProjectAttribute
              name="Date début"
              unit=""
              values={mapDateArray(project.dateStart)}></ProjectAttribute>
            <ProjectAttribute
              name="Date fin cible"
              unit=""
              values={mapDateArray(project.dateEnd)}></ProjectAttribute>
            <ProjectAttribute
              name="Avancement global"
              unit="%"
              values={project.progress}></ProjectAttribute>
            <ProjectAttribute
              name="Budget"
              unit="%"
              values={convertExpensesToBudget(
                project.expenses,
                project.budget[project.budget.length - 1].value
              )}></ProjectAttribute>
          </div>
          <Resources resources={project.resources}></Resources>
        </div>
      )}
      {!project && <ErrorPage message="Projet inconnu"></ErrorPage>}
    </>
  );
};

export default ProjectDetails;

export const loader = async ({
  params,
}: any): Promise<ProjectDetailsModel | null> => {
  try {
    const projectResponse: GetProjectPayload = await ProjectService.getProject(
      params.id
    );
    return transformProjectDetailsPayload(projectResponse.data.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
