import { ApiProperty } from '@nestjs/swagger';

export class UploadImageResponse {
    @ApiProperty({
        description: 'Identificador unico publico de la imagen',
        example: 'share-image/skq240icosye7l9m2d55.webp'
    })
    id: string;

    @ApiProperty({
        description: 'Link para mostrar o visitar la imagen',
        example: 'https://res.cloudinary.com/dlmjyadlo/image/upload/v1663895470/share-image/skq240icosye7l9m2d55.webp'
    })
    url: string;
}
