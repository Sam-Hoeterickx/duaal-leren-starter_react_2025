import { ForecastDay } from "./forecastday.service"


export interface WeatherDataType {
    current: {
        cloudcover: number,
        feels_like: number,
        humidity: number,
        is_day: string,
        pressure: number,
        temperature: number,
        uv_index: number,
        visibility: number,
        weather_descriptions: string[],
        weather_icons: string[],
        wind_dir: string,
        wind_speed: number
    },
    forecast: {
        [date: string]: ForecastDay
    },
    location: {
        country: string,
        lat: number,
        localtime: string,
        lon: number,
        name: string,
        region: string,
        timezone_id: string
    }
}