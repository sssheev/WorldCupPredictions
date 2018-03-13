import { DataModel } from "../../shared/datamodel/datamodel";
import { environment } from "../../environments/environment";

export class User extends DataModel{ 
    id: string = "";
    email: string = "";
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    dateCreated: Date = null;
    dateUpdated: Date = null;

    getMetaData(): string {
        return "/user";
    }
}