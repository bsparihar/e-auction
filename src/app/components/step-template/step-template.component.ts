import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step-model.model';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements OnInit {

  FarmerDataEntry:boolean=false;
  TraderDataEntry:boolean=false;
  PartnerDataEntry:boolean=false;
  MillerDataEntry:boolean=false;
  AssayerDataEntry:boolean=false;
  LogisticPartnerDataEntry:boolean=false;
  partnerType: String = "Miller";

  @Input() step: StepModel;

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  Farmer()
  {
    this.FarmerDataEntry=true;
  }

  Trader()
  {
    this.TraderDataEntry=true;
  }
  getPartnerDataEntry(val)
  {
    this.partnerType = val;
  }
  Partner()
  {
    // this.PartnerDataEntry=true;

    this.MillerDataEntry=true;
    this.AssayerDataEntry= true;
    this.LogisticPartnerDataEntry= true;
  }

}
