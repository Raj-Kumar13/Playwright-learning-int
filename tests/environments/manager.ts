import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(process.cwd(), '.env') });

export const LOCAL_ENV = {
    OrangePortal: {
        APPLICATION_URL: process.env.APPLICATION_URL as string,
        USERNAME: process.env.USERNAME as string,
        PASSWORD: process.env.PASSWORD as string
    }
}