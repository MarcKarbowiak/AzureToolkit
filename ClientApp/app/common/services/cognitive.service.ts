import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AzureHttpClient } from './azureHttpClient';
import { BingSearchResponse } from '../models/bingSearchResponse';
import { ComputerVisionRequest, ComputerVisionResponse } from '../models/computerVisionResponse';

@Injectable()
export class CognitiveService {
    imageDetectionAPIKey = '0b1c73ba6d65442b9fab0b659c48f4d8';
    bingSearchAPIKey = 'd40ecd3e66844856b4d8265320b9594f';
    constructor(private http: AzureHttpClient) { }
    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        return this.http.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchTerm}`, this.bingSearchAPIKey)
            .map(response => response.json() as BingSearchResponse)
            .catch(this.handleError);
    }
    analyzeImage(request: ComputerVisionRequest): Observable<ComputerVisionResponse> {
        return this.http.post(`https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,Tags,Faces`, this.imageDetectionAPIKey, request)
            .map(response => response.json() as ComputerVisionResponse)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}