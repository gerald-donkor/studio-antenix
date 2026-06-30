import React from 'react'
import Hero from "@/components/hero"
import About from '@/components/about'
import Blog from '@/components/blog'
import WhatWeDo from '@/components/what-we-do'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
      <WhatWeDo />
      <Testimonials /> 
    </main>
  )
}
