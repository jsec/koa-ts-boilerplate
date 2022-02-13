import consola from 'consola';
import app from './app';

const server = async () => {
  const port = process.env.KOA_PORT || 3000;
  app.listen(port);

  consola.ready(`Server listening on port ${port}...`);
}

server();
