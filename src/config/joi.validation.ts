import * as Joi from 'joi';
import { IJoiValidation } from './joi.validation.d';

export const JoiValidationSchema = Joi.object<IJoiValidation>({
    PORT: Joi.number().default( 3000 ),

    DB_PORT: Joi.number().default( 5432 ),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),

    CLOUDINARY_CLOUD_NAME: Joi.string().required(),
    CLOUDINARY_API_KEY: Joi.string().required(),
    CLOUDINARY_API_SECRET: Joi.string().required(),
})
