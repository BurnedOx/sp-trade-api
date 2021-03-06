export interface BankDetails {
    accountName: string;
    bankName: string;
    accountNumber: number;
    isfc: string;
    accountType: string;
}

export interface UserRO {
    id: string;
    name: string;
    mobile: number;
    sponsoredBy: Pick<UserRO, 'id' | 'name'> | null;
    epinId: string | null;
    bankDetails: BankDetails | null;
    panNumber: string | null;
    roll: 'user' | 'admin';
    status: 'active' | 'inactive';
    activatedAt: Date | null;
    updatedAt: Date;
    createdAt: Date;
    token?: string;
}

export interface UserDetailsRO {
    wallet: number;
    rank: RankName | null;
    direct: number;
    downline: number;
    singleLeg: number;
    levelIncome: number;
    ROI: number;
    totalWithdrawal: number;
    totalIncome: number;
}

export interface MemberRO {
    id: string;
    name: string;
    level: number;
    status: 'active' | 'inactive';
    activatedAt: Date | null;
    createdAt: Date;
}

export interface SingleLegMemberRO {
    id: string;
    name: string;
    activatedAt: Date | null;
}

export interface EpinRO {
    id: string;
    owner: Pick<UserRO, 'id' | 'name'> | null;
    updatedAt: Date;
    createdAt: Date;
}

export interface IncomeRO {
    id: string;
    ownerId: string;
    from: Pick<UserRO, 'id' | 'name'>;
    level: number;
    amount: number;
    currentBalance: number;
    createdAt: Date;
}

export interface RoiRO {
    id: string;
    credit: number;
    currentBalance: number;
    rank: RankName;
    updatedAt: Date;
    createdAt: Date;
}

export interface WithdrawalRO extends BankDetails {
    id: string;
    withdrawAmount: number;
    netAmount: number;
    processedAt: Date | null;
    paymentType: string;
    status: 'paid' | 'unpaid' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

export type RankName = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'EMERALD' | 'RUBY' | 'PEARL' | 'DIAMOND' | 'WHITE DIAMOND' | 'BLACK DIAMOND' | 'BLUE DIAMOND' | 'CORPORATE' | 'AMBASSADOR' | 'EMPOWER' | 'CROWN';

export interface RankData {
    type: RankName;
    direct: number;
    company: number;
    income: number;
    validity: number;
}

export interface TransactionRO {
    credit?: number;
    debit?: number;
    currentBalance: number;
    remarks: string;
    createdAt: Date;
}