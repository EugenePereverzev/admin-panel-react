import Input from '../../lib/Input/Input';
import style from './Range.module.css';

function Range (props) {

    const values = props.values ?? {};
    const handlerValueSubmit = (value) => props.onSubmit && props.onSubmit ({ [props.field]: {...values, ...value} });
    const handlerValueClear = (field) => {
        const { [field]: cleared, ...newValues } = values;
        props.onSubmit && props.onSubmit ({ [props.field]: newValues });
    }

    return (
        <div className={style._}>
            <div className={style.label}>{props.label}</div>
            <div className={style.values}>
                <Input 
                    field="from"
                    value={values["from"] ?? props.startValue}
                    label={props.startLabel} 
                    placeHolder={props.startPlaceHolder ?? props.placeHolder} 
                    pattern={props.startPattern ?? props.pattern} 
                    onSubmit={handlerValueSubmit}
                    onClear={handlerValueClear}
                    convertIn={props.convertIn}
                    convertOut={props.convertOut}
                    style={{width: "10rem"}}/>
                <Input 
                    field="to"
                    value={values["to"] ?? props.endValue}
                    label={props.endLabel} 
                    placeHolder={props.endPlaceHolder ?? props.placeHolder} 
                    pattern={props.endPattern ?? props.pattern} 
                    onSubmit={handlerValueSubmit} 
                    onClear={handlerValueClear}
                    convertIn={props.convertIn}
                    convertOut={props.convertOut}
                    style={{width: "10rem"}}/>
            </div>
        </div>
    );
};

export default Range;