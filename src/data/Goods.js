export const goods = [
    {
        id: "2001",
        article: "cf.122300",
        name: "Сапоги женсие (модные)",
        price: 25100,
    },
    {
        id: "2003",
        article: "cf.120023",
        name: "Сапоги женсие (немодные)",
        price: 10239.45,
    },
    {
        id: "2004",
        article: "cm.65037",
        name: "Куртка мужская кожаная (отпад)",
        price: 21045.77,
    },
    {
        id: "2005",
        article: "cm.60357",
        name: "Куртка мужская кожаная (треш)",
        price: 12504.13,
    },
    {
        id: "2007",
        article: "cm.73945",
        name: "Брюки мужские (зимние)",
        price: 8048.03,
    },
    {
        id: "2008",
        article: "cm.75856",
        name: "Брюки мужские (летние)",
        price: 6700,
    },
    {
        id: "2010",
        article: "cf.120369",
        name: "Туфли женские (модель 2017 года)",
        price: 12034.82,
    },
    {
        id: "2011",
        article: "cf.121034",
        name: "Туфли женские (модель 2021 года)",
        price: 19990,
    },
    {
        id: "2013",
        article: "cf.121245",
        name: "Платье летнее",
        price: 13052.67,
    },
    {
        id: "2014",
        article: "cf.121034",
        name: "Блузка белая",
        price: 6999.99,
    },
    {
        id: "2015",
        article: "cf.121425",
        name: "Плащ женский",
        price: 28350,
    },
    {
        id: "2017",
        article: "cm.74857",
        name: "Туфли мужские",
        price: 6520,
    },
    {
        id: "2018",
        article: "cm.74862",
        name: "Сорочка мужская (белая)",
        price: 4500,
    },
];

export const goodIndex = goods.reduce ((list, good, index) => {
    list[good.id] = index;
    return list;
    }
    , {});

export const getGood = (id) => {
    return (
        (id in goodIndex) ?
        goods[goodIndex[id]] :
        null
        );
};  

export const setGood = (good) => {
    const { id, ...data } = good;
    const item = getGood (id);
    if (item) {
        goods[goodIndex[id]] = {
                ...item,
                ...data
                };
    }
};

export const updateGood = (good) => {
    if (good.id in goodIndex) {
        setGood (good);
    } else {
        goodIndex[good.id] = goods.push (good) - 1;
    }
    return goodIndex[good.id];
};