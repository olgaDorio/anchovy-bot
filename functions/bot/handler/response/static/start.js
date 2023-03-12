const { Markup } = require('telegraf');

module.exports = [
  [
    'Спасибо, что согласились поучаствовать в исследовании!\n',
    'Бот будет напоминать несколько раз в день о том, что нужно заполнять дневник, предлагая несколько вариантов ответа (вы всегда можете ввести свой вариант).',
    'Вы можете заполнять дневник: ',
    '- в течение дня в реальном времени, отправляя сообщения боту при каждой смене деятельности (в этом случае не нужно указывать время, бот сам его зафиксирует)',
    '- несколько раз за день (например, в 13.00 записать дневник за период времени 8-13, затем в 18 за период 13-18 и т.д.)',
    '- в конце дня одним сообщением, ориентируясь на свои контрольные точки',
    '\nПример: ',
    '08.00 подготовка к уроку',
    '09.00 1 урок, проверка самостоятельной ',
    '10.00-10.20 планерка у завуча ',
    '...',
    '15.00-16.00 подготовка проекта ',
    '23.00-00.00 проверка впр ',
    '\nНас интересует распределение времени на те или иные виды деятельности в течение рабочего дня, а также работа в нерабочее время. По всем вопросам пишите @annavaskevich',
  ].join('\n'),

  Markup.keyboard([
    ['🔍 Урок', '😎 Подготовка'],
    ['☸ Журнал', '📞 Работа с детьми'],
    ['📢 Родители', '⭐️ Совещание', '👥 Проверка работ'],
  ]).resize(),
];
