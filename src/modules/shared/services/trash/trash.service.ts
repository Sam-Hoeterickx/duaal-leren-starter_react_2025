import { TRASH_MOCK } from '~/shared/mock/trash.ts';

class TrashService {
	getTrashItems() {
		return TRASH_MOCK;
	}
}

export const trashService = new TrashService();
