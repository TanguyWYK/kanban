import axios from 'axios';
import { ProjectModel } from '../models/ProjectModel';

interface getAllProjectsApiResponse {
  data: {
    data: ProjectModel[];
  };
  status: number;
}

export class ProjectService {
  public static getAllProjects(): Promise<getAllProjectsApiResponse> {
    const url =
      'http://localhost:1337/api/projects?populate[company][populate][0]=logo&populate[logo]=*&populate[resources][populate][0]=sfeirian&populate[budget]=*&populate[date_start]=*&populate[date_end]=*&populate[comment]=*&populate[progress]=*&populate[expenses]=*';
    return axios.get(url);
  }
}