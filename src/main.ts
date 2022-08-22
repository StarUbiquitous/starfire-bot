import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express, {
  Express,
  Request,
  Response,
  Router,
  NextFunction
} from 'express';
import * as Sentry from '@sentry/node';

import {readEnv} from './utils';

const app: Express = express();
const router: Router = Router();
const port = process.env.PORT || 3000;

Sentry.init({
  dsn: ''
});

app.use(express.json());

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
});

app.use((request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE'
  );

  next();
});

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});

  });
});

app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);

app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

module.exports = app;
