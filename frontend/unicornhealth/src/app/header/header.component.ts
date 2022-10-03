import { Component, OnInit } from '@angular/core';
import { Auth} from 'aws-amplify';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   tenant?: string =""
 
  services = {
    async handleSignUp(formData: Record<string, any>) {
      let { username, password, attributes } = formData;
      let formattedEmail = attributes.email.toLowerCase();

      //attributes.tenant_id=environment.tenant;
      return Auth.signUp({
        username,
        password,
        attributes :{
          'email':formattedEmail, 
          'custom:tenant_id': environment.tenant
        }
      });
    },
  };

  constructor() {
    this.tenant = environment.tenant;
   }

  ngOnInit(): void {

  }

}
