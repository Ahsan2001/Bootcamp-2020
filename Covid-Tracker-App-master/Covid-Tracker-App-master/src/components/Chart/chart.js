import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Col, Container, Row } from 'react-bootstrap';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            // display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Covid Report Statistics'];





export const data = {
    labels,
    datasets: [
        {
            label: 'Confirmed Cases',
            data: [100],
            backgroundColor: 'purple',
        },
        {
            label: 'Recovery',
            data: [10],
            backgroundColor: 'blue',
        },
        {
            label: 'Total Deaths',
            data: [ 400],
            backgroundColor: 'red',
        },
        {
            label: 'Total Cases',
            data: [500],
            backgroundColor: 'green',
        },
    ],
};

function ChartApp() {
    return (
        <Container className="my-5">
            <Row>
                <Col xs={8} className="mx-auto">
                    <Bar options={options} data={data} />
                </Col>
            </Row>
        </Container>
    )
}
export  default ChartApp