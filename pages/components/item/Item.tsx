import {SyntheticEvent, useState} from "react";
import classNames from 'classnames';
import {FolderT} from "../../../type";
import styles from './Item.module.css'

type ItemT = FolderT & {
    setSelectedItem: Function
}

export const Item = ({caption, child, setSelectedItem}: ItemT) => {
    const [isOpen, setIsOpen] = useState(false)
    const handler = (event: SyntheticEvent) => {
        event.stopPropagation()
        setSelectedItem(caption)
        setIsOpen(prev => !prev)
    }

    return <div onClick={handler} className={styles.item}>
        <div className={styles.item__inner}>
            {child && <img
                className={classNames(styles.item__chevron, !isOpen ? styles.item__closedChevron : '')}
                src={'chevron.png'}/>}
            <img className={styles.item__image} src={`/${child ? 'folder' : 'file'}.png`}/>
            <p>{caption}</p>
        </div>
        {child && isOpen && <div className={styles.item__child}>
            {child.map(data => <Item {...data} setSelectedItem={setSelectedItem}/>)}
        </div>}
    </div>
}