import path from 'path';
import { fileURLToPath } from 'url';

import server from "./dist/back/server.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server(__dirname);
