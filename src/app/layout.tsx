import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ehsan Rezaee's Portfolio",
    description: "Portfolio of My Work through years",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    forcedTheme={"dark"}
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}