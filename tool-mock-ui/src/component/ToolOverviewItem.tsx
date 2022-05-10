import React from "react";
import {ToolDescriptor} from "../model/ToolDescriptor";
import {ToolStateIndicator} from "./ToolStateIndicator";
import {TableCell, TableRow} from "@mui/material";

export interface ToolOverviewItemProps {
    tool: ToolDescriptor,
}

export const ToolOverviewItem: React.FC<ToolOverviewItemProps> = ({tool}: ToolOverviewItemProps) => {
    return (
      <TableRow>
          <TableCell>{tool.id}</TableCell>
          <TableCell>{tool.name}</TableCell>
          <TableCell>
              <ToolStateIndicator states={tool.states}/>
          </TableCell>
      </TableRow>
    );
}
