// Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function showObjectOwnProperties(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`ключ: ${key},	значение: ${obj[key]}`);
		}
	}
}