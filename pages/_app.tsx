import {useEffect, useState} from "react";
import {Item} from './components'
import '../styles/globals.css'

function MyApp() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        fetch('/api/data')
            .then(data => data.json())
            .then(data => {
                setIsLoading(false)
                setData(data)
            })
    }, [])

    return <div className="app">
        {isLoading ? <p>Загрузка</p> : data
            ? <Item {...data} setSelectedItem={setSelectedItem}/>
            : <p>Ошибка загрузки</p>}
        <hr className="line"/>
        {selectedItem && <p className="selected-item">{selectedItem}</p>}
    </div>
}

export default MyApp
