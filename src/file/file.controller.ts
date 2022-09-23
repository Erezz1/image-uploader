import { Controller, Get, Post, UploadedFile, Param, Delete, UseInterceptors } from '@nestjs/common';
import { FileInterceptor }  from '@nestjs/platform-express';
import { ApiTags, ApiResponse, ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';

import { FileService } from './file.service';
import { FileValidationPipe } from './pipes';
import { validFiles, maxMB } from './constants';
import { UploadImageResponse } from './models';
import { FileUploadDto } from './dto';

@ApiTags('File')
@Controller('file')
export class FileController {
  constructor( private readonly fileService: FileService ) {}

  @Post()
  @UseInterceptors( FileInterceptor('file') )
  @ApiResponse({ status: 201, description: 'La imagen fue creado', type: UploadImageResponse })
  @ApiResponse({ status: 400, description: 'No hay imagen en el body de la peticion' })
  @ApiResponse({ status: 413, description: `La imagen supera el limite de ${ maxMB }MB` })
  @ApiResponse({ status: 415, description: 'La imagen tiene una extension no valida' })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Archivo a subir',
    type: FileUploadDto,
  })
  uploadImage(
    @UploadedFile(
      new FileValidationPipe({ validFiles: validFiles.images, maxMB })
    ) file: Express.Multer.File
  ): Promise<UploadImageResponse> {
    return this.fileService.uploadImage( file );
  }

  @Get(':file_id')
  @ApiResponse({ status: 200, description: 'Imagen encontrada', type: UploadImageResponse })
  @ApiResponse({ status: 404, description: 'Imagen no encontrada' })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  @ApiParam({ name: 'file_id', example: 'skq240icosye7l9m2d55' })
  findImage(
    @Param('file_id') file_id: string
  ): Promise<UploadImageResponse> {
    return this.fileService.findImage( file_id );
  }

  @Delete(':file_id')
  @ApiResponse({ status: 200, description: 'La imagen ha sido eliminada' })
  @ApiResponse({ status: 404, description: 'Imagen no encontrada' })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  @ApiParam({ name: 'file_id', example: 'skq240icosye7l9m2d55' })
  removeImage( @Param('file_id') file_id: string ) {
    return this.fileService.removeImage( file_id );
  }
}
