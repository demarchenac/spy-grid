import { rest } from "msw";
import { rawMocks, seeds } from "./seeds";

export const handlers = [
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    const seed = req.url.searchParams.get("seed");

    if (!seed) {
      return res(ctx.status(200), ctx.json(rawMocks[seeds[0]]));
    }

    return res(ctx.status(200), ctx.json(rawMocks[seed]));
  }),
];
