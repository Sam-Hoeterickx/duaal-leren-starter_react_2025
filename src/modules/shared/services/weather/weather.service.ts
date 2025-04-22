import { WeatherDataType } from '~/shared/const/weatherDataType';
import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
    getWeather(): WeatherDataType {
        return weatherMock;
    }
}
export const weatherService = new WeatherService();
