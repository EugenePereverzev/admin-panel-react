import './Header.css';

export default function Header (props) {
    return (
        <div className="header">
            <div className="header-title">{props.title}</div>
            {props.children}
        </div>
    )
}