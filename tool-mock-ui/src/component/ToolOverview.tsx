import React from "react";
import {Box, Container, Grid, Paper, CssBaseline} from "@mui/material";

import {toolApi} from "../service/ToolApi";
import {ToolOverviewList} from "./ToolOverviewList";

export const ToolOverview = () => {

    const { data, error, isLoading } = toolApi.useGetToolOverviewsQuery();

    if(isLoading)
        return (<div><p>Loading ...</p></div>);

    if(error != null || data === undefined)
        return (<div><p>ERROR !</p></div>);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <h1>Tool Overview</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <ToolOverviewList tools={data}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}