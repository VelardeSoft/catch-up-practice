import axios from 'axios';
import {AxiosInstance} from "axios";
import {LogoApiServices} from "../../shared/services/logo-api.service.js";

const http : AxiosInstance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
})

export class NewsApiService{
    apiKey: string = '61360a6ae1cc4b1c9dffa3eff183b5c3';
    logoApi = new LogoApiServices();

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSources(sourceId) {
        return http.get(`top-headlines?sources=${sourcesId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }

}