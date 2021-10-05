**Team "Team Name"**

Мы рады вас приветствовать вас на этом командном проекте!) Всем привет :)
**Цель проекта:** получить практические навыки в прикладных вещах, таких как React, TypeScript и другие, в зависимости от того, что выберете вы сами. А также получить самый ценный опыт - групповая работа. Вам прийдется договариваться друг с другом, спорить, идти на компромисы и приходить к одному решению, все на благо проекта 😊
Проект является учебным и не имеет идеи дальнейшей коммерциализации. Он предназначет только для получения опыта.


> **В чем суть проекта**
Вам нужно будет написать "визуализатор API" разных сервисов.
Сегодня есть множество сервисов, которые представляют Rest API.
Концептуально вашей задачей будет визуальное отображение работы с конкретным сервисом.
Основные функции: авторизация, получение/создание/редактирование/удаление данных.
В базовой версии вам нужно будет подружить trello c google sheets.
Возможно в дальнейшем появятся еще интеграции с другими сервисами.

На выходе должен получится проект с несколькими страницами:
Главная
Страница для Trello. Тут будет авторизация в системе trello. выбор нужной доски.
Страница для google sheets. Так же авторизация и выбор таблицы.
Страница для связи трелло с гугл таблицей
Эта страница является главной функциональной единицей.
Базовые функции страницы:

Выгрузка всех карточек из трелло в гугл таблицу
Выгрузка всех строк из гугл таблицы в трелло
Работа с данными, при обработке данных должна быть промежуточная возможность их форматировать. Например возможность сделать весь текст заглавными буквами. Или перенос только тех, значений, которые входят в диапазон (например карточки с оценкой сложности от 4 до 5).
Создание новой карточки в трелло через интерфейс приложения
Создание новой строки в гугл таблицах.



Основная идея приложения: визуализировать методы Api сервисов. Чтобы на различные методы была "визуальная кнопка".
Чтобы иметь представление как это примерно выглядит, можно посмотреть на zapier или integromat

Чем проект инетересен
Исходя из описания выше может показаться что все достаточно просто. Интерес тут заключается в хранении/измениии данных. Так как не будет бекенда, все данные, приходящие из сторонних сервисов должны будут храниться на стороне фронтенда. Это достаточно хорошая школа, чтобы в полной мере ощутить на себе как строятся приложения с большими наборами данных.
Предложенные сервисы для интеграции известны и востребованны, поэтому у них широкие возможности взаимодействия по API. Но в силу внутренних обстоятельств апи будет не всегда удобно, и это будет подталкивать на решение не стандартных ситуаций. Плюс к этому приложения достаточно хорошо защищены с точки зрения безопасности, нужно будет глубоко изучить как работает авторизация.
Так что работы тут очень много :)
Зачем это нужно?
Наша цель научить вас быстро погружаться в документацию разных штук. Успешное изучение документации - залог устойчивого проекта с минимальным набором костылей и багов :) Поэтому чем раньше вы научитесь глубоко погружаться в суть тем легче вам будет идти дальше :).
Работа с данными будет преследовать вас постоянно на протяжении всей карьеры программиста. Данный проект заставит вас очень много попотеть с оптимизацией хранения данных.

Про тех. требования
Приложение нужно сделать на базе react в качестве базовой архитектуры использовать next.js. Для статической типизации использовать typescript.
В качестве базовых компонентов можно использовать материал
Для управления данными приложения есть библиотеки redux  и mobx. Мы бы хотели чтобы вы сами сделали обоснованный выбор почему берете тот или иной стейт менеджер.

Как работать с задачами
Базовая ветка - Master.
Коммиты в мастер строго запрещены, все изменения по проекту в мастер должны попадать через пулреквесты/мержреквесты(ПР/МР).
Ниже приведен флоу по работе в проекте:
Каждая задача должна быть оформлена через ишью(issues).
После создания ишью ему автоматически присваивается номер. Даже если ишью ни на кого не назначена, необходимо спросить у команды (либо у менеджера проекта), не работает ли уже кто-то над этой задачей. В случае получения одобрения необходимо назначить ишью на себя.
После этого создаете ветку для выполнения ишью в формате issueNumber-short-task-description.
В ходе работы над задачей делаете коммиты с содержательными пояснениями на англйском языке.

Пример плохого коментария к коммиту: "fix".
Пример хорошего комментария к комиту: "create profile service".

После завершения все коммиты пушатся в текущую ветку.
Перед созданием ветки обязательно проверьте, нет ли конфликтов в вашей текущей ветке с мастером (можно находясь в нужной ветке выполнить git pull origin master).
Затем создается ПР в мастер. После создания ПРа в первую очередь небходимо проверить его самостоятельно. Обращаем внимание не запушили ли закомментированный код, работает ли весь функционал в соответствии с задачей, описанной в ишью. Плюс проверить работоспособность хотябы в двух браузерах, к примеру хром и файрфокс. И только после этого уже просить других смотреть ПР.
Все участники проекта смотрят новый код и оставляют замечания(дискашены).
ПР принимается только после исправления всех дискашенов.
Закрытием задачи является мерж ветки в мастер. Мержить позволяется только в случае получения одобрения ПРа всеми участниками команды (гитхаб позволяет ставить апрувы, нужно попросить всех участников поставить их, если замечаний больше нет).

Про доп. требования
не забывайте при разработке проекта следовать стандартам fsd https://github.com/fullstack-development/front-end-best-practices
