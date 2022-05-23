const routes = [
    {
        path: '/',
        name: App,
    }
]

const router = createRouter ({
    history: createWebHisotry(process.env.BASE_URL),
    routes
})

export default router