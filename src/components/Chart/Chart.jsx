import React, { useState, useEffect } from 'react';
import {fetchDailyData} from "../../api"
import {Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());

        }
        fetchAPI();
        //console.log(dailyData);

    },[]);

const lineChart = (
    dailyData.length
    ? ( <Line 
        data = {{
            labels:dailyData.map( ({date}) => date),
            datasets: [{
                labels:dailyData.map( ({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff' ,
                fill: true,

            },{
                labels:dailyData.map( ({deaths}) => deaths),
                label: 'Deaths',
                borderColor: '#red' ,
                backgroundColor: 'rgba(255, 0 ,0 , 2.5) ',
                fill: true,

            }] ,
        }}
    />) : null

);

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;