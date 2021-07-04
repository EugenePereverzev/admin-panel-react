import style from './TableHeader.module.css';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Button from '../../lib/Button/Button';
import { ICON_V_ARROW } from '../../lib/Icons/Icons';

export default function TableHeader (props) {       
    return (
        <div className={style._}>
            <Checkbox onClick={props.onAllCheckClick}/>
            {props.columns.map (
                ({ id, label, flex, name}) => (
                    <Button key={id} label={label} onClick={props.onHeaderClick(name)} 
                            icon={(name === props.sort ? ICON_V_ARROW : "#")} 
                            style={{style: {flexDirection:"row-reverse", justifyContent: "flex-end", flex, marginRight: "0.5rem", color: "var(--control-back-color)"}}}/>
                )
            )}
        </div>
    )
}