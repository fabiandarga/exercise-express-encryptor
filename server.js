import app from './src/app.js';

const PORT = 4000;

app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
})