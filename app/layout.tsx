import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs"

interface RootLayoutProps { children: React.ReactNode }

const Font = Open_Sans({ subsets: ["latin"] });

// cheese
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    // FC- fiddling cunts
    return (
        <html>
            <head>
                <title>Daddy dave</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </head>
            <body className={Font.className}>
                <ClerkProvider>
                    {children}
                </ClerkProvider>
            </body>
        </html>
    )
}

export default RootLayout