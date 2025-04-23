import { NavigationBar } from "~/shared/navigationBar/components/NavigationBar"
import { ThrashIcon } from "../components/thrashIcon/ThrashIcon"
import { useEffect, useState } from "react";
import { customWeatherDataType } from "~/shared/const/customWeatherDataType";
import { useGetTrash, useGetWeather } from "~/shared/const/hooks";
import { TrashType } from "~/shared/services/trash/types/trashType.service";
import { WarningPopUp } from "../components/warningPopUp/WarningPopUp";
import { Loading } from "~/shared/loadingComponent/Loading";

import clsx from "clsx";
import styles from "./home.module.scss";




export const Home = () => {
    //Hooks
    const [rain, setRain] = useState<boolean|undefined>(false);
    const {data: trashData, isLoading: trashLoading} = useGetTrash();
    const {data: weatherData, isLoading: weatherLoading} = useGetWeather();

    //Day
    const day = new Date();
    const date = day.getDate();
    const month = (day.getMonth() + 1).toString().padStart(2, '0');
    const year = day.getFullYear();

    const today: string = `${year}-${month}-${date}`;

    //Define custom weather data from useGetWeather hook
    const customWeatherData: customWeatherDataType = {
        chance_of_rain: weatherData?.forecast[today].chance_of_rain
    };


    useEffect(() => {
        //Check of customWeatherData is er of check of customWeather.chance_of_rain is undefined
        //Dan return (early exit)
        //Typescript weet dan dat in de 2de if state dat customWeatherData niet undefined is

        if(!customWeatherData || customWeatherData.chance_of_rain === undefined){
            return
        }

        if(customWeatherData.chance_of_rain > 50 ){
            setRain(true);
        }

    }, [weatherData])

    // console.log(rain);

    console.log(trashLoading, weatherLoading)
    

    return(
        <>
            <div className="wrapper">

                <div>
                    <h1>Recycle!</h1>
                </div>

                <WarningPopUp
                    rain={rain}
                    loadingState={ weatherLoading || trashLoading}
                />

                <div>
                    <h4 className="oblique">
                        Volgende ophaling
                    </h4>
                    <h2>
                        Morgen
                    </h2>
                    <Loading 
                        loadingState={weatherLoading || trashLoading}
                    >
                        <div className={
                            clsx(styles['upcoming-trash'])
                        }>
                            {
                                !trashData ? <div></div> : (trashData?.map((trash:TrashType) => (
                                    <ThrashIcon 
                                        key={trash.name}
                                        trashType={trash.name}
                                    />
                                )))
                            }
                        </div>

                        <div className="rain">
                            <h4>Chance of rain</h4>
                            <h3>{!customWeatherData.chance_of_rain ? <div></div> : (`${customWeatherData.chance_of_rain}%`)}</h3>
                        </div>
                    </Loading>
                </div>
            </div>

            <NavigationBar />
            
        </>
    )
}