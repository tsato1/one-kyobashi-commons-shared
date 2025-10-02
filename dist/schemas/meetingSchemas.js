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
    materialUrls: z.array(z.url()),
    joinUrl: z
        .url("ビデオ会議URLを入力してください")
        .refine((url) => {
        try {
            const parsedUrl = new URL(url);
            const validHosts = [
                /^zoom\.us$/,
                /^[a-zA-Z0-9-]+\.zoom\.us$/, // stricter subdomain check
                /^meet\.google\.com$/,
            ];
            return (parsedUrl.protocol === "https:" &&
                validHosts.some((host) => host.test(parsedUrl.hostname)) &&
                parsedUrl.pathname !== "/");
        }
        catch {
            return false;
        }
    }, {
        message: "URLはZoomまたはGoogle MeetのミーティングIDを含むリンクでなければなりません",
    })
        .refine((url) => {
        const parsedUrl = new URL(url);
        return parsedUrl.searchParams.size > 0; // ensure URL has query params for meeting details
    }, {
        message: "URLにミーティングに関するパラメタが含まれていません",
    })
        .optional()
});
