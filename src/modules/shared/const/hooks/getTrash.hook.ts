import { useQuery } from "@tanstack/react-query"
import { SHARED_QUERY_KEYS } from '~/shared/const/query-keys.const'
import { trashService } from '~/shared/services'

export const useGetTrash = () => {

    return useQuery({
        queryKey: SHARED_QUERY_KEYS.trash,
        queryFn: trashService.getTrashItems
    })
}