import axios from 'axios';
import { GetAllProjectsPayload } from '../models/ProjectModel';


export class ProjectService {
  public static getAllProjects(): Promise<GetAllProjectsPayload> {
    const url =
      'http://localhost:1337/api/projects?populate[company][populate][0]=logo&populate[logo]=*&populate[resources][populate][0]=sfeirian&populate[budget]=*&populate[date_start]=*&populate[date_end]=*&populate[comment]=*&populate[progress]=*&populate[expenses]=*';
    return axios.get(url);
  }
}