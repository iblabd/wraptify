import { colors } from '../lib/colors'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function generateColorScheme() {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

export const createQueryString = (searchParams, query) => {
  const params = new URLSearchParams(searchParams.toString())
  query.forEach(({ name, value }) => {
    params.set(name, value)
  })

  return params.toString()
}
