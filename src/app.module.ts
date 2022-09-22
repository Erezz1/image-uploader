import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { JoiValidationSchema } from './config';
import { FileModule } from './file/file.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema
    }),
    FileModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
