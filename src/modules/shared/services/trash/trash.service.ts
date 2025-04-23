
import { TrashType } from '~/shared/services/trash/types/trashType.service';
import { TRASH_MOCK } from '~/shared/mock/trash.ts';

class TrashService {
	getTrashItems(): TrashType[] {
		return TRASH_MOCK;
	}
}

export const trashService = new TrashService();
