import Koa from "koa";
import Static from "koa-static";
import Router from "koa-router";
import Logger from "koa-logger";
import BodyParser from "koa-bodyparser";
import { hello } from "./module1";
import open from "open";
import path from "path";
import { getDrives } from "./api";

const port = process.env.PORT || 3001;
const app = new Koa();
const router = new Router();
const clientDirPath = path.join(path.resolve(), "dist/client");
hello();
app.use(Logger());
app.use(BodyParser());
app.use(Static(clientDirPath));

router.post("/api/getDrives", async (ctx): Promise<void> => {
  const drives = await getDrives();
  ctx.response.body = drives.map((drive) => drive.mounted);
});

app.use(router.routes());
app.listen(port);
open(`http://localhost:${port}`);
export default app;
