
import { TrashType } from '~/shared/const/trashtype.service';
import { TRASH_MOCK } from '~/shared/mock/trash.ts';

class TrashService {
	getTrashItems(): TrashType[] {
		return TRASH_MOCK;
	}
}

export const trashService = new TrashService();
