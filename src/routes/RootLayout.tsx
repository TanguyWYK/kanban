import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import KanbanProjects from './KanbanProjects';

const RootLayout = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <Outlet></Outlet>
    </>
  );
};

export default RootLayout;
