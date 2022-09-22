import { Provider } from '@nestjs/common';
import { cloudinaryConfig } from './config/config';

import { CLOUDINARY } from './constants';

export const CloudinaryProvider: Provider = {
    provide: CLOUDINARY,
    useFactory: () => cloudinaryConfig(),
};
