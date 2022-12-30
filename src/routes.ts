import { Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function CreateCourse(request: Request ,response: Response) {
    CreateCourseService.execute({name:"NodeJs", duration:10, educator:"Guerra"});

    CreateCourseService.execute({name:"ReactJS",  educator:"Guerr1111a"});

    return response.send();
}