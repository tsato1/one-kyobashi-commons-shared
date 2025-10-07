import { z } from "zod";

// Used to validate query params
export const queryMeetingSchema = z.object({
  dateMin: z.iso.datetime().optional(),
  dateMax: z.iso.datetime().optional(),
})
  .superRefine(
    (val, ctx) => {
      if (val.dateMin && val.dateMax) {
        if (val.dateMin > val.dateMax) {
          ctx.addIssue({
            code: "custom",
            message: "dateMax must be greater than dateMin",
            path: ["dateMax"]
          });
        };

        // todo: error out if the two dates are too far apart like 10 months
      }
    },
  );

// Used to validate inputs for create & update forms
export const mutateMeetingSchema = z.object({
  visibility: z.enum(["public", "private"]),
  startDate: z.date("開始日時は必須です"),
  endDate: z.date().optional(),
  name: z.string()
    .min(1, { error: "名前は必須です" })
    .max(255, { error: "名前は255文字までです" }),
  description: z.string().optional(),
  location: z.string().optional(),
  allowedRoles: z.array(z.enum(["crew", "trustee"])),
  materialUrls: z
    .array(z.url({
      protocol: /^https?$/,
      hostname: z.regexes.domain,
      error: "正しいフォーマットでURLを入力してください",
    }))
    .optional(),
  joinUrl: z
    .url({
      protocol: /^https?$/,
      hostname: /^(meet\.google\.com|zoom\.us|www\.zoom\.us)$/,
      error: "正しいフォーマットでURLを入力してください",
    })
    .optional(),
});

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

