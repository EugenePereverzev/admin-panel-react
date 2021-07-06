import style from './Header.module.css';

export default function Header (props) {
    return (
        <div className={style._} style={props.style}>
            <div className={style.title}>{props.title}</div>
            {props.children}
        </div>
    )
}