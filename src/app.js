import express from "express";
import { encrypt, decrypt } from './encryption.js';

const app = express();
app.use(express.json());

// encrypt = verschlüsseln
app.post('/encrypt', (req, res) => {
    const message = req.body.message;
    const cypher = encrypt(message);
    res.json({
        cypher,
    });
});

// decrypt = entschlüsseln
app.post('/decrypt', (req, res) => {
    const cypher = req.body.cypher;
    const message = decrypt(cypher);
    res.json({
        message,
    });
});

export default app;