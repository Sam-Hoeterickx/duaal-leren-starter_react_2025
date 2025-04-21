import weatherMock from '~/shared/mock/weather.json';

class WeatherService {
    async getWeather() {
        return weatherMock;
    }
}
export const weatherService = new WeatherService();
