// if naming a component with two words use a dash between it eg. college-courses
import { Component } from "@angular/core"; // there are three main libraries to use, http, core and
import { coursesService } from "./courses.service";
//this is a decorator for the component
//what the component will be named in the html !! i.e <courses>
@Component({
  selector: "courses", //component naming tags
  template: `
  <h2>{{ title }}</h2>
  <ul>
  <li *ngFor="let course of courses">
  {{ course }}
  </li>
  </ul>
  ` // what to render basic html
  //string interpolation
})
//note component name is attached to the component object
export class coursesComponent {
  title = "List of Courses";
  courses;
  //initialise an object
  // this constructor has a dependency on the courses service
  //any changes will automatically instatiate a new courses object
  // Dependency injection: injecting this components dependencies into its constructor
  
  constructor(service: coursesService) {
    //let service = new coursesService();
    this.courses = service.getCourses();
  }
}
