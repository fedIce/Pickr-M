import React from 'react'
import {UisStar} from '@iconscout/react-unicons-solid'
import {UilStar} from '@iconscout/react-unicons'
import './style.css'

export default function StarRating( { rate } ) {
   
    const [count, setCount] = React.useState([0,0,0,0,0])

    return (
        <div className="p-star-rating" >
            {
               count.map((count, indx) => {
                    if(indx <= rate-1 ){
                        return  <UisStar key={indx} style={{ 
                            color: '#FFD700'

                         }} />
                    }else{
                        return <UilStar key={indx} style={{ color: '#FFD700' }}  />
                    }
               })
            }
        </div>
    )
}
