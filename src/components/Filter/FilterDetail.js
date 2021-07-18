import style from './FilterDetail.module.css';

export default function FilterDetail (props) {
    return (
        <div className={style._}>
            {props.children}
        </div>
    )
}