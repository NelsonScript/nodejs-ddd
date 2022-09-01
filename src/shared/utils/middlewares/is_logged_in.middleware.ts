import * as express from "express";

const isLoggedIn = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  req.user ? next() : res.redirect('/unauthorized');
}

export default isLoggedIn;