import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects.vue'
import Team from '@/views/Team.vue'
import SignIn from '@/views/SignIn.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const parentName = "Project Manager"
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: `${parentName} - Dashboard`
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: `${parentName} - Projects`
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
      title: `${parentName} - Team`
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      title: `${parentName} - Sign In`
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: `${parentName} - Register`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta && to.meta.title || "Project Manager"
  })
})

export default router
