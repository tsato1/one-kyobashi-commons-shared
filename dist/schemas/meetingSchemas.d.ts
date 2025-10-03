import { z } from "zod";
export declare const mutateMeetingSchema: z.ZodObject<{
    visibility: z.ZodEnum<{
        public: "public";
        private: "private";
    }>;
    startDate: z.ZodDate;
    endDate: z.ZodOptional<z.ZodDate>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    allowedRoles: z.ZodArray<z.ZodEnum<{
        crew: "crew";
        trustee: "trustee";
    }>>;
    materialUrls: z.ZodOptional<z.ZodArray<z.ZodURL>>;
    joinUrl: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export type MeetingResponseDto = z.infer<typeof mutateMeetingSchema.shape & {
    id: string;
    createdBy: {
        nickname: string;
        image?: string;
        role: string;
    };
    createdAt: Date;
    updatedAt: Date;
}>;
