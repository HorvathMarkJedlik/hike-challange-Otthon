import { Component, Input } from '@angular/core';
import { ChallenegeModel } from '../models/challange-model';

@Component({
  selector: 'app-challange-details',
  standalone: true,
  imports: [],
  templateUrl: './challange-details.component.html',
  styleUrl: './challange-details.component.css'
})
export class ChallangeDetailsComponent {
 @Input() challange: ChallenegeModel | undefined;
}
