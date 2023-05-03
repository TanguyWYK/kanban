import classes from './KanbanRow.module.css';

import { Project } from '../models/Project';
import ProjectCard from './ProjectCard';
import { ImageSrc } from '../utilis.ts/constants';

type KanbanRowProps = {
  projects: Project[];
  weather: string;
  backgroundColor: string;
};

const KanbanRow = (props: KanbanRowProps) => {
  return (
    <div
      className={classes.kanban}
      style={{ backgroundColor: props.backgroundColor }}>
      <div className={classes.weather}>
        <img src={ImageSrc[props.weather as keyof typeof ImageSrc]}></img>
      </div>
      <div className={classes.kanbanColumn}>
        {props.projects
          .filter((project: Project) => project.state === 'wait_validation')
          .map((project: Project) => (
            <ProjectCard project={project} key={project.id}></ProjectCard>
          ))}
      </div>
      <div className={classes.kanbanColumn}>
        {props.projects
          .filter((project: Project) => project.state === 'to_plan')
          .map((project: Project) => (
            <ProjectCard project={project} key={project.id}></ProjectCard>
          ))}
      </div>
      <div className={classes.kanbanColumn}>
        {props.projects
          .filter((project: Project) => project.state === 'in_progress')
          .map((project: Project) => (
            <ProjectCard project={project} key={project.id}></ProjectCard>
          ))}
      </div>
      <div className={classes.kanbanColumn}>
        {props.projects
          .filter((project: Project) => project.state === 'finished')
          .map((project: Project) => (
            <ProjectCard project={project} key={project.id}></ProjectCard>
          ))}
      </div>
    </div>
  );
};

export default KanbanRow;
