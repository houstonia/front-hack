import { TableCell } from "./tableCell"

export const TableRow = ({title, category, pts}) =>{
    return <tr className="h-[60px]">
        <TableCell item={title}/>
        <TableCell item={category}/>
        <TableCell item={pts}/>
        {/* <TableCell item={time}/> */}
    </tr>
}