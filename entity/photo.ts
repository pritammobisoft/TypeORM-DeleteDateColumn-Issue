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

    @CreateDateColumn({ type: 'timestamp' })
    @Column({ name: 'created_at' })
    public createdAt!: Date

    @UpdateDateColumn({ type: 'timestamp' })
    @Column({ name: 'updated_at' })
    public updatedAt!: Date

}