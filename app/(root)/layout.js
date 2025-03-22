



// main layout.js

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";



export const metadata = {
    title: "Auth",
    description: "Next 14 Social Media App",
};



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (

        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-purple-2 text-light-1`}>
                    <main className="flex flex-row">
                        <LeftSideBar />
                        <MainContainer>
                            {children}
                        </MainContainer>
                        <RightSideBar />
                    </main>
                    {/* <BottomBar />     for mobile screens */}
                </body>
            </html>
        </ClerkProvider>

    );
}