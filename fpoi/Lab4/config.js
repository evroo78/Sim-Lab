// Параметри стенда ЛР 4 «Енергонезалежна пам'ять».
// demo_* використовуються лише в демо-режимі (settings.js без script_url).
window.CONFIG_FALLBACK = {
  title: "Енергонезалежна пам'ять",
  // Фактичні затримки екземпляра мікросхеми, нс: випадкові в цих межах (менші за максимум з даташита).
  // W27C512-45: TCE <= 45, TOE <= 20, TDF <= 20.  SST39SF010A-70: TCE <= 70, TOE <= 35, TOHZ <= 25.
  chips: {
    eeprom: { tCE: [28, 38], tOE: [11, 16], tDF: [9, 15] },
    flash:  { tCE: [42, 58], tOE: [18, 27], tDF: [10, 18] }
  },
  scope_tol_ns: 3,   // допуск на виміряну курсорами затримку
  demo_groups: { "Демо": [ { name: "Демо-студент 1", variant: 1 }, { name: "Демо-студент 2", variant: 2 }, { name: "Демо-студент 3", variant: 3 } ] },
  demo_variants: [
    { variant: 1, eeprom_addr: 4660,  eeprom_data: 165, flash_addr: 109517, flash_data: 60 },
    { variant: 2, eeprom_addr: 777,   eeprom_data: 90,  flash_addr: 70000,  flash_data: 201 },
    { variant: 3, eeprom_addr: 50123, eeprom_data: 38,  flash_addr: 4242,   flash_data: 147 }
  ]
};
