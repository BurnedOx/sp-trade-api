import { CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryColumn, BeforeInsert } from "typeorm";
import { generateId } from "src/common/utils/generateId";

export class Base extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    createId() {
        this.id = generateId();
    }
}