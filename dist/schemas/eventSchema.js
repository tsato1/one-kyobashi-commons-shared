import { z } from "zod";
export const createEventSchema = z.object({
    name: z.string(),
    date: z.date(),
});
