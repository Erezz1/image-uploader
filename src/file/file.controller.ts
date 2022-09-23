import { Controller, Get, Post, UploadedFile, Param, Delete, UseInterceptors } from '@nestjs/common';
import { FileInterceptor }  from '@nestjs/platform-express';

import { FileService } from './file.service';
import { FileValidationPipe } from './pipes';
import { validFiles, maxMB } from './constants';

@Controller('file')
export class FileController {
  constructor( private readonly fileService: FileService ) {}

  @Post()
  @UseInterceptors( FileInterceptor('file') )
  uploadImage(
    @UploadedFile(
      new FileValidationPipe({ validFiles: validFiles.images, maxMB })
    ) file: Express.Multer.File
  ) {
    return this.fileService.uploadImage( file );
  }

  @Get(':file_id')
  findImage( @Param('file_id') file_id: string ) {
    return this.fileService.findImage( file_id );
  }

  @Delete(':file_id')
  removeImage( @Param('file_id') file_id: string ) {
    return this.fileService.removeImage( file_id );
  }
}
