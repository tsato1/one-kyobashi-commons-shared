import { z } from "zod";
export declare const queryMeetingSchema: z.ZodObject<{
    dateMin: z.ZodOptional<z.ZodISODateTime>;
    dateMax: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export declare const mutateMeetingSchema: z.ZodObject<{
    visibility: z.ZodEnum<{
        public: "public";
        private: "private";
    }>;
    startDate: z.ZodISODateTime;
    endDate: z.ZodOptional<z.ZodISODateTime>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    allowedRoles: z.ZodArray<z.ZodEnum<{
        crew: "crew";
        trustee: "trustee";
    }>>;
    materialUrls: z.ZodOptional<z.ZodArray<z.ZodURL>>;
    joinUrl: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export declare const meetingResponseSchema: z.ZodObject<{
    visibility: z.ZodEnum<{
        public: "public";
        private: "private";
    }>;
    startDate: z.ZodISODateTime;
    endDate: z.ZodOptional<z.ZodISODateTime>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    allowedRoles: z.ZodArray<z.ZodEnum<{
        crew: "crew";
        trustee: "trustee";
    }>>;
    materialUrls: z.ZodOptional<z.ZodArray<z.ZodURL>>;
    joinUrl: z.ZodOptional<z.ZodURL>;
    id: z.ZodUUID;
    createdBy: z.ZodObject<{
        nickname: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        role: z.ZodEnum<{
            crew: "crew";
            trustee: "trustee";
            admin: "admin";
        }>;
    }, z.core.$strip>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
