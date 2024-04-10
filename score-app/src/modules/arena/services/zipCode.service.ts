import axios from 'axios';

export class ZipCodeService {
  static instance: ZipCodeService;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new ZipCodeService();
    }

    return this.instance;
  }

  async handleValidateZipCode(cep: string) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return data;
    } catch (err) {
      throw err;
    }
  }

  
}
