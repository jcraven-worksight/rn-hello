import GeoLocation from './GeoLocation';

interface IAirportJSON {
  airportname: string;
  city: string;
  country: string;
  faa: string;
  geo: GeoLocation;
  icao: string;
  id: number;
  tz: string;
}

export default class Airport /* implements ITravelSampleType */ {
  public airportname: string;
  public city: string;
  public country: string;
  public faa: string;
  public geo: GeoLocation;
  public icao: string;
  public id: number;
  public tz: string;
  public type: string;
  constructor() {
    this.type = 'airport';
  }
}