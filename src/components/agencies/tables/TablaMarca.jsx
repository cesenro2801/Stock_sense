import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import styled from "styled-components";
import { ContentAccionesT } from "../../../index";
export function TablaMarca({data}) {
    const columns = [
        {
            accessorKey: "descripcion",
            header: "Descripcion",
            cell:(info)=><span>{info.getValue()}</span>
        },
        {
            accessorKey: "acciones",
            header: "Acciones",
            cell:(info)=>(<td>
                <ContentAccionesT/>
            </td>)
        },
    ]

    const table = useReactTable({ 
        data, 
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    
    });

    return (<Container>
        <table>
            <thread>
                {
                    table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header)=>(
                                <th key={header.id}>
                                    {header.column.columnDef.header}
                                </th>
                            ))}
                        </tr>
                        
                    ))
                }
                
            </thread>
            <tbody>
                {table.getRowModel().rows.map((item)=>(
                    <tr key={item.id}>
                        {
                            item.getVisibleCells().map((cell)=>(
                                <td key={cell.id}>
                                    {
                                        flexRender(cell.column.columnDef.cell, cell.
                                        getContext())
                                    }
                                </td>
                            ))
                        }

                    </tr>
                ))}
            </tbody>
        </table>
    </Container>);
}
const Container = styled.div`


`;