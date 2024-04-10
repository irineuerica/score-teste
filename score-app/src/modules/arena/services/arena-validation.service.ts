import { api } from '../../../config/api.config';
import { ArenaDataForm } from '../../interfaces/arena-data-form.interface'

export class ArenaValidationService {
  static instance: ArenaValidationService;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new ArenaValidationService();
    }

    return this.instance;
  }

  async handleValidateArena(arenaData: ArenaDataForm) {
    try {
      const { data } = await api.post<ArenaResultValidation>(`/arena`,{...arenaData});
      return data;
    } catch (err) {
      throw err;
    }
  }

  
}
