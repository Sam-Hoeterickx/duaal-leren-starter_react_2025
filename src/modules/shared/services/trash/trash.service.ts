
import { TrashType } from '~/shared/services/trash/types/trashType.service';
import { TRASH_MOCK } from '~/shared/mock/trash.ts';

class TrashService {
	getTrashItems(): Promise<TrashType[]> {
		return new Promise<TrashType[]>((resolve)=> {
			setTimeout(()=>{
				resolve(TRASH_MOCK);
			}, 6000);
		});
	}
}

export const trashService = new TrashService();
