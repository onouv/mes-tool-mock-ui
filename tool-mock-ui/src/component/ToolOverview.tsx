import React from "react";
import {ToolOverviewItem} from "./ToolOverviewItem";
import {toolApi} from "../service/ToolApi";


export const ToolOverview = () => {

    const { data, error, isLoading } = toolApi.useGetToolOverviewsQuery();

    if(isLoading)
        return (<div><p>Loading ...</p></div>);

    if(error != null || data === undefined)
        return (<div><p>ERROR !</p></div>);

    return (
        <div>
            <p>Tool Overview</p>
            <table>
                <tbody>
                {data.map(tool => (
                    <ToolOverviewItem tool={tool}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}