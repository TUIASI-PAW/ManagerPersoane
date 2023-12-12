import { Component, OnInit } from '@angular/core';
import { PersoaneAuthService } from '../persoane-auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autentificare-persoane',
  templateUrl: './autentificare-persoane.component.html',
  styleUrls: ['./autentificare-persoane.component.css']
})
export class AutentificarePersoaneComponent implements OnInit {

  persoanaAuthForm: FormGroup;

  constructor(private persoaneAuthService: PersoaneAuthService, private readonly router: Router) {

  }

  ngOnInit(): void {
    this.persoanaAuthForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),      
    }
    );
  }

  onLogin() {
    let result:Boolean = this.persoaneAuthService.isValidUserPass(this.persoanaAuthForm.value['username'], this.persoanaAuthForm.value['password']);
    console.log("rezultat login: " + result);
    alert("rezultat login: " + result);
      /*
      this.saveSubscription = this.persoaneService.save(this.persoanaForm.value).subscribe((response: any) => {
      console.log(response);
      // this.persoanaForm.reset();
      this.router.navigate(['/persoane']);
    });*/
  }

}
