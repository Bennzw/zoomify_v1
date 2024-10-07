import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoomify",
  description: "Now Learning is more fun",
  icons:{
    icon:'/icons/logo.svg'
  }
};

const RootLayout = ({children}:{children: ReactNode }) => {
  return (
    <main>  
      <StreamVideoProvider>      
        {children}        
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout