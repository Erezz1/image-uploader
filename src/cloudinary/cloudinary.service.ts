import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import toStream = require('buffer-to-stream');

import { folderCloudinary } from './constants';

@Injectable()
export class CloudinaryService {

  /**
   * Subida de imagen a la nube de Cloudinary
   * @param file Archivo de imagen que se subira a la nube
   * @returns Detalles de la imagen subida
   */
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

  /**
   * Busqueda de una imagen por medio de su identificador
   * @param public_id Identificador de una imagen
   * @returns Detalles de la imagen encontrada
   */
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

  /**
   * Eliminacion de una imagen por medio de su identificador
   * @param public_id Identificador de una imagen
   * @returns Respuesta
   */
  async deleteImage( public_id: string ): Promise<any> {
    return cloudinary.uploader.destroy(`${ folderCloudinary }/${ public_id }`);
  }
}