import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "AI Resume Builder - The Best CV Builder AI",
    description:
        "Create professional, job-winning CVs and resumes in seconds with AI Resume Builder. AI-powered resume builder. Get hired faster with AI Resume Builder.",
    abstract:
        "AI Resume Builder is an AI-powered CV builder that helps you create ATS-friendly, professional resumes in minutes. Customize your CV for your career, industry, and language.",
    category: "AI, Resume Builder, CV Builder AI",
    applicationName: "AI Resume Builder",
    authors: [{ name: "FastCV Team", url: process.env.APP_HOST || "" }],
    generator: "AI Resume Builder Model",
    keywords:
        "cv, resume, ai, resume ai, cv ai, make cv with ai, make resume with ai, professional cv, cv builder, resume builder, ats resume, fastcv",
    creator: "FastCV Team",
    publisher: "AI Resume Builder",
    robots: { index: true, follow: true },
    alternates: {
        canonical: process.env.APP_HOST || "",
    },
    openGraph: {
        type: "website",
        url: process.env.APP_HOST || "",
        title: "AI Resume Builder - AI CV Builder",
        description:
            "Build your CV with AI in minutes. AI Resume Builder helps you create personalized, modern, and professional resumes that get noticed.",
        siteName: "AI Resume Builder",
    },
    twitter: {
        title: "AI Resume Builder - Create Your CV with AI",
        description:
            "Build job-winning CVs with AI Resume Builder. AI-powered resume builder supporting multiple languages and professional templates.",
        card: "summary_large_image",
    },
    verification: {
        google: process.env.APP_VERIFICATION_GOOGLE || "",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr">
            <body>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
