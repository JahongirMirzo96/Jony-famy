import axios from 'axios'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IPost } from '~/types'

interface IState {
  posts: IPost[]
  loading: boolean
}

const usePostStore = defineStore('post', {
  state: (): IState => ({
    posts: [],
    loading: false,
  }),

  actions: {
    async fetchPosts() {
      try {
        const { data: posts }: { data: IPost[] } = await axios.get('/posts')
        this.posts = posts
      }
      catch (error) {
        return Promise.reject(error)
      }
    },
  },
})

import.meta.hot?.accept(acceptHMRUpdate(usePostStore, import.meta.hot))

export default usePostStore
