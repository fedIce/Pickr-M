import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import Switch  from '../../../../../Components/Switch';

import { ItemTypes } from '../ItemTypes';

const DragableItem = ({ index=null, title, price, active = false, moveCard, optionalble=false, c_index = null, dropped }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.DRAGABLE,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top 
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{ isDragging } , drag] = useDrag(() => (
        { 
            type: ItemTypes.DRAGABLE,
            item: { title, price, active, index, c_index },

            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            end: (item, monitor) => {
                const didDrop = monitor.didDrop();
                var tmp = []
                if (!didDrop) {
                    if(dropped){
                        var childList = dropped.itemList[dropped.index].children
                        if(dropped.child){

                            tmp = childList.filter((child, indx) => indx !== dropped.c_index)
                            dropped.itemList[dropped.index].children = tmp
                            console.log(dropped.itemList[dropped.index].children)
                        }else{
                            dropped.itemList.splice(index, 1)
                        }
                        dropped.setHasDropped(false)
                        dropped.setItemList([...dropped.itemList])
                    }
                }
            }
        })
    );


    const opacity = isDragging ? 0 : 1;
    return (
        
        <div ref={drag} style={{ opacity }} className="dragItem" data-handler-id={handlerId}>
            <div>
                <span>{title}</span>
                <span>$ {price}</span>
            </div>
            {optionalble? <Switch /> : null}
		</div>
    );
};

export default DragableItem