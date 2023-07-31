import express, { Express, Request, Response, NextFunction } from "express";
import userRouter from "./router/userRouter"
import New_Error from "./utils/New_Error";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());


app.use("/user", userRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new New_Error(`${req.originalUrl} URL doesn't exist! `, 404));
});

export default app;