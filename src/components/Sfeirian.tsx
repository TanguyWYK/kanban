import { Sfeirian as SfeirianModel } from '../models/Sfeirian';
import classes from './Sfeirian.module.css';

type SfeirianProps = {
  sfeirian: SfeirianModel | undefined;
};

const Sfeirian = (props: SfeirianProps) => {
  return (
    <>
      {props.sfeirian && (
        <>
          <p>{`${props.sfeirian.firstName} ${props.sfeirian.lastName}`}</p>
          <p>{`${props.sfeirian.email}`}</p>
        </>
      )}
    </>
  );
};

export default Sfeirian;
