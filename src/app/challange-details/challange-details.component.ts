import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ChallenegeModel } from '../models/challange-model';
import { DistanceModel } from '../models/distance-model';

@Component({
  selector: 'app-challange-details',
  standalone: true,
  imports: [],
  templateUrl: './challange-details.component.html',
  styleUrl: './challange-details.component.css'
})
export class ChallangeDetailsComponent {
  @Input() challange: ChallenegeModel | undefined;
  @Output() selectionChanged = new EventEmitter<void>();

  apply(distance: DistanceModel, applied:boolean): void{
    this.challange?.distances.forEach(d => d.applied = false);

    distance.applied = applied;
    this.selectionChanged.emit();
  }
}
