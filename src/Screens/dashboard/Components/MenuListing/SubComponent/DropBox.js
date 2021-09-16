import { useState } from  'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import DragableItem from './DragableItem';
function getStyle(styles) {
    return {
       ...styles,
        margin: '5px 0px',
    };
}
const DropBox = ({ greedy, children, child, index = null, c_index, isSet, value, itemList, setItemList, moveCard }) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
        accept: ItemTypes.DRAGABLE,
        drop(item, monitor) { 
            const didDrop = monitor.didDrop();

            if (didDrop && !greedy) {
                return
            }

            if(child){
                 itemList[index].children[itemList[index].children.length - 1] =  item
                itemList[index].children[itemList[index].children.length] =  {}
            }else{
                item['children'] = [{}]
                itemList[index] = item
                itemList[index + 1] = {children:[{}]}
            }
            
            
            setItemList([...itemList]);
            setHasDropped(true);
            setHasDroppedOnChild(didDrop);

            console.log('ITEm LIST:', itemList, item, index)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }), [greedy, setHasDropped, setHasDroppedOnChild]);
    const text = greedy ? 'greedy' : 'not greedy';
    let backgroundColor = 'rgba(0, 0, 0, .1)';
    let paddingTop = "10px";
    let height = '50px';
    let border = 'none'
    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = 'rgba(0,0,0,.3)';
        border = '2px #e7e7e7 dashed';
    }

    if (hasDropped){
        paddingTop = '0px';
        isSet = true;
        border = 'none';
        height = 'auto';
        backgroundColor = 'rgba(0,0,0,0)';
    }


    return (
            
                <div ref={drop} className="dropItem" style={getStyle({backgroundColor, height, paddingTop, border})}>
                            {
                                hasDropped && <DragableItem title={value.title} price={value.price} index={index} moveCard={moveCard} optionalble={!child} dropped={{ itemList, setItemList, child, index, c_index, setHasDropped }} />
                            }    
                            { isSet && <div id="dropItem-child" >{children}</div> }
		            </div>
    )
}

export default DropBox
