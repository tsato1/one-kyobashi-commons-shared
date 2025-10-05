import { z } from "zod";

// Used to validate inputs for create & update forms
export const mutateMeetingSchema = z.object({
  visibility: z.enum(["public", "private"]),
  startDate: z.coerce.date("start_date"),
  endDate: z.coerce.date("end_date").optional(),
  name: z.string()
    .min(1, { error: "会合名は必須です" })
    .max(255, { error: "会合名は255文字までです。" }),
  description: z.string().optional(),
  location: z.string().optional(),
  allowedRoles: z.array(z.enum(["crew", "trustee"])),
  materialUrls: z
    .array(z.url({
      protocol: /^https?$/,
      hostname: z.regexes.domain,
    }))
    .optional(),
  joinUrl: z
    .url({
      protocol: /^https?$/,
      hostname: /^(meet\.google\.com|zoom\.us|www\.zoom\.us)$/
    })
    .optional(),
});

// Used to validate inputs for create & update api endpoints
export const mutateMeetingPartialSchema = mutateMeetingSchema.partial()

// Used to parse fetched data from DB
export const meetingResponseSchema = mutateMeetingSchema.extend({
  id: z.uuid(),
  createdBy: z.object({
    nickname: z.string(),
    image: z.string().optional(),
    role: z.enum(["crew", "trustee", "admin"])
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

