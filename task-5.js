// Перепишите консольное приложение из предыдущего юнита на классы.

class Device {
	constructor() {
		this.socketСonnectedStatus = false;
		this.powerButtonStatus = false;
	}

	turnOnDevice() {
		return this.socketСonnectedStatus = true;
	}

	turnOffDevice() {
		return this.socketСonnectedStatus = false;
	}

	showSocketСonnectedStatus() {
		return (this.socketСonnectedStatus) ?
			'Розетка подключена' : 'Розетка не подключена';
	}

	powerButtonTurnOn() {
		return this.powerButtonStatus = true;
	}

	powerButtonTurnOff() {
		return this.powerButtonStatus = false;
	}

	showDevicePowerStatus() {
		return (this.powerButtonStatus && this.socketСonnectedStatus) ?
			'Устройство включено' : 'Устройство выключено';
	}
}

class DeviceInfo extends Device {
	constructor(name, brand, model, country, price, year, power, color) {
		super();
		this.type = name;
		this.brand = brand;
		this.model = model;
		this.country = country;
		this.price = price;
		this['release year'] = year;
		this.power = power;
		this.color = color;
	}
}

class Computer extends DeviceInfo {
	constructor(
		name, brand, model, country, price, year, power, color, operationMemory,
		physicalMemory, videocard, processor, motherboard, numberOfCoolers
	) {
		super(name, brand, model, country, price, year, power, color);
		this.operationMemory = operationMemory;
		this.physicalMemory = physicalMemory;
		this.videocard = videocard;
		this.processor = processor;
		this.motherboard = motherboard;
		this.numberOfCoolers = numberOfCoolers;
	}

	showInformationAboutPc() {
		const characteristics = `Характеристи ПК:
			Процессор: ${this.processor};
			Видеокарта: ${this.videocard};
			Материнская плата: ${this.motherboard}; 
			Объём оперативной памяти: ${this.operationMemory};
			Объём физической памяти: ${this.physicalMemory};
			Количество кулеров: ${this.numberOfCoolers};`;
		return characteristics;
	}
}

class Tv extends DeviceInfo {
	constructor(
		name, brand, model, country, price, year, power, color,
		diagonal, matrixType, smartTv
	) {
		super(name, brand, model, country, price, year, power, color);
		this.diagonal = diagonal;
		this['matrix type'] = matrixType;
		this['has Smart TV'] = smartTv;
		this.brightness = 50;
	}

	brightnessAdd() {
		this.brightness++;
		return `Уровень яркости: ${this.brightness} %`
	}

	brightnessReduce() {
		this.brightness--;
		return `Уровень яркости: ${this.brightness} %`;
	}

	setBrightnessEntryLevel() {
		this.brightness = 50;
		return `Уровень яркости: ${this.brightness} % (по умолчанию)`;
	}
}

class Laptop extends DeviceInfo {
	constructor(
		name, brand, model, country, price, year, power, color, operationMemory,
		physicalMemory, videocard, processor, motherboard, numberOfCoolers, diagonal, time
	) {
		super(name, brand, model, country, price, year, power, color);
		this.operationMemory = operationMemory;
		this.physicalMemory = physicalMemory;
		this.videocard = videocard;
		this.processor = processor;
		this.motherboard = motherboard;
		this.numberOfCoolers = numberOfCoolers;
		this.diagonal = diagonal;
		this['battery life'] = time;
		this.cameraStatus = true;
		this.bluetoothStatus = true;
	}

	cameraTurnOn() {
		return this.cameraStatus = true;
	}

	cameraTurnOff() {
		return this.cameraStatus = false;
	}

	getCameraStatus() {
		return (this.cameraStatus) ? 'Камера включена' : 'Камера выключена';
	}

	bluetoothTurnOn() {
		return this.bluetoothStatus = true;
	}

	bluetoothTurnOff() {
		return this.bluetoothStatus = false;
	}

	getBluetoothStatus() {
		return (this.bluetoothStatus) ? 'Bluetooth включён' : 'Bluetooth выключен';
	}

	showDevicePowerStatus() {
		return (this.powerButtonStatus) ? 'Устройство включено' : 'Устройство выключено';
	}
}

const personalComputer = new Computer(
	'PC', 'Corsair', 'One', 'USA', '2000$', 2020, 700, 'black',
	'16GB', '3TB', 'NVIDIA GeForce RTX 3090', 'Intel Core i7 6700k', 'Gigabyte Z790', 4
);

const televisor = new Tv(
	'TV', 'Samsung', 'H6400', 'South Korea', 1200, 2021, 400, 'dark-silver', '40\'\'', 'IPS', true
);

const ultrabook = new Laptop(
	'Laptop', 'Honor', 'MagicBook 14', 'China', '1000$', 2019, 200, 'silver',
	'8GB', '500GB', 'integrated', 'Core i5 AMD 2.2', 'Noname', 2, '14\'\'', '6 hours'
);


// ____ Проверка работы функций ____

// showAllObjectFeatures(personalComputer);
// showAllObjectFeatures(ultrabook);
// showAllObjectFeatures(televisor);

// checkDeviceStatus(ultrabook); // работает без электр. сети (работает от батареи)
// checkDeviceStatus(personalComputer);// НЕ работает без электр. сети
// checkDeviceStatus(televisor); // НЕ работает без электр. сети