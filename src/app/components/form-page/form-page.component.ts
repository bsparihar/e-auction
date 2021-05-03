import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../models/step-model.model';
import { Observable } from 'rxjs';
import { StepsService } from '../../services/steps.service';
import { SharedServicesService } from '../../Services/shared-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormPageComponent implements OnInit {

  currentStep: Observable<StepModel>;

  constructor(private stepsService: StepsService,private _sharedService: SharedServicesService, private router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
    setTimeout(() => {
      this.router.navigate(['./HomeAfterLogin']);
      this._sharedService.userInfo.changeHeader = true;
      alert(this._sharedService.userInfo.changeHeader)
  //     this.changeHeader= true;
  // this.originalheader = false;
  }, 5000);  //5s
  // this.changeHeader= true;
  // this.originalheader = false;
  }

}

