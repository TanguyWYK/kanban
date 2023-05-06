import { Resource } from '../models/Resource';
import Sfeirian from './Sfeirian';
import classes from './Resources.module.css';
import { formatNumberWithThousandSeparator } from '../utilis.ts/formatters';
import { IoMdContact } from 'react-icons/io';

type ResourcesProps = {
  resources: Resource[];
};

const Resources = (props: ResourcesProps) => {
  return (
    <div className={classes.container}>
      {props.resources.map((resource) => {
        return (
          <div key={resource.id} className={classes.resource}>
            <IoMdContact size={32} />
            <p className={classes.title}>{resource.title}</p>
            <Sfeirian sfeirian={resource.sfeirian}></Sfeirian>
            <p>
              {resource.dailyPricing
                ? formatNumberWithThousandSeparator(resource.dailyPricing)
                : ' - '}{' '}
              € / j
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Resources;
