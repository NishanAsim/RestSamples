import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


Injectable()
export class NishanHttpClient {

    constructor(@Inject(HttpClient) private http:HttpClient)
    {

    }
    /**
     * get<T>
url: string     */
    public get<T>(url: string) {
        console.log("Reading form url :" + url);

        url = url.replace(/[?&]$/, "");
        return this.http.get<T>(url);

    }

}