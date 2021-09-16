import React from 'react'
import {UilFocusAdd } from '@iconscout/react-unicons'

export default function OpenDaysComponent({ openForm, setOpenForm }) {

    const [opendays, setOpendays] = React.useState([
        {
            day: "Monday",
            start:"10:00",
            end: "24:00"
        },
        {
            day: "Tuesday",
            start:"10:00",
            end: "24:00"
        },
        {
            day: "Wednesday",
            start:"10:00",
            end: "24:00"
        }
    ])

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return (
        <div className="p-open-days-constainer">
            <ul>
                {
                    opendays.map((item, indx) => {
                        return (
                            <li key={indx}>
                                <div style={{borderLeft: `5px ${getRandomColor()} solid`}}>
                                    <span>{item.day}</span>
                                    <span>{item.start} - {item.end}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> 
            {
                openForm?
                <div className="tags-cat-list">

                </div>  :null       
            } 
        </div>
    )
}
