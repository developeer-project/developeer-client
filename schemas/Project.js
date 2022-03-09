import { array, number, object, string, TypeOf } from 'yup';

export const projectSchema = object({
  title : string().required().min(2).max(75),
  repo_link : string().required().url(),
  description: string().required().min(2).max(500),
  link: string().url().optional(),
  user_profile : number().required().positive(),
  tech_stack : array(string()).required().min(1),
});

