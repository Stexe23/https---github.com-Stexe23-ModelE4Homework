/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция 
должна возвращать true или false.*/ 

const obj = {
    str1: 'Строуа один',
    str2: 'Строка два',
    str3: 'Строка три',
    str4: 'Строка четыре'
  }
  
  const argStr = 'str3'
  
  function selfKeys(arg, object) {
    for (let key in object) {
      if (key !== arg){
        console.log(false)
      } else {
        console.log(true)
      }
    }
  }
  
  selfKeys(argStr, obj)