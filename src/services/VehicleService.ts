import { IVehicleRepository } from "../repositories/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicle: IVehicle): Promise<void> {
    await this.vehicleRepository.create(vehicle);
  }

  async getVehicleById(id: string): Promise<IVehicle | null> {
    return await this.vehicleRepository.findById(id);
  }

  async updateVehicle(id: string, vehicle: IVehicle): Promise<void> {
    await this.vehicleRepository.update(id, vehicle);
  }

  async deleteVehicle(id: string): Promise<void> {
    await this.vehicleRepository.delete(id);
  }
}

export class DiscountVehicleService extends VehicleService {
 async applyDiscount(id: string, discount: number):Promise<void> {
    const vehicle = await this.getVehicleById(id);
    if (vehicle) {
      vehicle.precio = vehicle.precio - vehicle.precio * discount;
      await this.updateVehicle(id, vehicle);
    }
  }
}