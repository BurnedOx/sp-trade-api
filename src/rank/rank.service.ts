import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rank } from 'src/database/entity/rank.entity';
import { Repository, EntityManager, Not, IsNull } from 'typeorm';
import { User } from 'src/database/entity/user.entity';
import { Ranks } from 'src/common/costraints';

@Injectable()
export class RankService {
    constructor(
        @InjectRepository(Rank)
        private readonly rankRepo: Repository<Rank>,

        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) {}

    private async totalSingleLeg(user: User) {
        if (user.activatedAt === null) return 0;
        const members = await this.userRepo.find({ where: { activatedAt: Not(IsNull()) } });
        return members.filter(m => m.activatedAt.getTime() > user.activatedAt.getTime()).length;
    }

    private async getDirectMembersForRank(user: User) {
        return await this.userRepo.find({
            where: {
                sponsoredBy: user,
                generatedRank: IsNull()
            },
            relations: ['sponsoredBy', 'generatedRank']
        });
    }

    private getRank(singleLegCount: number, directCount: number) {
        for (let i = 0; i < Ranks.length; i++) {
            if (directCount === Ranks[i].direct
                && singleLegCount >= Ranks[i].company
                && (i === Ranks.length - 1 || singleLegCount < Ranks[i + 1]?.company)) {
                return { ...Ranks[i] };
            }
        }
    }

    async generateRanks(trx: EntityManager) {
        const allUsers = await this.userRepo.find({ where: { activatedAt: Not(IsNull()) } });
        for (let user of allUsers) {
            const singleLeg = await this.totalSingleLeg(user);
            const direct = await this.getDirectMembersForRank(user);
            const existingRanks = await this.rankRepo.find({ where: { owner: user }, relations: ['owner'] });
            const existingRankNames = existingRanks.map(r => r.rank);
            const rank = this.getRank(singleLeg, direct.length);
            if (rank && !(existingRankNames.includes(rank.type))) {
                const newRank = this.rankRepo.create({
                    rank: rank.type,
                    owner: user, direct
                });
                await trx.save(newRank);
            }
        }
    }
}
