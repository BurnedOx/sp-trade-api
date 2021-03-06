import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { AccountsModule } from './accounts/accounts.module';
import { CommonModule } from './common/common.module';
import { EpinModule } from './epin/epin.module';
import { MembersModule } from './members/members.module';
import { IncomeModule } from './income/income.module';
import { RoiModule } from './roi/roi.module';
import { RankModule } from './rank/rank.module';
import { WithdrawalModule } from './withdrawal/withdrawal.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ScheduleModule.forRoot(),
    AccountsModule, CommonModule, EpinModule, MembersModule, IncomeModule, RoiModule, RankModule, WithdrawalModule, TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
