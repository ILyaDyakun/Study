function Vehicle(color, engine) {
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.state = 'Stopped';
}

Vehicle.prototype.upgradeEngine = function(newEngine, maxSpeed) {
    if (this.state === 'Stopped') {
        this.engine = newEngine;
        this.maxSpeed = maxSpeed;
    }
}

Vehicle.prototype.getInfo = function() {
    return {
        engine: this.engine,
        color: this.color,
        maxSpeed: this.maxSpeed,
        model: this.model || 'unknown model'
    }
}

Vehicle.prototype.drive = function() {
    if (this.state === 'Driving') {
        console.log('Already driving');
        return;
    }
    this.state = 'Driving';
    this.currentSpeed = 0;
    this.maxSpeedDuringTheDrive = 0;
    const delay = 2000;
    this.driveInterval = setInterval(() => {
        this.increaseSpeed();
    }, delay);
}

Vehicle.prototype.stop = function() {
    if (this.state === 'Slowing down') {
        console.log('Already slows down');
        return;
    }
    this.state = 'Slowing down';
    clearInterval(this.driveInterval);
    const delay = 1500;
    this.stopInterval = setInterval(() => {
        this.slowDown()
    }, delay);
}

Vehicle.prototype.increaseSpeed = function() {
    this.currentSpeed += 20;
    this.maxSpeedDuringTheDrive = this.currentSpeed;
    console.log(this.currentSpeed);
    if (this.currentSpeed > this.maxSpeed) {
        console.log('speed is too high, SLOW DOWN!');
    }
}

Vehicle.prototype.slowDown = function() {
    console.log(this.currentSpeed);
    this.currentSpeed -= 20;
    if (this.currentSpeed <= 0) {
        clearInterval(this.stopInterval);
        console.log(this.getStopMessage());
    }
}

Vehicle.prototype.getStopMessage = function() {
    return `${this.vehicleType || 'Vehicle'} ${this.model || ''} is Stopped. 
        Maximum speed during the drive was ${this.maxSpeedDuringTheDrive}`;
}

function Car(model, color, engine) {
    Vehicle.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 80;
    this.vehicleType = 'Car';
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.changeColor = function(color) {
    if (color !== this.color) {
        this.color = color;
    } else {
        console.log('The selected color is the same as the previous, please choose another one');
    }
}

function Motorcycle(model, color, engine) {
    Vehicle.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 90;
    this.vehicleType = 'Motorcycle';
    this.maxExcess = 30;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.increaseSpeed = function() {
    if (this.currentSpeed - this.maxSpeed >= this.maxExcess) {
        console.log('Engine overheating');
        this.stop();
    }
    Vehicle.prototype.increaseSpeed.call(this);
}

Motorcycle.prototype.getStopMessage = function() {
    return `${this.vehicleType} ${this.model || ''} is Stopped. Good drive`;
}