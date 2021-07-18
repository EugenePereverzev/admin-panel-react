import { ICON_CHECKMARK } from "../Icons/Icons";
import style from './Checkbox.module.css';
import cc from 'classcat';

function Checkbox (props) {
    const classString = cc ({
        [style._] : true,
        [style.checked] : props.checked,
        [style.disabled] : props.disabled,
    });

    return (
        <div className={classString} onClick={props.onClick}>
            <svg className={style.icon}><use href={props.checked?ICON_CHECKMARK:""}/></svg>
            {props.label && <div className={style.label}>{props.label}</div>}
        </div>
    )
}

export default Checkbox;