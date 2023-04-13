// Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const checkObjectHasProperty = (str, obj) => (str in obj) ? true : false;



// ____ Проверка работы функции ____

// console.log(checkObjectHasProperty('login', student)); // true
// console.log(checkObjectHasProperty('address', student)); // false