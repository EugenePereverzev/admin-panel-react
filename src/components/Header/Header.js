// import '../../index.css';
// import '../../font.css';
import './Header.css';


export default function Header (props) {

    console.log (props);

    return (
        <div className="header">
            <div className="header-title">{props.title}</div>
            {props.children}
        </div>
    )
}