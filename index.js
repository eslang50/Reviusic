import express from 'express';
import cors from "cors";
import helmet from "helmet";
import router from './api/routes/routes.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", router);

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'public')));

const HOSTNAME = 'localhost';
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})



