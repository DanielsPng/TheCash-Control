import * as C from './styles'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) =>{
    const handlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() -1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);

    }

    const handleNextMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() +1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);

    }

    return(
        <C.Container>
            <C.MounthArea>
                <C.MounthArrow onClick={handlePrevMonth}> <AiOutlineLeft/> </C.MounthArrow>
                    <C.MounthTitle>{formatCurrentMonth(currentMonth)}</C.MounthTitle>
                <C.MounthArrow onClick={handleNextMonth}> <AiOutlineRight/> </C.MounthArrow>
            </C.MounthArea>
            <C.ResumeArea>
                <ResumeItem title="Receita" value={income} />
                <ResumeItem title="Despesa" value={expense} />
                <ResumeItem 
                title="Balanço" 
                value={income - expense}
                color={(income-expense) < 0 ? '#EF4444' : '#10B981'} />
            </C.ResumeArea>
        </C.Container>
    );
}