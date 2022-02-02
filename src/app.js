import express from "express";
import { encrypt, decrypt } from './encryption.js';

const app = express();
app.use(express.json());

// encrypt = verschlüsseln

// decrypt = entschlüsseln

export default app;