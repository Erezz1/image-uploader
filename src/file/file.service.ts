import { Injectable, NotFoundException } from '@nestjs/common';

import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class FileService {
  constructor( private cloudinaryService: CloudinaryService ) {}

  /**
   * Subida de imagen a la nube de Cloudinary
   * @param file Archivo de imagen
   * @returns { id, url }
   */
  async uploadImage( file: Express.Multer.File ) {
    const res = await this.cloudinaryService.uploadImage( file );

    const public_idArr = res.public_id.split('/');
    const id = public_idArr[ public_idArr.length - 1 ];

    return {
      id,
      url: res.secure_url
    };
  }

  /**
   * Busqueda de una imagen por medio de su identificador
   * @param file_id Identificador de una imagen
   * @returns { id, url }
   */
  async findImage( file_id: string ) {
    const res = await this.cloudinaryService.findImage( file_id );

    const public_idArr = res.public_id.split('/');
    const id = public_idArr[ public_idArr.length - 1 ];

    return {
      id,
      url: res.secure_url
    };
  }

  /**
   * Eliminacion de una imagen por medio de su identificador
   * @param file_id identificador de una imagen
   * @returns { result: 'ok' }
   */
  async removeImage( file_id: string ) {
    const res = await this.cloudinaryService.deleteImage( file_id );

    if ( res.result === 'not found' )
      throw new NotFoundException(`Image with id ${ file_id } not found`);

    return res;
  }
}
