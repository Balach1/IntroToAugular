import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My 1st Component</div>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'This is a test';
}