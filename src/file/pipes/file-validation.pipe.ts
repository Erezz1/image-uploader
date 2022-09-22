import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

import { byteToMB } from '../helpers';

@Injectable()
export class FileValidationPipe implements PipeTransform {

  validFiles: string[] | string | null = null;
  maxMB: number = 100;

  constructor(
    validFiles?: string[] | string | null,
    maxMB?: number,
  ) {
    this.maxMB = maxMB;
    this.validFiles = validFiles;
  }

  transform( file: Express.Multer.File, metadata: ArgumentMetadata ): Express.Multer.File {

    if ( !file )
      throw new BadRequestException('The file does not exist in the request');

    if ( byteToMB( file.size ) > this.maxMB )
      throw new BadRequestException(`The maximum size is ${ this.maxMB }MB for each file`);

    if ( this.validFiles && Array.isArray( this.validFiles ) && !this.validFiles.includes( file.mimetype ))
      throw new BadRequestException('The file is not valid');
    else if ( this.validFiles && !Array.isArray( this.validFiles ) && this.validFiles !== file.mimetype )
      throw new BadRequestException('The file is not valid');

    return file;
  }
}
