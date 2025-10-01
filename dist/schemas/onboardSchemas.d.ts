import { z } from "zod";
export declare const firstStepSchema: z.ZodObject<{
    isTermsAgreed: z.ZodBoolean;
}, z.core.$strip>;
export declare const secondStepSchema: z.ZodObject<{
    role: z.ZodEnum<{
        crew: "crew";
        trustee: "trustee";
    }>;
    nickname: z.ZodString;
    birthMonth: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const onboardSchema: z.ZodObject<{
    role: z.ZodEnum<{
        crew: "crew";
        trustee: "trustee";
    }>;
    nickname: z.ZodString;
    birthMonth: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
