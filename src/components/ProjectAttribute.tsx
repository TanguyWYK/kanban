type ProjectAttributeProps = {
  name: string;
  unit: string;
  values: any;
};

const ProjectAttribute = (props: ProjectAttributeProps) => {
  return (
    props.values &&
    props.values.length > 0 && (
      <div>
        <p>
          {`${props.name} : ${props.values ? props.values[0].value : ' - '} 
        ${props.unit}`}
        </p>
      </div>
    )
  );
};

export default ProjectAttribute;
