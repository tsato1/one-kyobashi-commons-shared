import { z } from "zod";
export declare const firstStepSchema: z.ZodObject<{
    isTermsAgreed: z.ZodBoolean;
}, z.core.$strip>;
export declare const secondStepSchema: z.ZodObject<{
    nickname: z.ZodString;
    birthMonth: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const onboardSchema: z.ZodObject<{
    nickname: z.ZodString;
    birthMonth: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
