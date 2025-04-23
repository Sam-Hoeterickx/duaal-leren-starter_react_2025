
import { WeatherDataType } from '~/shared/services/weather/types/weatherDataType.service';
import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
	getWeather():Promise<WeatherDataType> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(weatherMock);

			}, 3000);
		});
	}
}
export const weatherService = new WeatherService();
