import Home from './components/admin/Home'
import Apartments from './components/admin/apartments/Apartments'
import Bookings from './components/admin/bookings/Bookings'

export const routes = [
    { path: '/home', component: Home },
    { path: '/apartments', component: Apartments },
    { path: '/bookings', component: Bookings },
    { path: '*', redirect: '/home' }
]
