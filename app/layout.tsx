// import './globals.css'
import ThemeProvider from "@/context/ThemeContext";
import ControllerBar from "@/components/ControllerBar";
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import '@/app/globals.css'
import ColorsProvider from "@/context/ColorsContext";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
// const inter = Inter({ subsets: ["latin"] })


import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: 'Bogy UI',
  description: 'Best style with Easy UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ColorsProvider>
            <ControllerBar />
          </ColorsProvider>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
