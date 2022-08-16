import { Injectable } from '@nestjs/common';
import { UpdateDogDto} from 'src/dto/dogs.dto';
@Injectable()
export class DogsService {
    private readonly cats:UpdateDogDto[] = [];
    
    create(cat:UpdateDogDto) {
        this.cats.push(cat);
}

    findAll():UpdateDogDto[] {
        return this.cats;
    }
}
