import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'یک نمودار',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'یک نمودار دیگه',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'نام ارز',
        'مقدار کل',
        'جمع کل'
    ],
    body: [
        {
            "username": "بیت کوین",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "اتریوم",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "سولانا",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "داج کوین",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "تتر",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "بیت کوین",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping",
            statusText: "در حال تایید"

        },
        {
            id: "#OD1712",
            user: "اتریوم",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
            statusText: "تایید شده"
        },
        {
            id: "#OD1713",
            user: "سولانا",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending",
            statusText: "در مرحله تایید"
        },
        {
            id: "#OD1712",
            user: "تتر",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid",
            statusText: "تایید شده"
        },
        {
            id: "#OD1713",
            user: "بایننس کوین",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund",
            statusText: "رد شده"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.statusText}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">داشبورد</h2>
            <div className="row flex-col md:flex-row">
                <div className="w-full md:col-6">
                    <div className="row w-full md:col-6 flex flex-col md:flex-row">
                        {
                            statusCards.map((item, index) => (
                                <div className="status-card-tailored col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                  
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="w-full md:col6">
                    <div className="card">
                        <div className="card__header">
                            <h3>لیست سفارشات</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:col6">
                    <div className="card">
                        <div className="card__header">
                            <h3>لیست سفارشات باز</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
