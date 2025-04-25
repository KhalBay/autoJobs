import type { App } from 'vue'
import Post from '../components/UI/Post.vue'

export default ({ app }: { app: App }) => {
    app.component('post-ui', Post)
}