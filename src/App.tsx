import './App.css';
import KanbanTitles from './components/KanbanTitles';
import { transformProjectsPayload } from './utilis.ts/transformHttp';
import { useEffect, useState } from 'react';
import { Project } from './models/Project';
import KanbanRow from './components/KanbanRow';
import { ProjectService } from './api/services/ProjectService';

function App() {
  const [projects, setProjects]: [Project[], Function] = useState([]);
  useEffect(() => {
    ProjectService.getAllProjects().then((projectsResponse) => {
      setProjects(transformProjectsPayload(projectsResponse));
    });
  }, []);
  return (
    <div className="board">
      <KanbanTitles></KanbanTitles>
      <KanbanRow
        weather="sunny"
        backgroundColor="#faf8dc"
        projects={projects.filter(
          (project: Project) => project.feeling === 'sunny'
        )}></KanbanRow>
      <KanbanRow
        weather="cloudy"
        backgroundColor="#f0f6ff"
        projects={projects.filter(
          (project: Project) => project.feeling === 'cloudy'
        )}></KanbanRow>
      <KanbanRow
        weather="stormy"
        backgroundColor="#faf0f0"
        projects={projects.filter(
          (project: Project) => project.feeling === 'stormy'
        )}></KanbanRow>
    </div>
  );
}

export default App;
