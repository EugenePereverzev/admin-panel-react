import './Cell.css';

export default function Cell (props) {
    return (
        <div className="cell" key={props.key} onClick={props.onClick} {...props.style}>{props.label}</div>
    );
}