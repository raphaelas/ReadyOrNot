import { Controller, Get, Req, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CatEntity } from './cat.entity';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post('create')
    async create(@Body() catData: CatEntity): Promise<any> {
        return this.catsService.createReadyOrNot(catData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() catData: CatEntity): Promise<any> {
        catData.id = Number(id);
        console.log('Update #', + catData.id)
        return this.catsService.update(catData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.catsService.delete(id);
    }

    @Post()
    async createCat(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    index(): Promise<CatEntity[]> {
        return this.catsService.findAllReadyOrNots();
    }

    @Get('list')
    findAll(): Cat[] {
        return this.catsService.findAll();
    }
}
