import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    teeth: boolean;

    @Column()
    hair: boolean;

    @Column()
    face: boolean;

    @Column()
    body: boolean;

    @Column()
    nails: boolean;
}
