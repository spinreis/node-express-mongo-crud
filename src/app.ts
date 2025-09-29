import express from 'express';
import 'dotenv/config';
import mascotasRoutes from './routes/mascotasRoutes.ts';
import usuariosRoutes from './routes/usuariosRoutes.ts';
import bodyParser from 'body-parser';
import dbClient from './config/database.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/pets', mascotasRoutes);
app.use('/users', usuariosRoutes);

try {
    app.listen(PORT, () => {
        console.log('app is running on', PORT);
    });
} catch (error) {
    console.error(error);
}

process.on('SIGINT', async () => {
    dbClient.disconnect()
    process.exit(0);   
});