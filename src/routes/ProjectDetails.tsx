import { Outlet, useLoaderData } from 'react-router-dom';
import classes from './ProjectDetails.module.css';
import { useNavigate } from 'react-router-dom';
import { ProjectService } from '../api/services/ProjectService';
import { transformProjectPayload } from '../utilis.ts/transformHttp';
import { GetProjectPayload } from '../api/models/ProjectModel';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate('..');
  };

  const project: any = useLoaderData();

  return (
    <>
      <Outlet></Outlet>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      {project && (
        <dialog open className={classes.modal}>
          <div>{project.name}</div>
        </dialog>
      )}
    </>
  );
};

export default ProjectDetails;

export const loader = async ({ params }: any) => {
  try {
    const projectResponse: GetProjectPayload = await ProjectService.getProject(
      params.id
    );
    return transformProjectPayload(projectResponse.data.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
