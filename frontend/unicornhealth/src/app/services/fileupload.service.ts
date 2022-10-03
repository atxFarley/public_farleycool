import { Injectable } from '@angular/core';
import {Observable, Observer, of, pipe} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap, concatMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { HealthFile } from '../interfaces/healthFile';
import { Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private apiUrl = environment.apiserviceurl + "/upload";

  cognitoIdToken: any;
  cognitoAccessToken: any;

  httpOptions : any;

  constructor(private http: HttpClient) {
    Auth.currentSession()
    .then(data => {
      console.log(data)
      this.cognitoIdToken = data.getIdToken().getJwtToken();
      console.log("CognitoIdToken: " + JSON.stringify(this.cognitoIdToken) );
      this.cognitoAccessToken = data.getAccessToken();
      this.httpOptions  = {
        headers: new HttpHeaders({'Authorization': this.cognitoIdToken})
      };
    }
      )
    .catch(err => {
      console.log(err)
      this.httpOptions  = {
        headers: new HttpHeaders({'Authorization': ''})
      };
    }
      );

  

   }


  uploadFile(file: File): Observable<HealthFile> {
    const healthFile = {} as HealthFile;
    const contentType = file.type;
    console.log('contentType: ' + contentType);
    const fileSize = file.size;
    console.log('file size: ' + file.size);
    healthFile.healthFileSizeMB = (fileSize / 1024 / 1024);
    healthFile.healthFilename = file.name;
    healthFile.healthFileTenant = "tenantB";
    console.log('healthFile: size: ' +  healthFile.healthFileSizeMB);

    console.log('apiUrl: ' + this.apiUrl);
    const formData = new FormData();
    formData.append("file", file, file.name);
    return new Observable<HealthFile>(observer => {
      const upload = this.http.post(this.apiUrl, formData, this.httpOptions).toPromise();
      upload.then(data => {
        console.log('upload success => ', JSON.stringify(data, null, 10));
        healthFile.uploadJSONResponse = JSON.stringify(data, null,10);
        healthFile.uploadSuccess = true;
        observer.next(healthFile);
        observer.complete();
      }).catch(err => {
        console.error('error: ', err);
        healthFile.uploadJSONResponse = JSON.stringify(err, null, 10);
        healthFile.uploadSuccess = false;
        observer.next(healthFile);
        observer.complete();
      }
        );
    });
  }
}
