import { DataModel } from "../../shared/datamodel/datamodel";
import { environment } from "../../environments/environment";

export class GroupPrediction extends DataModel{ 
    tid:string;
    
    team1: string;
    team2: string;
    team3: string;
    team4: string;

    getMetaData(): string {
        return "/group-prediction";
    }
}