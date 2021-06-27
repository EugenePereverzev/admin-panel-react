import './Cell.css';

export default function Cell (props) {
    return (
        <div className="cell" onClick={props.onClick} {...props.style}>{props.label}</div>
    );
}