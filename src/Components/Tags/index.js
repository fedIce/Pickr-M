import React from 'react'
import * as Unicon from '@iconscout/react-unicons'

export default function Tags({ _tags }) {

    const [tags, setTags] = React.useState([]);
    const [filter, setFilter] = React.useState("")
    const [categories, setCategories] = React.useState(["Chicken", "Drinks", "Sodas", "Monkeys", "Pussies"])

    React.useEffect(() => {
        setTags(_tags)
        return () => {
            //
        }
    }, [_tags])

    const filterCatList = (event) => {
        setFilter(event.target.value) 
    }

    const addTags = (value) => {  
        
        if(tags.includes(value)){
            return 
        }
       setTags([...tags, value])
       setFilter("")
    }

    const RemoveTags = (valueIndex) => {
        setTags(tags.filter((_, index) => index !== valueIndex ))
    }

    return (
        <div>
            <div className="p-tags-input">
                <ul>
                    {
                        tags.map((tag, indx) => {
                            return (
                                <li key={indx}>
                                    <span>{tag}</span>
                                    <Unicon.UilTimes onClick={() => RemoveTags(indx)} />
                                </li>
                            )
                        })
                    }
                    <li>
                        <input type="text" value={filter} placeholder="Search category..." onChange={filterCatList} />
                    </li>
                </ul>
            </div>
           {
                filter !== ""? <div className="tags-cat-list">
                    <ul>
                        {
                            categories.filter((cat) => cat.toLowerCase().includes(filter.toLowerCase())).map((cat, indx) => {
                                return (
                                    <li key={indx} onClick={() => addTags(cat)}>
                                        <span>{cat}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>:null
            }
        </div>
    )
}
