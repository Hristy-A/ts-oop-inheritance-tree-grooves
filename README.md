## Модель рощи из разных деревьев

Ты смоделировал(а) апельсиновое дерево для нашего клиента, фермера Федора. Кажется это было [тут][задача об апельсиновом дереве].
*Если ты еще не сделал(а) это задание, **сделай его прежде**, чем приступать к моделированию рощи!*

Федор был доволен твоей работой и поэтому привлек тебя ещё к одному проекту. Его апельсиновая ферма рассматривает возможность приобретения соседней древесной рощи, которая включает в себя разные виды деревьев помимо апельсиновых.

Тебе необходимо построить простую модель рощи из разных деревьев. Начни с апельсинового дерева и используй его как образец для моделирования яблони. Когда у тебя будут два класса деревьев и соответствующие классы фруктов, займись рефакторингом кода. Если ты не знаешь что такое рефакторинг - погугли. После того, как ты порефакторил свой код, добавь грушевые деревья. Наконец, ты можешь смоделировать целую рощу.

## Наследование
В этой задаче ты будешь использовать *наследование*, чтобы исключить повторение, которое создают классы `OrangeTree` и `AppleTree` и другие. Создай общий класс `FruitTree`, из которого ты сможешь создать более конкретные классы деревьев: апельсиновые, яблони и позднее - грушевые. Твоя общая модель фруктовых деревьев обеспечит стандартное поведение  деревьев: они растут, зреют, умирают и т.д. Апельсиновые, яблочные и грушевые деревья будут обладать одними и теми же базовыми характеристиками, но каждое дерево будет отличаться по своей реализации: одно дерево производит апельсины, другое - яблоки; одно дерево умирает в возрасте 100 лет, другое - в 45; и так далее (см. Таблицу 1).


|                          | Апельсиновые деревья | Яблочные деревья | Грушевые деревья |
| ------------------------ | -------------------: | ---------------: | ---------------: |
| Максимальная высота      |                   25 |               26 |               20 |
| Темп роста               |                  2.5 |                2 |              2.5 |
| Ежегодный урожай фруктов |            100 - 300 |        400 - 600 |        175 - 225 |
| Возраст зрелости         |                    6 |                5 |                5 |
| Возраст смерти           |                  100 |               45 |               40 |
| Диаметр                  |                2-3.2 |            1-2.5 |          2.4-4.1 |
| Тип фруктов              |              oranges |           apples |            pears |

*Таблица 1*.  Данные для апельсиновых, яблочных и грушевых деревьев

### Pre-release. Скопируй модель апельсинового дерева
Прежде чем начать, скопируй код из задачи об апельсиновом дереве. Возьми код для апельсинового дерева и апельсинов. Запусти тесты и убедись, что они работают должным образом.

### Release 0. Яблоки и яблочные деревья
У тебя есть класс `OrangeTree` который имеет такие методы, как `.isMature`,`.isDead` и т.д.Создай класс `AppleTree`, который в точности копирует этот интерфейс. Твоя первая яблоня не будет отличаться от апельсинового дерева.

Однако несмотря на то, что апельсиновые деревья и яблочные будут вести себя одинаково, они будут иметь разные жизненные циклы. Они будут производить фрукты в разном возрасте, расти с разной скоростью, умирать в разное время и т.д. Детали для каждого типа дерева можно найти в Таблице 1.

Начни с написания тестов для класса `AppleTree`. Используй тесты для апельсинового дерева как образец, изменяя их для деталей яблочного. Кстати, тесты для разных деревьев рекомендуется писать в разных файлах. Затем внедри сам класс. Главное не перепутай, яблочное дерево не должно производить апельсины, это против природы.

### Release 1. От конкретных типов до общего типа
Теперь ты смоделировал(а) два конкретных типа фруктовых деревьев. Твои апельсиновые и яблочные деревья ведут себя очень похожим образом. Основываясь на сходстве поведения между двумя типами деревьев, ты можешь создать более обобщенный случай: фруктовое дерево.

Создай класс `FruitTree` с обобщенным поведением. Твои классы `OrangeTree` и `AppleTree` могут наследовать поведение этого общего класса и реализовывать свои собственные особенности. Например, как апельсиновые деревья, так и яблочные растут вверх. С каждым сезоном деревья растут на некоторую величину, пока не достигнут своей максимальной высоты. Высота у всех типов разная, однако поведение одинаковое.
```javascript
class FruitTree {

}

class OrangeTree extends FruitTree {

}

class AppleTree extends FruitTree {

}

```

*Рисунок 1*. Определение классов `OrangeTree` и `AppleTree`, которые наследуются от суперкласса `FruitTree` или родительского класса.

Определи класс `FruitTree` и измени классы `OrangeTree` и `AppleTree` чтобы они наследовались от `FruitTree` (см. Рисунок 1). Поэтапно перемещай общие черты от конкретных типов деревьев к `FruitTree`.

По мере того, как ты меняешь свой код, тестирование твоего приложения должно продолжаться: возможно, тебе потребуется добавить небольшие изменения в свои тесты. Если твои тесты продолжают проходить после рефакторинга, то ты знаешь, что твой код в порядке. Если нет - ты быстро найдешь свои ошибки.

### Release 2. Груши и грушевые деревья
Теперь, когда у тебя есть обобщенная модель фруктового дерева, из которой ты можешь получить определенные типы деревьев, воспользуйся этим, создав дополнительный тип дерева: `PearTree`.

Да, тебе также нужно написать тесты для этого типа деревьев.

### Release 3. Модель рощи

|                          | Возраст 0 лет | Возраст 5 лет | Возраст 20 лет | Возраст 37 лет | Возраст 50 лет | Итого |
| :----------------------- | ------------: | ------------: | -------------: | -------------: | -------------: | ----: |
| **Апельсиновые деревья** |             0 |            20 |             20 |             10 |             20 |    70 |
| **Яблочные деревья**     |            10 |            10 |             20 |             20 |              5 |    65 |
| **Грушевые деревья**     |            10 |             0 |             10 |             20 |             10 |    50 |

*Таблица 2*. Количество деревьев в роще, разделенных по типу и возрасту

Теперь, когда у тебя есть модель для каждого типа дерева в роще, давай построим модель рощи. Данные для деревьев рощи приведены в Таблице 2. Ты можешь увидеть, сколько деревьев в роще, их типы и их возраст. Рассмотрим на примере апельсиновых деревьев - в роще в общей сложности 70 апельсиновых деревьев, 20 из них - пятилетние, другим 20 – по 20 лет, ещё 10 апельсиновым деревьям - 37 лет, оставшимся 20 – по 50 лет.

Определи класс `TreeGrove`, который будет отвечать за все деревья в роще. Вот список некоторых начальных действий для класса:

1. Рощу можно инициализировать массивом деревьев.
2. Роща может возвращать разные подмножества своих деревьев: все деревья, только деревья одного типа, только зрелые деревья и т.д.
3. Когда древесная роща проходит вегетационный период, каждое из ее деревьев проходит сезон созревания `.passGrowingSeason()`.

*Подсказка:* Ты можешь отредактировать свои деревья. Например, ты можешь инициализировать их с заданными возрастом и высотой.

### Release 4. Модель ожидаемого производства
Пришло время использовать твои модели. Федор хочет, чтобы ты составил(а) отчет о количестве ожидаемой продукции рощи в течение следующих 10 сезонов. По каждому сезону в твоем отчете должно указываться: 

1. Сколько апельсинов, яблок и груш твоя модель будет производить каждый сезон.
2. Средний размер каждого вида фруктов.
3. Для каждого типа дерева необходимо указать, сколько незрелых, зрелых и мертвых деревьев в роще, а также их общее количество (см. [пример отчета]).


## Выводы
В этой задаче ты начал(а) изучать наследование. Это способ совместного использования поведения между подобными типами объектов, который может упростить твой код. Наследование подходит только тогда, когда подкласс (например, `OrangeTree`) является определенным типом суперкласса (например, `FruitTree`).


[пример отчета]: readme-assets/example-report.md
[задача об апельсиновом дереве]: ../../../orange-tree-1-just-oranges-challenge
