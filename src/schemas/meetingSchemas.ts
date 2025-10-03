import { z } from "zod";

export const meetingSchema = z.object({
  visibility: z.enum(["public", "private"]),
  startDate: z.date("start_date"),
  endDate: z.date("end_date").optional(),
  name: z.string()
    .min(1, { error: "会合名は必須です" })
    .max(255, { error: "会合名は255文字までです。" })
    .optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  allowedRoles: z.enum(["crew", "trustee"]),
  materialUrls: z.array(z.url()) // todo: only allow canva or google docs urls
    .optional(),
  joinUrl: z.url("URLを入力してください") // todo: only allow zoom or google meet urls
    .optional(),
});

export type Meeting = z.infer<typeof meetingSchema>;
