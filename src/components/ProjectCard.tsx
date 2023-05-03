import classes from './ProjectCard.module.css';

import { Project } from '../models/Project';
import {
  formatNumberWithThousandSeparator,
  formatDateToFr,
  convertDatetimeToDateFr,
} from '../utilis.ts/formatters';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className={classes.project}>
      <div>
        <h3>
          {props.project.company.name} - {props.project.name}
        </h3>
        <p>
          Budget:{' '}
          <span className="money">
            {formatNumberWithThousandSeparator(props.project.budget)}
          </span>
        </p>
        <p>Date cible: {formatDateToFr(props.project.dateStart)}</p>
        <p>Date fin cible: {formatDateToFr(props.project.dateEnd)}</p>
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
