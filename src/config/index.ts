import { z } from 'zod'

const env = z
  .object({
    VITE_API_URL: z.string().optional().default('https://api.github.com'),
    VITE_ENVIROMENT: z.union([
      z.literal('test'),
      z.literal('development'),
      z.literal('production'),
    ]),
  })
  .transform((original) => ({
    apiUrl: original.VITE_API_URL,
    enviroment: original.VITE_ENVIROMENT,
  }))
  .parse(import.meta.env)

export const config = {
  ...env,
}
