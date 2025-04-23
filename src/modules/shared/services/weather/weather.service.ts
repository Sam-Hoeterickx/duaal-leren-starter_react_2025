
import { WeatherDataType } from '~/shared/services/weather/types/weatherDataType.service';
import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
    getWeather(): WeatherDataType {
        return weatherMock;
    }
}
export const weatherService = new WeatherService();
