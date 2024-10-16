import { IVehicleRepository } from "./IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

export class PostgresVehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = [];

  async create(vehicle: IVehicle): Promise<void> {
    this.vehicles.push(vehicle);
  }

  async findById(id: string): Promise<IVehicle | null> {
    return this.vehicles.find((vehicle) => vehicle.id === id) || null;
  }

  async update(id: string, vehicle: IVehicle): Promise<void> {
    const index = this.vehicles.findIndex((v) => v.id === id);
    if (index !== -1) this.vehicles[index] = vehicle;
  }

  async delete(id: string): Promise<void> {
    this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
  }
}
