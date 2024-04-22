import {getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import styled from "styled-components";
export function TablaMarca({data}) {
    const columns = [
        {

        }
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
        <h1>Componente</h1>
    </Container>);
}
const Container = styled.div`


`