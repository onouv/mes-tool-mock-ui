import React from 'react';
import {ToolDescriptor} from "../model/ToolDescriptor";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {ToolOverviewItem} from "./ToolOverviewItem";

export interface ToolDescriptorProps {
    tools: ToolDescriptor[];
}
export const ToolOverviewList: React.FC<ToolDescriptorProps> = ({tools}: ToolDescriptorProps) => {
    return (
    <>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell><b>ID</b></TableCell>
                    <TableCell><b>Name</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tools.map(tool => (
                    <ToolOverviewItem tool={tool}/>
                ))}
            </TableBody>
        </Table>
    </>);
}