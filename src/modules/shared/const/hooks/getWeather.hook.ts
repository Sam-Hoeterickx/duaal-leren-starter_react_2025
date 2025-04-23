import { useQuery } from "@tanstack/react-query"
import { SHARED_QUERY_KEYS } from '~/shared/const/query-keys.const'
import { weatherService } from '~/shared/services'

export const useGetWeather = () => {

    return useQuery({
        queryKey: SHARED_QUERY_KEYS.weather,
        queryFn: weatherService.getWeather
    })
}