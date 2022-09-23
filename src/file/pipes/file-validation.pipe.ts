import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, PayloadTooLargeException, UnsupportedMediaTypeException } from '@nestjs/common';

import { byteToMB } from '../helpers';

interface IFileValidationPipe {
  validFiles?: string[] | string | null;
  maxMB?: number;
}

@Injectable()
export class FileValidationPipe implements PipeTransform {

  options: IFileValidationPipe = {
    validFiles: null,
    maxMB: 100,
  }

  constructor({
    validFiles,
    maxMB
  }: IFileValidationPipe ) {
    this.options.maxMB = maxMB;
    this.options.validFiles = validFiles;
  }

  transform( file: Express.Multer.File, metadata: ArgumentMetadata ): Express.Multer.File {

    const { validFiles, maxMB } = this.options;

    if ( !file )
      throw new BadRequestException('The file does not exist in the request');

    if ( byteToMB( file.size ) > maxMB )
      throw new PayloadTooLargeException(`The maximum size is ${ maxMB }MB for each file`);

    if ( validFiles && Array.isArray( validFiles ) && !validFiles.includes( file.mimetype ))
      throw new UnsupportedMediaTypeException('The file is not valid');
    else if ( validFiles && !Array.isArray( validFiles ) && validFiles !== file.mimetype )
      throw new UnsupportedMediaTypeException('The file is not valid');

    return file;
  }
}
