import { Dialog } from "@radix-ui/react-dialog"
import CardImg from "@/assets/Image.png"
import { Button } from "../../components/ui/button"
import SideMenu from "../../components/shared/sidemenu"
import { SolutionBlock } from "../../components/shared/solution-block"
import { SolutionImage } from "../../components/shared/solution-image"
import { TaskSolveButton } from "../../components/shared/task-solve-button"
import { useNavigate} from "react-router-dom"
import { DialogClose, DialogContent, DialogTrigger } from "../../components/ui/dialog"

export const Solution = ({}) => {
    const navigate = useNavigate();
    return(
    <div className="flex flex-row gap-7">
        <div className="flex flex-col gap-7">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-[16px]">
                    <button onClick={()=>{navigate(-1)}} className=" w-[101.46px] pl-2.5 pr-4 py-2.5 bg-gray-900 rounded-lg flex flex-row justify-center items-center gap-2">
                        <img src="/src/assets/icons/ArrowBack.svg"></img>
                        <div className="text-white text-[15px] font-semibold leading-tight">Назад</div>
                    </button>
                    <TaskSolveButton></TaskSolveButton>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="pl-2.5 pr-4 py-2.5 bg-gray-900 rounded-lg flex flex-row justify-center items-center gap-2">
                            <img src="/src/assets/icons/help-circle.svg"></img>
                            <div className="text-white text-[15px] font-semibold leading-tight">Подсказка</div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="w-[660px] h-[606px] px-8 pt-7 pb-8 bg-gray-900 rounded-xl shadow flex flex-col justify-start items-start gap-2.5">
                        <div className="flex w-full flex-row justify-between items-center border-b-px border-b-2 border-b-[#666970] pb-3">
                            <div className="text-white items-center text-lg font-semibold">Подсказка</div>
                            <DialogClose>
                                <button className="w-[22px] h-[22px] flex items-center">
                                    <img className="w-7 h-7" src="/src/assets/icons/xgray.svg"></img>
                                </button>
                            </DialogClose>
                        </div>
                        <div className="self-stretch h-[82px] flex-col justify-start items-end gap-4 flex">
                            <div className="self-stretch h-[478px] flex-col justify-start items-start gap-3.5 flex">
                                <div className="self-stretch"><span className="text-white text-base font-semibold font-['Raleway'] leading-normal">Please identify the rental server service used by mab.main.jp and answer me with the domain name of the website. The flag format is </span><span className="text-red-500 text-base font-semibold font-['Raleway'] leading-normal">TsukuCTF23</span><span className="text-white text-base font-semibold font-['Raleway'] leading-normal">.</span></div>
                                <img className="w-[596px] h-[336px] rounded-lg" src={CardImg} />
                                <div className="self-stretch justify-start items-start gap-3.5 flex flex-row">
                                    <Button className="w-[199px] h-[42px] bg-[#222631]" icon="/src/assets/icons/download.svg" variant="download" size="download" name="Statue.jpg" />
                                    <Button className="w-[199px] h-[42px] bg-[#222631]" icon="/src/assets/icons/download.svg" variant="download" size="download" name="tsukushi_estate.png" />
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <SolutionBlock title="Краткий обзор">Лабиринт это reverse задача класса Very hard. Игроки вначале должны разреверсить голанг бинарник, содержащий лабиринт. Затем, они должны идентифицировать бекдор встроенный в игру и использовать его чтобы выиграть на ремоут сервере
            </SolutionBlock>
            <SolutionBlock title="Требуемые навыки">- Базовые навыки использования декомпилятора<br/>- Патчинг<br/>- Скриптинг
            </SolutionBlock>
            <SolutionBlock title="Решение">
            <div>
                Нам выдан большой голанг бинарник. При исполнении его он спрашивает у нас 'proof of work' используя 
            </div>
            <div>
                redpwn POW
            </div><div>.
            <br/>
            </div>
            <div > <br/></div>
            <div>
                Если мы введем правильный результат исполнения команды, нам выводится это:
            </div>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution1.png"></SolutionImage>
            Мы можем предположить, что это какой-то вид лабиринта со стенами скрытыми от нас. Нажатия на k/j/h/l начинают двигать SS, выводя новый лабиринт каждый раз. Мы не можем брутфорсить наш путь потому что не видим стены и у нас есть только 20 секунд на сервере.
            
            </SolutionBlock>
            <SolutionBlock title="Анализ">
            Открываем бинарник в IDA Free, мы можем увидеть что к нашему счастью он не стрипнут (debug символы остались). Затем отправляемся в main_main, точка входа для голанг приложений.<br/>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution2.png"/>
            <span>Начинается все с </span><span>генерации</span><span> кейса со сложностью установленной в 0x1338, затем оно передается в fmt.Fprintf чтобы вывести в stdout.</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution3.png"/><br/>
            После этого читается строчка из stdin.
            <SolutionImage imgSrc="/src/assets/solution-resources/solution4.png"/>
            <span>Затем вызывается функция Check используя оригинальный челленж и введенное решение. Поскольку check </span><span>возвращает bool, error</span><span>, мы можем предположить, что этот участок кода проверяет error != nil и что bool значение равно true. Если так, то мы берем введенное решение и передаем его в CRC32 функцию, используя результат значения чтобы установить seed для псевдорандомного генератора чисел math.rand.</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution5.png"/>
            <span>В данном участке кода находится сложный для прочтения цикл. К нашей радости в debug символах Go есть типы и IDA их импортировала - поэтому мы можем понять, что скорее всего оно генерирует лабиринт с размерами 25x50.<br/></span><span> <br/></span><span>После этого мы устанавливаем точку старта и конца в лабиринте, плюс несколько дополнительных параметров.</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution6.png"/>
            <span>Затем мы устанавливаем символы для форматирования. Wall и Path это пробелы, Start это SS, End это EE и Solution/Cursor это ::.<br/></span><span> <br/></span><span>После мы запускаем таймер.</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution7.png"/>
            Сразу после этого программа выводит 'Can you solve my maze..' сообщение и попадает в цикл с обработкой пользовательского ввода.
            <SolutionImage imgSrc="/src/assets/solution-resources/solution8.png"/>
            Программа читает один символ из пользовательского ввода, inp_char операция конвертирует его в нижний регистр. После этого она итерирует по main_keyDirs - массиву указателей на keyDir структур, которые содержат в себе char c и long long direction. После этого, если она смогла найти вхождение этой кнопки:
            <SolutionImage imgSrc="/src/assets/solution-resources/solution9.png"/>
            <span >Курсор двигается в данную сторону, перед этим проверяя не завершили ли мы уже прохождение.<br/></span><span> <br/></span><span>После, мы замечаем какую-то особую обработку.</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution10.png"/>
            <span >Если нажата клавиша q, мы выходим незамедлительно. Иначе, если нажата клавиша b (которая не была выведена в управлении), мы отмечаем лабиринт решенным и выводим его.<br/></span><span> <br/></span><span>Если мы попробуем запустить программу и нажать b, весь лабиринт решится и решение выведется на экран используя :: для отображения пути.</span>
            </SolutionBlock>
            <SolutionBlock title="Где же флаг?">
            <span>Так или иначе, решение лабиринта таким образом не дает нам сразу же флаг. main_printFinished открывает flag.txt и выводит его, но только если мы туда попадаем исключительно используя клавиши для ходов. Как только мы используем b для вывода решения, мы больше не можем совершать ходы.<br/>Помня о том, что seed у math.rand выставляется решению proof of work, мы можем понять, что используя определенное решение мы можем всегда генерировать один и тот же лабиринт. Мы можем это эксплуатировать:<br/></span><span>Подключаемся к серверу и решаем proof of work<br/>Исполняем локально бинарник и вводим нужное нам решение (бинарник перед этим должен быть пропатчен чтобы он принимал любое решение)<br/>Используем b и получаем решение<br/>Отправляем данное решение на сервер<br/></span><span>Начнем с патчинга бинарника. Отправляемся в функцию Check, в ней находятся две проверки на ошибку и на результат. Мы можем заменить</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution11.png"/>
            на соответствующий набор NOP инструкций.
            </SolutionBlock>
            <SolutionBlock title="Парсинг лабиринта">
            Для начала давайте начнем с обработки лабиринта. Сделаем функцию, которая принимает proof of work и считает шаги нужные для решения соответствующего лабиринта.
            <SolutionImage imgSrc="/src/assets/solution-resources/solution12.png"/>
            Для начала, нам нужно исполнить proof of work и получить его решение, затем дать это решение пропатченному бинарнику
            <SolutionImage imgSrc="/src/assets/solution-resources/solution13.png"/>
            <span>Теперь нам нужно обойти весь лабиринт и получить нужные направления для каждого шага. Для этого сначала нам нужно сконвертировать лабиринт в 2D список (помня о том, что каждые 2 символа обозначают одну клетку в лабиринте), при этом нужно еще найти точку старта. Также, нам понадобится запоминать предыдущие позиции чтобы не уйти назад случайно.<br/>Эксперементируя с программой, мы можем идентифицировать 2 полезных нам факта:<br/></span><span>Нажимая любую кнопку нас будет двигать на 2 клетки в это направление<br/>Мы начинаем справа от 'SS' позиции, но при этом пустыми StartRight.</span>
            <SolutionImage imgSrc="/src/assets/solution-resources/solution14.png"/>
            Затем мы повторяя будем смотреть в круге нашу позицию, при этом ведя поиск следующей ::.
            <SolutionImage imgSrc="/src/assets/solution-resources/solution15.png"/>
            Это вернет нам каждый шаг нужный для решения; мы используем steps.extend(maze_steps(maze)) в нашей первой функции чтобы использовать это. Теперь мы можем это скомбинировать все вместе:
            <SolutionImage imgSrc="/src/assets/solution-resources/solution16.png"/>
            И сервер нам выдаст флаг.
            </SolutionBlock>
        </div>

    </div>
    )
}