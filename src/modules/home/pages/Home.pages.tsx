import { NavigationBar } from "~/shared/navigationBar/components/NavigationBar"
import { ThrashIcon } from "../components/thrashIcon/ThrashIcon"
import { weatherService } from '~/shared/services';
import { useEffect, useState } from "react";
import { customWeatherDataType } from "~/shared/const/customWeatherDataType";

import styles from "./home.module.scss";
import clsx from "clsx";

export const Home = () => {

    const [rain, setRain] = useState<boolean|undefined>(false);

    //console.log("trash", trashService.getTrashItems());
    // console.log("weather", weatherService.getWeather());

    const day = new Date();
    const date = day.getDate();
    const month = (day.getMonth() + 1).toString().padStart(2, '0');
    const year = day.getFullYear();

    const today: string = `${year}-${month}-${date}`;

    const weatherData = weatherService.getWeather();
    const customWeatherData: customWeatherDataType = {
        chance_of_rain: weatherData.forecast[today].chance_of_rain
    };

    useEffect(() => {
        if(customWeatherData.chance_of_rain > 50){
            setRain(true);
        }

    }, [weatherData])

    console.log(rain);

    console.log("custom weather data", customWeatherData);
    

    return(
        <>
            <div className="wrapper">
                <div>
                    <h1>Recycle!</h1>
                </div>

                <div>
                    <h4 className="oblique">
                        Volgende ophaling
                    </h4>
                    <h2>
                        Morgen
                    </h2>
                    <div className={clsx(styles['upcoming-trash'])}>
                        <ThrashIcon 
                            trashType="restafval"
                        />
                        <ThrashIcon 
                            trashType="papier"
                        />
                    </div>

                    <div className="rain">
                        <h4>Chance of rain</h4>
                        <h3>{customWeatherData.chance_of_rain}%</h3>
                        <h3></h3>
                    </div>
                </div>
            </div>

            <NavigationBar />
            
        </>
    )
}