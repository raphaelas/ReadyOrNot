import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from './cat.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(CatEntity)
        private catRepository: Repository<CatEntity>
    ) { }
    private readonly cats: Cat[] = [{'name': 'Tiger', 'age': 8, 'breed': 'Tabby'}];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    async findAllReadyOrNots(): Promise<CatEntity[]> {
        return await this.catRepository.find();
    }

    async createReadyOrNot(cat: CatEntity): Promise<CatEntity> {
        return await this.catRepository.save(cat);
    }

    async update(cat: CatEntity): Promise<UpdateResult> {
        return await this.catRepository.update(cat.id, cat);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.catRepository.delete(id);
    }
}
