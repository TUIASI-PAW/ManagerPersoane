import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { PersoaneService } from '../persoane.service';
import { Persoana } from '../models';

@Component({
  selector: 'app-gestionare-persoane',
  templateUrl: './gestionare-persoane.component.html',
  styleUrls: ['./gestionare-persoane.component.css']
})
export class GestionarePersoaneComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;
  persoane: Persoana[];

  constructor(private persoaneService: PersoaneService, private readonly router: Router) { }

  ngOnInit() {
    this.getPersoane();
  }

  ngOnDestroy(): void { // se distruge când am plecat din view
    this.subscription.unsubscribe(); // mai există și pipe-uri async pt unsubscribe
  }

  private getPersoane() {
    this.subscription = this.persoaneService.get().subscribe((persoane: Persoana[]) => {
      this.persoane = persoane;
    });
  }

  onAddClick() {
    this.router.navigate(['persoane/new']);
  }

  onLoginClick() {
    this.router.navigate(['persoane/auth']);
  }

}
