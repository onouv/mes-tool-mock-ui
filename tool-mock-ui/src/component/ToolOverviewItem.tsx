import React from "react";
import {ToolDescriptor} from "../model/ToolDescriptor";
import {ToolStateIndicator} from "./ToolStateIndicator";

export interface ToolOverviewItemProps {
    tool: ToolDescriptor,
}

export const ToolOverviewItem: React.FC<ToolOverviewItemProps> = ({tool}: ToolOverviewItemProps) => {
    return (
      <div className="tool-overview-item">
          <p>
              {tool.id} | {tool.name} | <ToolStateIndicator state={tool.state}/>
          </p>
      </div>
    );
}