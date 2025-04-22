import { NavigationBar } from "~/shared/navigationBar/components/NavigationBar"
import { ThrashIcon } from "../components/thrashIcon/ThrashIcon"
import { trashService, weatherService } from '~/shared/services';
import { customWeatherDataType } from "~/shared/const/customweatherdatatype";


export const Home = () => {

    console.log("trash", trashService.getTrashItems());
    // console.log("weather", weatherService.getWeather());

    const today = new Date();
    const day = today.getDate();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();

    const dateString = `${year}-${month}-${day}`;

    console.log("dateString", dateString);

    const weatherData = weatherService.getWeather();

    console.log("weatherData", weatherData);

    const customWeatherData: customWeatherDataType = {
        chance_of_rain: weatherData.forecast[dateString].chance_of_rain
    };

    console.log("custom weather data",customWeatherData);
    

    return(
        <>
            <div>
                <h1>Recycle!</h1>
            </div>

            <div>
                <h2>
                    Volgende ophaling
                </h2>
                <h3>
                    Morgen
                </h3>
                <div className="upcoming-trash">
                    <ThrashIcon 
                        trashType="Rest Afval"
                    />
                </div>
            </div>

            <NavigationBar />
        </>
    )
}