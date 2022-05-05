import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ToolDescriptor } from "../model/ToolDescriptor";
import {ToolDetailsDto} from "../model/ToolDetailsDto";

export const toolApi = createApi({
    reducerPath: 'toolApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/mes/tool/',
    }),
    endpoints: (builder) => {
        return ({
            getToolOverviews: builder.query<ToolDescriptor[], void>({
                query: () => 'overviews/mock',
            }),
            getToolDetails: builder.query<ToolDetailsDto, String>({
                query: (toolId: String) => `${toolId}/mock`,
            }),
        });
    },
});
