import { RankData } from "src/interfaces";

export const levelIncomeAmount = {
    1: 50,
    2: 20,
    3: 10,
    4: 5,
    5: 5
};

export const Ranks: RankData[] = [
    {
        type: 'BRONZE',
        direct: 1,
        company: 50,
        income: 25,
        validity: 30,
    },
    {
        type: 'SILVER',
        direct: 1,
        company: 150,
        income: 30,
        validity: 30,
    },
    {
        type: 'GOLD',
        direct: 2,
        company: 250,
        income: 35,
        validity: 40,
    },
    {
        type: 'PLATINUM',
        direct: 2,
        company: 500,
        income: 40,
        validity: 40,
    },
    {
        type: 'EMERALD',
        direct: 3,
        company: 800,
        income: 45,
        validity: 50,
    },
    {
        type: 'RUBY',
        direct: 2,
        company: 1000,
        income: 50,
        validity: 40,
    },
    {
        type: 'PEARL',
        direct: 5,
        company: 2500,
        income: 100,
        validity: 30,
    },
    {
        type: "DIAMOND",
        direct: 6,
        company: 4000,
        income: 105,
        validity: 40,
    },
    {
        type: 'WHITE DIAMOND',
        direct: 7,
        company: 7000,
        income: 150,
        validity: 30,
    },
    {
        type: 'BLACK DIAMOND',
        direct: 10,
        company: 15000,
        income: 200,
        validity: 25,
    },
    {
        type: 'BLUE DIAMOND',
        direct: 15,
        company: 25000,
        income: 300,
        validity: 30,
    },
    {
        type: 'CORPORATE',
        direct: 20,
        company: 50000,
        income: 400,
        validity: 40,
    },
    {
        type: 'AMBASSADOR',
        direct: 20,
        company: 100000,
        income: 500,
        validity: 40,
    },
    {
        type: 'EMPOWER',
        direct: 20,
        company: 200000,
        income: 500,
        validity: 50,
    },
    {
        type: 'CROWN',
        direct: 50,
        company: 500000,
        income: 1000,
        validity: 60,
    },
];