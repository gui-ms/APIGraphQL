import express, {Request, Response} from 'express'

const app = express();

const router = express.Router();

router.get('/rest', (req: Request ,res: Response) => {
    res.send('Hello World!');
});

export default router;