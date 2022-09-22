import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [ CloudinaryModule ],
  controllers: [ FileController ],
  providers: [ FileService ]
})
export class FileModule {}
