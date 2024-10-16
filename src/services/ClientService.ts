import { IClientRepository } from "../repositories/IClientRepository";
import { IClient } from "../models/IClient";

export class ClientService {
  constructor(private clientRepository: IClientRepository) {}

  async createClient(client: IClient): Promise<void> {
    await this.clientRepository.create(client);
  }

  async getClientById(id: string): Promise<IClient | null> {
    return await this.clientRepository.findById(id);
  }

  async updateClient(id: string, client: IClient): Promise<void> {
    await this.clientRepository.update(id, client);
  }

  async deleteClient(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
