import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel} from './datamodel';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

// TODO Switching to PHP might require some changes
// Might need to stringify when sending
@Injectable()
export class DataModelService {
    constructor(private http: HttpClient) { }
 
    getAll<T extends DataModel>(dataModel:T):Observable<T[]>  {
        let url = environment.LOCAL + dataModel.getMetaData();
        return this.http.get<T[]>(url);
    }
 
    getById<T extends DataModel>(dataModel:T):Observable<T>  {
        let url = environment.LOCAL + dataModel.getMetaData();
        let id = "/" + dataModel.id;
        return this.http.get<T>(url + id);
    }
 
    create<T extends DataModel>(dataModel: T):Observable<T> {
        let url = environment.LOCAL + dataModel.getMetaData();
        return this.http.post<T>(url, dataModel);
    }
 
    update<T extends DataModel>(dataModel:T):Observable<T> {
        let url = environment.LOCAL + dataModel.getMetaData();
        let id = "/" + dataModel.id;
        return this.http.put<T>(url + id, dataModel);
    }
 
    delete<T extends DataModel>(dataModel: T):Observable<T> {
        let url = environment.LOCAL + dataModel.getMetaData();
        let id = "/" + dataModel.id;
        return this.http.delete<T>(url + id);
    }
}