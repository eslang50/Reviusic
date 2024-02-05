import express from 'express';
import cors from "cors";
import helmet from "helmet";
import router from './api/routes/routes.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", router);

const HOSTNAME = '0.0.0.0';
const PORT = 3000;

// app.get("/", (req, res) => {res.sendFile(path.resolve() + "/index.html")});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})



