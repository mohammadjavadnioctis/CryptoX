import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import { useLocation } from 'react-router-dom'

import logo from '../../../../images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {

    const {pathname} = useLocation()

    const activeItem = sidebar_items.findIndex(item => item.route === pathname )

    return (

            <div className='sidebar hidden md:inline-block'>
                <div className="sidebar__logo">
                </div>
                {
                    sidebar_items.map((item, index) => {
                    
                        return(
                        <Link to={item.route} key={index} style={{ height:"100%", textAlign:'center'}} className={`menu-items-tailored ${item.class}`}>
                            <SidebarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                                
                            />
                        </Link>)
                    })
                }
            </div>
    )
}

export default Sidebar
