export interface ICompany {
    id: string;
    image: string;
    name: string;
    city: string;
    address: string;
    isFavorited: boolean;
    latitude: any;
    longitude: any;
    location: any;
    services: Array<any>;
}