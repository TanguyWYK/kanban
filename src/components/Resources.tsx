import { Resource } from '../models/Resource';
import Sfeirian from './Sfeirian';
import classes from './Resources.module.css';

type ResourcesProps = {
  resources: Resource[];
};

const Resources = (props: ResourcesProps) => {
  return (
    <>
      {props.resources.map((resource) => {
        return (
          <div key={resource.id} className={classes.resource}>
            <p>{resource.title}</p>
            <Sfeirian sfeirian={resource.sfeirian}></Sfeirian>
          </div>
        );
      })}
    </>
  );
};

export default Resources;
