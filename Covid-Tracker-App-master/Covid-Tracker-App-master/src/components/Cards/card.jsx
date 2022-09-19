// import React, { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';
import { Card, CardContent, Grid, Typography } from '@mui/material'
// import style from './styles.module.css'

const CardMain = ({ data: { TotalConfirmed,TotalDeaths, TotalRecovered }}) => {


    console.log(TotalConfirmed, "card console")
    // let [ApiData, setApiData] = useState([]);

    // async function ApiCall() {
    //     const getData = await fetch('https://api.covid19api.com/summary')
    //     let data = await getData.json()
    //     setApiData(data)
    // }

    // useEffect ( () => {
    //     ApiCall()
    // }, [])

    return (

        <>

            <Grid container align="center" sx={{margin : '0 auto', width: '80%'}}>
                <Grid item lg={4} md={6} xs={12} >
                    <CardContent sx={{border: '1px solid', borderRadius: '5px', margin: '20px'}}>
                        <Typography color="text.secondary">
                        Total Confirmed
                        </Typography>
                        <Typography variant="h5">
                        {TotalConfirmed.toLocaleString()}
                        </Typography>
        
                    </CardContent>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <CardContent sx={{border: '1px solid', borderRadius: '5px', margin: '20px'}}>
                        <Typography color="text.secondary">
                        Total Deaths
                        </Typography>
                        <Typography variant="h5">
                            {TotalDeaths.toLocaleString()}
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <CardContent sx={{border: '1px solid', borderRadius: '5px', margin: '20px'}}>
                        <Typography color="text.secondary">
                        Total Recovered
                        </Typography>
                        <Typography variant="h5">
                            {TotalRecovered.toLocaleString()}
                        </Typography>

                    </CardContent>
                </Grid>
            </Grid>
    
        </>

    )
    
}

export default CardMain;