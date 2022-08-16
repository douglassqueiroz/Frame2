import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateCatDto} from 'src/dto/cats.dto';
@Controller('cats')
export class CatsController {
    @Get()
    findAll():string{
        return 'I is not cat';
    }
    @Post()
    create(): string{
        return 'Add new cat';
    }
    @Get(':id')
    findOne(@Param('id') id: string): string{
        return 'Para adicionar um cat #${id}';
    }
    @Put(':id')
    update(@Param('id') id: string, @Body()updateCatDto: UpdateCatDto){
    return 'Add update #${id}';
    }
    @Delete(':id')
    remove(@Param('id') id: string): string{
        return 'Para ação de remover #${id}';
    }
}