import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify, Auth } from 'aws-amplify';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { environment } from 'src/environments/environment';
import { HealthfileComponent } from './healthfile/healthfile.component';

Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      //identityPoolId: environment.cognitoIdentityPoolId,
      
      // REQUIRED - Amazon Cognito Region
      region: environment.projectRegion,

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: environment.projectRegion,

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: environment.cognitoUserPoolId,

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: environment.cognitoAppClientId,


      oauth: {},
      aws_cognito_username_attributes: [],
      aws_cognito_social_providers: [],
      aws_cognito_signup_attributes: [
          "EMAIL"
      ],
      aws_cognito_mfa_configuration: "OFF",
      aws_cognito_mfa_types: [
          "SMS"
      ],
      aws_cognito_password_protection_settings: {
          "passwordPolicyMinLength": 8,
          "passwordPolicyCharacters": []
      },
      aws_cognito_verification_mechanisms: [
          "EMAIL"
      ]

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      // mandatorySignIn: false,
      
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      // signUpVerificationMethod: 'code', // 'code' | 'link' 

      // // OPTIONAL - Configuration for cookie storage
      // // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      // cookieStorage: {
      // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      //     domain: '.yourdomain.com',
      // // OPTIONAL - Cookie path
      //     path: '/',
      // // OPTIONAL - Cookie expiration in days
      //     expires: 365,
      // // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      //     sameSite: "strict" | "lax",
      // // OPTIONAL - Cookie secure flag
      // // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      //     secure: true
      // },

      // // OPTIONAL - customized storage object
      // storage: MyStorage,
      
      // // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      // authenticationFlowType: 'USER_PASSWORD_AUTH',

      // // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
      // clientMetadata: { myCustomKey: 'myCustomValue' },

      //  // OPTIONAL - Hosted UI configuration
      // oauth: {
      //     domain: 'your_cognito_domain',
      //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      //     redirectSignIn: 'http://localhost:3000/',
      //     redirectSignOut: 'http://localhost:3000/',
      //     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      // }
  }
});

// You can get the current config object
//const currentConfig = Auth.configure();
const awsmobile = Auth.configure();





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HealthfileComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 
  constructor() { }

  ngOnInit(): void {

  }

 }
