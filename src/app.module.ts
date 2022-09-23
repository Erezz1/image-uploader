import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { JoiValidationSchema } from './config';
import { FileModule } from './file/file.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join( __dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema
    }),
    FileModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
