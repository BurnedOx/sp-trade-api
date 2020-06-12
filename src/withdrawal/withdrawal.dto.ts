import { IsNumber, Min, Max } from "class-validator";

export class WithdrawalDTO {
    @IsNumber()
    @Min(500)
    @Max(1000)
    withdrawAmount: number;
}