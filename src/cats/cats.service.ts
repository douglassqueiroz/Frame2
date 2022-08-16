import { Injectable } from '@nestjs/common';
import { UpdateCatDto} from 'src/dto/cats.dto';
@Injectable()
export class CatsService {
    private readonly cats:UpdateCatDto[] = [];
    
    create(cat:UpdateCatDto) {
        this.cats.push(cat);
}

    findAll():UpdateCatDto[] {
        return this.cats;
    }
}
