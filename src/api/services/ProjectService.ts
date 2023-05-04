import axios from 'axios';
import { GetAllProjectsPayload } from '../models/ProjectModel';
import { URL_API } from '../../utilis.ts/constants';


export class ProjectService {
  public static getAllProjects(): Promise<GetAllProjectsPayload> {
    const url = URL_API + '/projects?populate[company][populate][0]=logo&populate[logo]=*&populate[resources][populate][0]=sfeirian&populate[budget]=*&populate[date_start]=*&populate[date_end]=*&populate[comment]=*&populate[progress]=*&populate[expenses]=*';
    return axios.get(url);
  }
}