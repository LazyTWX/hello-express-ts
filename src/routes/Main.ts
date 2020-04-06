import { Request, Response } from 'express';

export default {
    async main (req: Request, res: Response) {
        return res.send('Hello World');
    }
}