import Button from "../../lib/Button/Button";
import { ORDER_STATUS_CALC, ORDER_STATUS_CANCEL, ORDER_STATUS_DELAY, ORDER_STATUS_DONE, ORDER_STATUS_NEW } from '../../data/orders';
import { ICON_ABORT, ICON_CHECKMARK, ICON_DOT} from '../../lib/Icons/Icons';

const childValueProps = {
    [ORDER_STATUS_CALC]: {icon: ICON_DOT, style: {color: "#459DF5"}},
    [ORDER_STATUS_CANCEL]: {icon: ICON_ABORT, style: {color: "#00000080"}}, //"#F53152"
    [ORDER_STATUS_DELAY]: {icon: ICON_DOT, style: {color: "#FF8C56"}},
    [ORDER_STATUS_DONE]: {icon: ICON_CHECKMARK, style: {color: "#0FB864"}},
    [ORDER_STATUS_NEW]: {icon: ICON_DOT, style: {color: "#FF8C56"}},
}

const valueStyles = {
    [ORDER_STATUS_CALC]: {color: "#000000"},
    [ORDER_STATUS_CANCEL]: {color: "#00000080"},
    [ORDER_STATUS_DELAY]: {color: "#000000"},
    [ORDER_STATUS_DONE]: {color: "#0FB864"},
    [ORDER_STATUS_NEW]: {color: "#000000"},
}

export const defColumns = [
    {   id: 1,
        field: "id",
        label: "#",
        format: (value) => value,
        style: {
            flex: "2",
            justifyContent: "flex-start",
            }
    },
    {   id: 2,
        field: "date",
        label: "Дата",
        format: (value) => value.toLocaleDateString("ru-RU", {year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour:'2-digit', minute:'2-digit', second:'2-digit'}),
        style: {
            flex: "4",
            justifyContent: "flex-start",
            }
    },
    {   id: 3,
        field: "status",
        label: "Статус",
        format: (value) => value,
        style: {
            flex: "2",
            justifyContent: "flex-start",
            },
        valueStyle: (value) => valueStyles[value],   
        children: (value) => <Button {...childValueProps[value]}/>    
    },
    {   id: 4,
        field: "count",
        label: "Позиций",
        format: (value) => value,
        style: {
            flex: "2",
            justifyContent: "center",
            }
    },
    {   id: 5,
        field: "summa",
        label: "Сумма",
        format: (value) => new Intl.NumberFormat("ru-RU", {style: 'currency', currency: 'RUB'}).format(value),
        style: {
            flex: "3",
            justifyContent: "flex-end",
            marginRight: "1rem",
            }
    },
    {   id: 6,
        field: "bayer",
        label: "ФИО покупателя",
        format: (value) => value,
        style: {
            flex: "9",
            justifyContent: "flex-start",
            }
    }
];