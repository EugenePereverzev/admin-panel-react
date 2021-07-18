import { getGood } from './goods';
import { getPerson } from './persons';

export const ORDER_STATUS_NEW = "Новый";
export const ORDER_STATUS_CALC = "Рассчёт";
export const ORDER_STATUS_DONE = "Выполнен";
export const ORDER_STATUS_CANCEL = "Отменён";
export const ORDER_STATUS_DELAY = "Отложен";

export const orders = [
    {
        id: "1548679",
        makeDate: new Date (2020, 0, 11, 10, 12, 46),
        status: ORDER_STATUS_DONE,
        bayer: "1001",
        goods: [
            { 
                id: "2005",
                quantity: 1,
                discount: 0,
            },
            { 
                id: "2008",
                quantity: 2,
                discount: 0,
            },
        ],
    },
    {
        id: "1576826",
        makeDate: new Date (2020, 1, 7, 13, 56, 34),
        status: ORDER_STATUS_DONE,
        bayer: "1003",
        goods: [
            { 
                id: "2004",
                quantity: 1,
                discount: 0,
            },
            { 
                id: "2008",
                quantity: 1,
                discount: 0,
            },
            { 
                id: "2017",
                quantity: 1,
                discount: 0,
            },
        ],
    },
    {
        id: "1597456",
        makeDate: new Date (2020, 1, 22, 16, 25, 49),
        status: ORDER_STATUS_CANCEL,
        bayer: "1007",
        goods: [
            { 
                id: "2014",
                quantity: 3,
                discount: 0.2,
            },
            { 
                id: "2013",
                quantity: 1,
                discount: 0.3,
            },
            { 
                id: "2015",
                quantity: 1,
                discount: 0.3,
            },
        ],
    },
    {
        id: "1608236",
        makeDate: new Date (2020, 2, 3, 9, 58, 2),
        status: ORDER_STATUS_DELAY,
        bayer: "1007",
        goods: [
            { 
                id: "2014",
                quantity: 2,
                discount: 0.2,
            },
            { 
                id: "2013",
                quantity: 1,
                discount: 0.3,
            },
            { 
                id: "2015",
                quantity: 1,
                discount: 0.3,
            },
            { 
                id: "2011",
                quantity: 1,
                discount: 0.3,
            },
        ],
    },
    {
        id: "1653765",
        makeDate: new Date (2020, 2, 10, 12, 5, 29),
        status: ORDER_STATUS_DONE,
        bayer: "1008",
        goods: [
            { 
                id: "2013",
                quantity: 2,
                discount: 0,
            },
            { 
                id: "2010",
                quantity: 2,
                discount: 0,
            },
        ],
    },
    {
        id: "1678532",
        makeDate: new Date (2020, 2, 17, 16, 42, 58),
        status: ORDER_STATUS_DONE,
        bayer: "1012",
        goods: [
            { 
                id: "2001",
                quantity: 2,
                discount: 0.1,
            },
            { 
                id: "2003",
                quantity: 1,
                discount: 0.1,
            },
            { 
                id: "2010",
                quantity: 1,
                discount: 0.1,
            },
            { 
                id: "2011",
                quantity: 2,
                discount: 0.1,
            },
        ],
    },
    {
        id: "1700823",
        makeDate: new Date (2020, 2, 22, 18, 21, 18),
        status: ORDER_STATUS_CANCEL,
        bayer: "1013",
        goods: [],
    },
    {
        id: "1708746",
        makeDate: new Date (2020, 2, 24, 14, 32, 49),
        status: ORDER_STATUS_DONE,
        bayer: "1014",
        goods: [
            { 
                id: "2001",
                quantity: 1,
                discount: 0.3,
            },
            { 
                id: "2004",
                quantity: 1,
                discount: 0.3,
            },
            { 
                id: "2007",
                quantity: 1,
                discount: 0.3,
            },
            { 
                id: "2008",
                quantity: 2,
                discount: 0.3,
            },
            { 
                id: "2017",
                quantity: 1,
                discount: 0.3,
            },
             { 
                id: "2018",
                quantity: 2,
                discount: 0.3,
            },
       ],
    },
    {
        id: "1723974",
        makeDate: new Date (2020, 3, 1, 11, 19, 5),
        status: ORDER_STATUS_CALC,
        bayer: "1017",
        goods: [
            { 
                id: "2018",
                quantity: 3,
                discount: 0,
            },
            { 
                id: "2017",
                quantity: 1,
                discount: 0,
            },
        ],
    },
    {
        id: "1773694",
        makeDate: new Date (2020, 3, 21, 13, 21, 42),
        status: ORDER_STATUS_CANCEL,
        bayer: "1023",
        goods: [],
    },
    {
        id: "1777333",
        makeDate: new Date (2020, 3, 30, 15, 32, 52),
        status: ORDER_STATUS_NEW,
        bayer: "1025",
        goods: [
            { 
                id: "2001",
                quantity: 1,
                discount: 0,
            },
        ],
    },
    {
        id: "1786532",
        makeDate: new Date (2020, 4, 5, 10, 5, 21),
        status: ORDER_STATUS_CALC,
        bayer: "1014",
        goods: [
            { 
                id: "2001",
                quantity: 2,
                discount: 0.3,
            },
            { 
                id: "2011",
                quantity: 2,
                discount: 0.3,
            },
        ],
    },
    {
        id: "1790486",
        makeDate: new Date (2020, 4, 10, 14, 30, 47),
        status: ORDER_STATUS_CALC,
        bayer: "1023",
        goods: [
            { 
                id: "2018",
                quantity: 3,
                discount: 0,
            },
        ],
    },
    {
        id: "1810975",
        makeDate: new Date (2020, 4, 17, 11, 48, 31),
        status: ORDER_STATUS_DONE,
        bayer: "1013",
        goods: [
            { 
                id: "2015",
                quantity: 1,
                discount: 0,
            },
        ],
    },
    {
        id: "1811687",
        makeDate: new Date (2020, 4, 19, 12, 42, 24),
        status: ORDER_STATUS_CANCEL,
        bayer: "1012",
        goods: [
            { 
                id: "2014",
                quantity: 1,
                discount: 0,
            },
        ],
    },
    {
        id: "1818818",
        makeDate: new Date (2020, 4, 20, 17, 18, 24),
        status: ORDER_STATUS_NEW,
        bayer: "1012",
        goods: [
            { 
                id: "2013",
                quantity: 1,
                discount: 0.1,
            },
            { 
                id: "2011",
                quantity: 1,
                discount: 0.1,
            },
        ],
    },
]; 

export const orderIndex = orders.reduce (
    (list, { id }, index) => {
        list[id] = index;
        return list;
    }
    , {}
);

export const getOrder = (id) => {
    return (
        (id in orderIndex) ?
        orders[orderIndex[id]] :
        null
    );
};  

export const setOrder = (order) => {
    const { id, ...data } = order;
    const item = getOrder (id);
    if (item) {
        orders[orderIndex[id]] = {
                ...item,
                ...data
        }
    }
};

export const updateOrder = (order) => {
    if (order.id in orderIndex) {
        setOrder (order);
    } else {
        orderIndex[order.id] = orders.push (order) - 1;
    }
    return orderIndex[order.id];
};

export const getFullOrderData = (orderId) => {
    const {id, makeDate, status, bayer: bayerId, goods} = getOrder (orderId);
    const {name: bayer} = getPerson (bayerId);
    return {
        id,
        date: makeDate,
        status,
        bayer,
        count: goods.length,
        summa: goods.reduce (
                            (sum, {id: goodId, quantity, discount}) => {
                                const { price } = getGood (goodId);
                                return sum =+ (quantity * price * (1 - discount))
                            }
                            , 0
                            )
    };
}