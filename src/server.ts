import consola from 'consola';
import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const server = async () => {
  const port = process.env.KOA_PORT || 3000;
  app.listen(port);

  consola.ready(`Server listening on port ${port}...`);
};

server();
