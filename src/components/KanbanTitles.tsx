import classes from './KanbanTitles.module.css';
import KanbanTitle from './KanbanTitle';

const KanbanTitles = () => {
  return (
    <div className={classes.title}>
      <div className={classes.weather}></div>
      <KanbanTitle
        title="Propal en attente client"
        titleBackgroundColor="#f1771e"></KanbanTitle>
      <KanbanTitle
        title="A démarrer"
        titleBackgroundColor="#f9db6f"></KanbanTitle>
      <KanbanTitle
        title="En cours"
        titleBackgroundColor="#789de8"></KanbanTitle>
      <KanbanTitle title="Terminé" titleBackgroundColor="#9ac280"></KanbanTitle>
    </div>
  );
};

export default KanbanTitles;
