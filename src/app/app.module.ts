import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { coursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { coursesService } from "./courses.service";

@NgModule({
  declarations: [AppComponent, coursesComponent, CourseComponent],
  imports: [BrowserModule],
  providers: [coursesService], //our courses component depends on the courses service.
  bootstrap: [AppComponent]
})
export class AppModule {}
``;
