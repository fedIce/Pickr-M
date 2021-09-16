import React from 'react';
import SearchAndFilterBar from '../SearchAndFilterBar';
import DragAbleItem from './SubComponent/DragableItem'
import DropBox from './SubComponent/DropBox';
import { useState, useCallback } from 'react';
import update from 'immutability-helper';


function MenuListing() {

    const [isSet, setIsSet] = React.useState(false);
    const [prodList, setProdList] = React.useState([
        {
            title: "Roasted Chicken",
            price: "30.00",
            children: [{}]
        },
        {
            title: "Garlic Chiken Soup",
            price: "23.50",
            children: [{}]
        },
        {
            title: "Pepper Chicken",
            price: "20.00",
            children: [{}]
        },
        {
            title: "Ground Beef Soup",
            price: "40.00",
            children: [{}]
        }
    ]);
    const [itemList, setItemList] = React.useState([{children:[{}]}])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = itemList[dragIndex];
        setItemList(update(itemList, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [itemList]);

    return (
        <div className="menu-listing">
            <div className="menu-listing-dnd">
                <div className="menu-listing-drop-zone">
                    <div className="list-dg-drop">
                        {
                            itemList.map( (item,indx) => (
                                <DropBox child={false} key={indx} index={indx} moveCard={moveCard}  setIsSet={setIsSet} itemList={itemList} setItemList={setItemList} value={item} style={{ marginBottom: '30px'}}>
                                   {
                                       itemList[indx].children.map((c_item, c_indx) => (
                                           <DropBox child={true}  key={c_indx} moveCard={moveCard} index={indx} c_index={c_indx} setIsSet={setIsSet} itemList={itemList} value={c_item} setItemList={setItemList} />
                                       ))
                                   }
                                </DropBox>
                            ))
                        }
                        
                    </div>
                </div>
                <div className="menu-listing-pickup-zone">
                    <div className="from-list-container">
                            <div id="menu-list-top-search-filter">
                                <SearchAndFilterBar/>
                            </div>
                            <div id="list-dg">
                                {
                                    prodList.map((prod, indx) => (
                                        <DragAbleItem key={indx} moveCard={moveCard} title={prod.title} price={prod.price} index={indx} />
                                    ))
                                }
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuListing
