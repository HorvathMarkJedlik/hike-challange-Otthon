import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChallangeListComponent } from "./challange-list/challange-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChallangeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hike-challange';
}
