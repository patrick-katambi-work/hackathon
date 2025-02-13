export interface IEvent {
    "name": string;
    "date": string;
    "description": string;
    "start": string;
    "end": string;
    "location": {
        "lat": string;
        "long": string;
    }
}