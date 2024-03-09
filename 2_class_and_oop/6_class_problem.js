const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2004,
    },
    {
        name: '이서',
        year: 2007,
    },
]

const btsMembers = [
    {
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: 'RM',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    },
    {
        name: '정국',
        year: 1997,
    },
]



class Country{
    name;
    idolGroup;

    constructor(name,idolGroup){
        this.name = name;
        this.idolGroup = idolGroup;
    }
}

class idolGroup {
    name;
    members;

    constructor(name,members){
        this.name = name;
        this.members = members;
    }
}
class Idol {
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
class FemaleIdol extends Idol{
    sing(){
        return `${this.name}이 노래를 합니다.`;
    }
}
class MaleIdol extends Idol{
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const cIveMembers = iveMembers.map(
    (x)=> new FemaleIdol(x['name'],x['year'])
);

console.log(cIveMembers);
console.log('------------------------------------------------');

const cBtsMembers = btsMembers.map(
    (x)=> new MaleIdol(x['name'],x['year'])
);

console.log(cBtsMembers);

const iveGroup = new idolGroup(
    '아이브',
    cIveMembers
);
console.log(iveGroup);

const btsGroup = new idolGroup(
    'BTS',
    btsMembers
);
console.log(btsGroup);

const korea = new Country(
    '대한민국',
    [
        iveGroup,
        btsGroup
    ]
);
console.log(korea);

// 밑에 처럼 한번에 할 수도 있음!!
const allTogether = new Country(
    '대한민국',
    [
        new idolGroup(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'],x['year'])
            )
        ),
        new idolGroup(
            '방탄소년단',
            btsMembers.map(
                (x) => new MaleIdol(x['name'], x['year'])
            )
        )
    ]
)

console.log(allTogether);



