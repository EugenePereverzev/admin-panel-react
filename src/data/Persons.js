export const PERSON_LOYALTY_NEW = "Новичёк";
export const PERSON_LOYALTY_REGULAR = "Постоянный";
export const PERSON_LOYALTY_PRIVELEGE = "Привилегированный";
export const PERSON_LOYALTY_VIP = "VIP";

export const PERSON_SEX_MALE = "М";
export const PERSON_SEX_FEMALE = "Ж";

export const persons = [
    {
        id: "1001",
        name: "Чернышев Филипп Семёнович",
        birthday: new Date(1986,10,16),
        sex: PERSON_SEX_MALE,
        loyalty: PERSON_LOYALTY_REGULAR,
    },
    {
        id: "1003",
        name: "Филиппов Степан Васильевич",
        birthday: new Date(1976,2,12),
        sex: PERSON_SEX_MALE,
        loyalty: PERSON_LOYALTY_PRIVELEGE,
    },
    {
        id: "1007",
        name: "Тихонова Алина Давидовна",
        birthday: new Date(1993,0,24),
        sex: PERSON_SEX_FEMALE,
        loyalty: PERSON_LOYALTY_VIP,
    },
    {
        id: "1008",
        name: "Александрова Юлия Никитична",
        birthday: new Date(2001,4,1),
        sex: PERSON_SEX_FEMALE,
        loyalty: PERSON_LOYALTY_REGULAR,
    },
    {
        id: "1012",
        name: "Судакова Анастасия Ильинична",
        birthday: new Date(1984,6,21),
        sex: PERSON_SEX_FEMALE,
        loyalty: PERSON_LOYALTY_PRIVELEGE,
    },
    {
        id: "1013",
        name: "Зверева Арина Николаевна",
        birthday: new Date(1988,8,8),
        sex: PERSON_SEX_FEMALE,
        loyalty: PERSON_LOYALTY_PRIVELEGE,
    },
    {
        id: "1014",
        name: "Карташов Максим Кириллович",
        birthday: new Date(1979,1,23),
        sex: PERSON_SEX_MALE,
        loyalty: PERSON_LOYALTY_VIP,
    },
    {
        id: "1017",
        name: "Васильев Вадим Даниилович",
        birthday: new Date(1967,11,5),
        sex: PERSON_SEX_MALE,
        loyalty: PERSON_LOYALTY_REGULAR,
    },
    {
        id: "1023",
        name: "Андрей",
        birthday: new Date(1995,7,3),
        sex: PERSON_SEX_MALE,
        loyalty: PERSON_LOYALTY_NEW,
    },
    {
        id: "1025",
        name: "Софья",
        birthday: new Date(1989,6,15),
        sex: PERSON_SEX_FEMALE,
        loyalty: PERSON_LOYALTY_NEW,
    },
];

export const personIndex = persons.reduce ((list, person, index) => {
    list[person.id] = index;
    return list;
    }
    , {});

export const getPerson = (id) => {
    return (
        (id in personIndex) ?
        persons[personIndex[id]] :
        null
        );
};    

export const setPerson = (person) => {
    const { id, ...data } = person;
    const item = getPerson (id);
    if (item) {
        persons[personIndex[id]] = {
                ...item,
                ...data
                }
    }
};

export const updatePerson = (person) => {
    if (person.id in personIndex) {
        setPerson (person);
    } else {
        personIndex[person.id] = persons.push (person) - 1;
    }
    return personIndex[person.id];
};