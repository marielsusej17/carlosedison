import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';
import vehiculoRoutes from './routes/vehiculo.routes.js';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/vehiculos', vehiculoRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;