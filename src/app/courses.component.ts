import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    {{ text | summary:50 }}
     `
})
export class Course2{
    text = `
        app component panel input format directive contact form course node modules
    
    `

    
}