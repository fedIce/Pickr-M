import { firestore } from '../../assets/fireconfig'

const type = 'daily';
const restaurant_id = 'ctF0qA85bOU8cfDdpxknB2TgXnF2~2021-07-16T15:48';

const PORT = 5000;
const SERVER_URL = `http://localhost:${PORT}`;

class Menus {
    constructor(id="", title={}, category_ids=[], description={}, available=false, items = [], service_availability=[], restaurant_info={}, image_url=[]){
        this.id = id;
        this.title = title;
        this.category_ids = category_ids;
        this.description = description;
        this.available = available;
        this.items = items;
        this.service_availability = service_availability;
        this.restaurant_info = restaurant_info;
        this.image_url = image_url;
    }

    loadMenus(){
        return new Promise( async (resolve, reject) => {
            return await fetch(`${SERVER_URL}/api/user/restaurant/menu/list`, {
                method: 'POST',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify({
                    restaurant_type: type,
                    restaurant_id: restaurant_id
                })
            }).then( async response  => {
                const res = await response.json()
                resolve( JSON.parse(res) )
            }).catch(err => {
                this.loggedIn = false;
                reject( err.message )
            })   
        })
    }
}

export {
    Menus
}