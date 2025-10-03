import { z } from "zod";
export declare const meetingSchema: z.ZodObject<{
    visibility: z.ZodEnum<{
        public: "public";
        private: "private";
    }>;
    startDate: z.ZodDate;
    endDate: z.ZodOptional<z.ZodDate>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    allowedRoles: z.ZodEnum<{
        crew: "crew";
        trustee: "trustee";
    }>;
    materialUrls: z.ZodOptional<z.ZodArray<z.ZodURL>>;
    joinUrl: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export type Meeting = z.infer<typeof meetingSchema>;
