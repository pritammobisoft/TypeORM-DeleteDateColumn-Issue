import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @DeleteDateColumn()
    @Column({ name: 'deleted_at', nullable: true })
    public deletedAt?: Date

    @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
    @Column({ name: 'created_at' })
    public createdAt!: Date

    @UpdateDateColumn({ type: 'timestamp', onUpdate: 'NOW()' })
    @Column({ name: 'updated_at' })
    public updatedAt!: Date

}