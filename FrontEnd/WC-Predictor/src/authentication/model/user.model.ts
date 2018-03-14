import { DataModel } from "../../shared/datamodel/datamodel";
import { environment } from "../../environments/environment";

export class User extends DataModel{ 
    email: string = "";
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    
    getMetaData(): string {
        return "/user";
    }
}