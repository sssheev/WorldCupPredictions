export class DataModel {
    id: string = "";
    dateCreated: Date = null;
    dateUpdated: Date = null;

    getMetaData(): string {
        throw new Error ("Needs to be overridden by subclass");
    }
}