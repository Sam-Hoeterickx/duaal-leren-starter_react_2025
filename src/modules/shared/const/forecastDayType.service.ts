export interface forecastDayType {
    avgtemp: number,
    chance_of_rain: number,
    condition: {
        icon: string,
        text: string
    },
    hourly: {
        condition: string,
        temp: number,
        time: string
    }[],
    maxtemp: number,
    mintemp: number,
    sunrise: string,
    sunset: string,
    total_precip_mm: number
}
