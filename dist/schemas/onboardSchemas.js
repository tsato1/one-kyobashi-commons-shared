import { z } from "zod";
export const firstStepSchema = z.object({
    isTermsAgreed: z.boolean().refine((val) => val === true, {
        error: "規約に同意しなければなりません。",
    }),
});
export const secondStepSchema = z.object({
    role: z.enum(["crew", "trustee"], { error: "役割を選んでください" }),
    nickname: z.string().min(1, 'ニックネームが入力されていません').max(255, 'ニックネームは255文字までです'),
    birthMonth: z.coerce.number().min(0).max(11),
});
export const onboardSchema = firstStepSchema
    .extend(secondStepSchema.shape)
    .omit(({ isTermsAgreed: true }));
