import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({
    path: "/",
    query: {
      name: "403-home"
    }
  })
}

export default goHome