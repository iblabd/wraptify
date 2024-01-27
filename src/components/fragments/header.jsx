import React from 'react'

export function Header({ title, subtitle }) {
  return (
    <div className="pt-6">
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg text-accent-foreground sm:text-xl">{subtitle}</p>
    </div>
  )
}
