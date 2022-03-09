import { array, number, object, string, TypeOf } from 'yup';

export const linkSchema = object({
 portfolio_link : string().url().optional(),
 linkedin_link : string().url().optional(),
 github : string().url().optional(),
 instagram : string().url().optional(),
 twitter: string().url().optional(),
 facebook :  string().url().optional(),
 user_id : number().required().positive(),
});

export const skillsSchema = object({
    skills : array(string()).required().min(1),
});