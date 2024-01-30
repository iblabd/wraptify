import React from 'react'

export function Header({ title, subtitle }) {
  return (
    <div className="pb-8 pt-6 lg:pb-0">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
        {title}
      </h2>
      <p className="text-xl text-muted-foreground">{subtitle}</p>
    </div>
  )
}
