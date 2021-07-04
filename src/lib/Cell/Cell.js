import style from './Cell.module.css';

export default function Cell (props) {
    return (
        <div className={style._} onClick={props.onClick} {...props.style}>{props.label}</div>
    );
}