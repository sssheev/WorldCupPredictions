import { Component, Output, EventEmitter,Input } from '@angular/core';
import { DataModelService } from '../../shared/datamodel/datamodel-service';
// This Component Will control the view of a group given the teams and a title.
// You will be able to Change the order of the Groups.
// This Component Output changeEvents
// The Tournament hub component will be responsible for handling change events
// When a change event happens you will need to change the display of the bracket to reflect it.
// The tournament hub will also be responsible for loading the predictions and saving them.

@Component({
  selector: 'prediction-group',
  templateUrl: './prediction-group.component.html',
  styleUrls: ['./prediction-group.component.css']
})
export class RegisterComponent {
  
  @Input()
  orderedTeamList:Array<string>;
  @Input()
  groupTitle:string
  @Output()
  changeEvent:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

}