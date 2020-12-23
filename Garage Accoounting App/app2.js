class Garage {
    constructor(name){
        this.name = name;
        this.vehicles = [];
        this.customers = {};
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
        var isExisting = this.customers[vehicle.owner];
        if(!isExisting) {
            this.customers[vehicle.owner] = 0;

        }
    }
    releaseVehicle(){
        var vehicle = this.vehicles.shift();
        var currentDue = this.customers[vehicle.owner];
        var totalDue = currentDue + vehicle.repairCost;;
		this.customers[vehicle.owner] = totalDue;
		console.log("released", vehicle);
		console.log("due from from onwer", totalDue);
    }
}
//Execution of the code
class Vehicle {
    constructor(owner, repairCost){
        this.owner = owner;
        this.repairCost = repairCost;
    }
}
class Bus extends Vehicle {
    constructor(owner, repairCost, seats){
        super(owner, repairCost);
        this.seats = seats;
    }
}
class Truck extends Vehicle {
    constructor(owner, repairCost, capacity){
        super(owner, repairCost);
        this.capacity = capacity;
    }
}

var GarageInformation = new Garage("JS Accounting Garage LTD.")
var Soudia = new Bus("Biden", 5000, 50);
GarageInformation.addVehicle(Soudia);

var Unique = new Truck("Trump", 10000, 5);
GarageInformation.addVehicle(Unique);

console.log(GarageInformation);