import classes from './ErrorPage.module.css';

const ErrorPage = ({ children, message }: any) => {
  return (
    <div className={classes.container}>
      <h2>Une erreur s'est produite</h2>
      <div className={classes.message}>{message}</div>
      {children}
    </div>
  );
};

export default ErrorPage;
