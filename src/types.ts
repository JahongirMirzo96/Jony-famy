import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface IPost {
  id: number
  title: string
  userId: number
}
