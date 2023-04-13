// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы

function ElectricalDevice() {
	this.socketСonnectedStatus = false;
	this.powerButtonStatus = false;
	this.turnOnDevice = function () {
		return this.socketСonnectedStatus = true;
	}
	this.turnOffDevice = function () {
		return this.socketСonnectedStatus = false;
	}
	this.showSocketСonnectedStatus = function () {
		return (this.socketСonnectedStatus) ?
			'Розетка подключена' : 'Розетка не подключена';
	}
	this.powerButtonTurnOn = function () {
		return this.powerButtonStatus = true;
	}
	this.powerButtonTurnOff = function () {
		return this.powerButtonStatus = false;
	}
	this.showDevicePowerStatus = function () {
		return (this.powerButtonStatus && this.socketСonnectedStatus) ?
			'Устройство включено' : 'Устройство выключено';
	}
}

function DeviceMainInfo(
	name, brand, model, country, price, year, power, color
) {
	this.type = name;
	this.brand = brand;
	this.model = model;
	this.country = country;
	this.price = price;
	this['release year'] = year;
	this.power = power;
	this.color = color;
}

function ComputerCharacteristic(
	operationMemory, physicalMemory, videocard, processor, motherboard, numberOfCoolers
) {
	this.operationMemory = operationMemory;
	this.physicalMemory = physicalMemory;
	this.videocard = videocard;
	this.processor = processor;
	this.motherboard = motherboard;
	this.numberOfCoolers = numberOfCoolers;
	this.showInformationAboutPc = function () {
		console.log(`Характеристики:
		Процессор: ${this.processor};
		Видеокарта: ${this.videocard};
		Материнская плата: ${this.motherboard}; 
		Объём оперативной памяти: ${this.operationMemory};
		Объём физической памяти: ${this.physicalMemory};
		Количество кулеров: ${this.numberOfCoolers};`);
	}
}

function TvCharacteristic(diagonal, matrixType, smartTv) {
	this.diagonal = diagonal;
	this['matrix type'] = matrixType;
	this['has Smart TV'] = smartTv;
	this.brightness = 50;
	this.brightnessAdd = function () {
		this.brightness++;
		return `Уровень яркости: ${this.brightness} %`
	}
	this.brightnessReduce = function () {
		this.brightness--;
		return `Уровень яркости: ${this.brightness} %`;
	}
	this.setBrightnessEntryLevel = function () {
		this.brightness = 50;
		return `Уровень яркости: ${this.brightness} % (по умолчанию)`;
	}
}

function LaptopCharacteristic(
	operationMemory, physicalMemory, videocard, processor, motherboard, numberOfCoolers, diagonal, time
) {
	this.operationMemory = operationMemory;
	this.physicalMemory = physicalMemory;
	this.videocard = videocard;
	this.processor = processor;
	this.motherboard = motherboard;
	this.numberOfCoolers = numberOfCoolers;
	this.diagonal = diagonal;
	this['battery life'] = time;
	this.cameraStatus = true;
	this.cameraTurnOn = function () {
		return this.cameraStatus = true;
	}
	this.cameraTurnOff = function () {
		return this.cameraStatus = false;
	}
	this.getCameraStatus = function () {
		return (this.cameraStatus) ?
			'Камера включена' : 'Камера выключена';
	}
	this.bluetoothStatus = true;
	this.bluetoothTurnOn = function () {
		return this.bluetoothStatus = true;
	}
	this.bluetoothTurnOff = function () {
		return this.bluetoothStatus = false;
	}
	this.getBluetoothStatus = function () {
		return (this.bluetoothStatus) ?
			'Bluetooth включён' : 'Bluetooth выключен';
	}
	this.showDevicePowerStatus = function () {
		return (this.powerButtonStatus) ?
			'Устройство включено' : 'Устройство выключено';
	}
}

// ___ цепочка прототипов для ПК ___: 
// ElectricalDevice -> DeviceMainInfo -> ComputerCharacteristic

DeviceMainInfo.prototype = new ElectricalDevice();

ComputerCharacteristic.prototype = new DeviceMainInfo(
	'PC', 'Corsair', 'One', 'USA', '2000$', 2020, 700, 'black');

const pc = new ComputerCharacteristic(
	'16GB', '3TB', 'NVIDIA GeForce RTX 3090', 'Intel Core i7 6700k', 'Gigabyte Z790', 4);

// ___ цепочка прототипов для ТВ ___: 
// ElectricalDevice -> DeviceMainInfo -> CharacteristicTv

TvCharacteristic.prototype = new DeviceMainInfo(
	'TV', 'Samsung', 'H6400', 'South Korea', 1200, 2021, 400, 'dark-silver');
const tv = new TvCharacteristic('40\'\'', 'IPS', true);

// ___ цепочка прототипов для Ноутбука ___: 
// ElectricalDevice -> DeviceMainInfo -> CharacteristicLaptop

LaptopCharacteristic.prototype = new DeviceMainInfo(
	'Laptop', 'Honor', 'MagicBook 14', 'China', '1000$', 2019, 200, 'silver');

const laptop = new LaptopCharacteristic(
	'8GB', '500GB', 'integrated', 'Core i5 AMD 2.2', 'Noname', 2, '14\'\'', '6 hours');




// ____ Проверка работы функций ____

// Выводим все свойства и методы указанного объекта в консоль
function showAllObjectFeatures(obj) {
	for (let key in obj) {
		console.log(`${key}: ${obj[key]}`);
	}
	console.log(`\n\n\n`);
}

// showAllObjectFeatures(pc);
// showAllObjectFeatures(laptop);
// showAllObjectFeatures(tv);

// проверяем, что у каждого прибора свои методы
function checkDeviceStatus(device) {
	device.powerButtonTurnOn(); // включили кнопку питания
	device.turnOffDevice() // вытащили розетку
	console.log(device.showDevicePowerStatus()); // проверяем работает ли прибор
}

// checkDeviceStatus(laptop); // работает без электр. сети (работает от батареи)
// checkDeviceStatus(pc); // НЕ работает без электр. сети
// checkDeviceStatus(tv); // НЕ работает без электр. сети