import { z } from "zod";
export declare const createEventSchema: z.ZodObject<{
    name: z.ZodString;
    date: z.ZodDate;
}, z.core.$strip>;
export type CreateEvent = z.infer<typeof createEventSchema>;
