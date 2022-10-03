/* Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.*/
class Device {
  constructor(power, getOnOff) {
    this.power = power;
    this.getOnOff = getOnOff;
    this.nameDevice = '';
  }
}  
  const comp = new Device(400,  1)
  
  const lamp = new Device(80,  1)
  
  comp.nameDevice = 'Компьютер'
  lamp.nameDevice = 'Лампа'
  
  function SumPower(sumPower) {
    comp.getOnOff();
    lamp.getOnOff();
    if (comp.getOnOff === 1 ) {
      pow1 = comp.power
    } else{
      pow1 = 0
    } if (lamp.getOnOff === 1) {
      pow2 = lamp.power
    } else{
      pow2 = 0
    }
    return sumPower = pow1 + pow2
  }
    
  function SortDevice() {
    if (comp.power > lamp.power) {
      consol.log('Список потрибителе по уменшению:\ 1. ${comp.nameDevice}\ 2. ${lamp.nameDevice}')
    } else {
          consol.log('Список потрибителе по уменшению:\ 1. ${lamp.nameDevice}\ 2. ${comp.nameDevice}')
    }
  }
  
  consol.log(SumPower())
  SortDevice()
