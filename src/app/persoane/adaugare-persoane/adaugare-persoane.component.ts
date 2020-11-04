import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PersoaneService } from '../persoane.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adaugare-persoane',
  templateUrl: './adaugare-persoane.component.html',
  styleUrls: ['./adaugare-persoane.component.css']
})
export class AdaugarePersoaneComponent implements OnInit, OnDestroy {

  persoanaForm: FormGroup;

  private saveSubscription: Subscription;

  private readonly persoaneService: PersoaneService;
  private readonly router: Router;
  constructor(persoaneService: PersoaneService, router: Router) {
    this.persoaneService = persoaneService;
    this.router = router;
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.saveSubscription.unsubscribe();
  }

  onSave() {
    this.saveSubscription = this.persoaneService.save(this.persoanaForm.value).subscribe((response: any) => {
      console.log(response);
      // this.persoanaForm.reset();
      this.router.navigate(['/persoane']);
    });
  }

  private createForm() {
    this.persoanaForm = new FormGroup({
      nume: new FormControl('Ionel', Validators.required),
      prenume: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dataInregistrare: new FormControl(new Date(), Validators.required),
    }
    );
  }
  /*price: new FormControl(0, [Validators.required, Validators.min(9.99)]),*/

}
