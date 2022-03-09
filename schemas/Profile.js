import { array, number, object, string, TypeOf } from 'yup';
import {linkSchema, skillsSchema} from "./Links"
import { projectSchema } from './Project';

export const profileSchema = object({
    name : string().required().min(2).max(75),
    college_name : string().required().min(2).max(75),
    bio : string().optional().min(2).max(500),
    location : string().required().min(2).max(75),
    interests : array(string()).required().min(1),
    links : linkSchema.optional(),
    projects: projectSchema.optional(),
    skills_id : skillsSchema.optional(),
    
});

