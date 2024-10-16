// Server.ts
import express, { Application } from "express";
import { VehicleController } from "./controllers/VehicleController";
import { VehicleService } from "./services/VehicleService";
import { MongoVehicleRepository } from "./repositories/MongoDB";
import { PostgresVehicleRepository } from "./repositories/PostgreSQL";

export class Server {
  private app: Application;
  private port: number;
  private vehicleController: VehicleController;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.app.use(express.json());
    this.configureDependencies();
    this.configureRoutes();
  }

  private configureDependencies(): void {
    const vehicleRepository = new MongoVehicleRepository();
    // const vehicleRepository = new PostgresVehicleRepository();
    const vehicleService = new VehicleService(vehicleRepository);
    this.vehicleController = new VehicleController(vehicleService);
  }

  private configureRoutes(): void {
    this.app.post("/vehicles", this.vehicleController.createVehicle.bind(this.vehicleController));
    this.app.get("/vehicles/:id", this.vehicleController.getVehicle.bind(this.vehicleController));
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`);
    });
  }
}

export default Server;

