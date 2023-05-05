import { Sfeirian as SfeirianModel } from '../models/Sfeirian';

type SfeirianProps = {
  sfeirian: SfeirianModel | undefined;
};

const Sfeirian = (props: SfeirianProps) => {
  return (
    <>
      {props.sfeirian && (
        <p>{`${props.sfeirian.firstName} ${props.sfeirian.lastName}`}</p>
      )}
    </>
  );
};

export default Sfeirian;
