import * as C from './styles';
import {Item} from '../../types/Item'
import {TableItem} from '../TableItem'

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadCollum width={100}>Data</C.TableHeadCollum>
                    <C.TableHeadCollum width={130}>Categoria</C.TableHeadCollum>
                    <C.TableHeadCollum>Título</C.TableHeadCollum>
                    <C.TableHeadCollum width={150}>Valor</C.TableHeadCollum>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=> (
                   <TableItem key={index} item={item}/>

                ))}
            </tbody>
        </C.Table>
    );

}