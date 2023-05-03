import { Company } from '../models/Company';
import { Project } from '../models/Project';
import { URL_MEDIA } from './constants';


export const transformProjectsPayload  = (payload: any): Project[]=>{
  const projects: any = payload.data;
  let result : Project[]= [];
  for(let project of projects){
    result.push(transformProjectPayload({data:project}));
  } 
  console.log(result);
  return result;
}

const transformProjectPayload = (payload: any): Project => {
  
  const project: any = payload.data;
  const company: Company = transformCompanyPayload(project.attributes.company);
  let lastUpdate;
  const isUpdated : boolean = project.attributes.budget.length > 1 ||
                    project.attributes.date_start.length > 1 ||
                    project.attributes.date_end.length > 1;
  if(isUpdated){
    let dates : string[]= [];
    project.attributes.budget.map((budget: any) => dates.push(budget.date_creation));
    project.attributes.date_start.map((date_start: any) => dates.push(date_start.date_creation));
    project.attributes.date_end.map((date_end: any) => dates.push(date_end.date_creation));
    dates = dates.sort((a:string,b:string)=>{return (new Date(b).getTime() - new Date(a).getTime())});
    lastUpdate = dates[0];
  }
  let result: Project = {
    id: project.id ,
    name: project.attributes.name,
    company: company,
    budget: project.attributes.budget.length?project.attributes.budget[project.attributes.budget.length-1].value:'',
    dateStart: project.attributes.date_start.length?project.attributes.date_start[project.attributes.date_start.length-1].value:'',
    dateEnd: project.attributes.date_end.length?project.attributes.date_end[project.attributes.date_end.length-1].value:'',
    comment: project.attributes.comment.length?project.attributes.comment[project.attributes.comment.length-1].value:'',
    resources: project.attributes.resources,
    state: project.attributes.state,
    feeling: project.attributes.feeling,
    lastUpdate: lastUpdate,
  };

  return result;
}

const transformCompanyPayload = (payload: any): Company => {

  const company: any = payload.data;
  let result: Company = {
    id: company.id,
    name: company.attributes.name,
    logoUrl: URL_MEDIA + company.attributes.logo.data.attributes.url,
  };
  return result;
}
