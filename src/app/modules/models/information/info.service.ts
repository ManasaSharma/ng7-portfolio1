import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { Injectable } from '@angular/core';
//import { Information }

@Injectable({
    providedIn: 'root'
})
export class InformationService {
    private informationURL = 'api/information/information.json'; 
    constructor(private httpClient: HttpClient) {}
    
    getInformation() {
        console.log(this.httpClient.get(this.informationURL));
        return this.httpClient.get(this.informationURL);
    }
}