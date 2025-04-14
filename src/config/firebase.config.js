import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(
  readFileSync(resolve(__dirname, '../../serviceAccountKey.json'))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
