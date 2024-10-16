
import { ClientService } from "../services/ClientService";
import { Request, Response } from "express";

export class ClientController {
  constructor(private clientService: ClientService) {}

  async createClient(req: Request, res: Response): Promise<void> {
    await this.clientService.createClient(req.body);
    res.status(201).send("Client created");
  }

  async getClient(req: Request, res: Response): Promise<void> {
    const client = await this.clientService.getClientById(req.params.id);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).send("Client not found");
    }
  }

  async updateClient(req: Request, res: Response): Promise<void> {
    await this.clientService.updateClient(req.params.id, req.body);
    res.status(200).send("Client updated");
  }

  async deleteClient(req: Request, res: Response): Promise<void> {
    await this.clientService.deleteClient(req.params.id);
    res.status(200).send("Client deleted");
  }

}
