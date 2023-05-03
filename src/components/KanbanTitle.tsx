import classes from './KanbanTitle.module.css';

type KanbanTitleProps = {
  title: string;
  titleBackgroundColor: string;
};

const KanbanTitle = (props: KanbanTitleProps) => {
  return (
    <h2
      className={classes.kanbanTitle}
      style={{ backgroundColor: props.titleBackgroundColor }}>
      {props.title}
    </h2>
  );
};

export default KanbanTitle;
