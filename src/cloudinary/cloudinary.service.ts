import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import toStream = require('buffer-to-stream');

import { folderCloudinary } from './constants';

@Injectable()
export class CloudinaryService {

  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {

    return new Promise(( resolve, reject ) => {
      const upload = cloudinary.uploader.upload_stream(
        { folder: folderCloudinary },

        ( error, result ) => {
          if ( error ) return reject( error );
          resolve( result );
        }
      );

      toStream( file.buffer ).pipe( upload );
    });
  }

  async findImage( public_id: string ): Promise<UploadApiResponse> {
    try {
      const res = await cloudinary.api.resource(`${ folderCloudinary }/${ public_id }`)
      return res;

    } catch ({ error }) {
      if ( error.http_code )
        throw new NotFoundException(`Image with id ${ public_id } not found`);

      console.log( error );
      throw new InternalServerErrorException('Internal Server Error - Check console logs')
    }
  }

  async deleteImage( public_id: string ): Promise<any> {
    return cloudinary.uploader.destroy(`${ folderCloudinary }/${ public_id }`);
  }
}
