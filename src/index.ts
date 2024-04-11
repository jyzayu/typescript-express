import express, {Request, Response} from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser());

const server = http.createServer(app);

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        response: "hello world"
    })
});

server.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} server running on http://localhost:${process.env.APP_PORT}/`);
})