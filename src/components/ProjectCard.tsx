import classes from './ProjectCard.module.css';

import { Project } from '../models/Project';
import {
  formatNumberWithThousandSeparator,
  formatDateToFr,
  convertDatetimeToDateFr,
} from '../utilis.ts/formatters';
import { Resource } from '../models/Resource';

type ProjectCardProps = {
  project: Project;
};

const concatResources = (resources: Resource[]): string => {
  let response: string[] = [];
  let resourceList: any = {};
  resources.forEach((resource: Resource) => {
    if (!resourceList.hasOwnProperty(resource.title.toLocaleLowerCase())) {
      resourceList[resource.title.toLocaleLowerCase()] = {
        number: 1,
        title: resource.title,
      };
    } else {
      resourceList[resource.title.toLocaleLowerCase()].number++;
    }
  });
  if (resources.length > 0) {
    for (let title in resourceList) {
      response.push(
        resourceList[title].number + ' ' + resourceList[title].title
      );
    }
  }
  return resources.length > 0 ? response.join(' / ') : 'Team : ??';
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className={classes.project}>
      <div>
        <h3>
          {props.project.company.name} - {props.project.name}
        </h3>
        <p>
          Budget :
          <span className="money">
            {' ' + formatNumberWithThousandSeparator(props.project.budget)}
          </span>
        </p>
        {props.project.dateStart && !props.project.dateEnd && (
          <p>Date cible : {formatDateToFr(props.project.dateStart)}</p>
        )}
        {props.project.dateEnd && (
          <p>Date fin cible : {formatDateToFr(props.project.dateEnd)}</p>
        )}
        <p>{concatResources(props.project.resources)}</p>
        {props.project.progress && (
          <p>Avancement global : {props.project.progress}%</p>
        )}
        {props.project.expenses && props.project.budget && (
          <p>
            Budget :
            {' ' +
              Math.round((props.project.expenses / props.project.budget) * 100)}
            %
          </p>
        )}
        {props.project.comment && (
          <p className={classes.comment}>{props.project.comment}</p>
        )}
      </div>
      <div className={classes.logoDiv}>
        <img src={props.project.company.logoUrl}></img>
      </div>
      {props.project.lastUpdate && (
        <p className={classes.updated}>
          MAJ : {convertDatetimeToDateFr(props.project.lastUpdate)}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
