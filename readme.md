# Инструкция к проекту:  
1. Открываем папку с новым проектом в VScode.
2. Инициализируем новый проект: npm init -y. 
3. Установить jest: npm install --save-dev jest.
4. В script: test заменяем информацию на jest.
5. Создать файл с фунцией, которую будем тестить: bonus.js
6. Создаем файл, в котором будем писать тесты:bonus.spec.js  
   Примечание: указать рассширение test.js или spec.js,  
   тогда эти файлы будут распозноваться как тесты.
7. Создаем экспорт функции: module.exports = calculateBonus.
8. В тестовом файле импортируем фунцию: const calculateBonus = require('bonus.js').
9. Пишем тесты, используем test()
10. Запускаем тесты: npx jest