/*Написать, функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

const oneObj = {

    oneKey: "One key",
    twoKey: "Two key",
}

const objOwn = Object.create(oneObj);

objOwn.ownKey = 'Thrid own key';
function selfKeys(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)){
        console.log('Собственный - ' + key +': '+  object[key]);
      }
    }
  }

selfKeys(objOwn)