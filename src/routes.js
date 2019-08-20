import AdminHome from './components/admin/AdminHome'
import Apartments from './components/admin/apartments/Apartments'
import Bookings from './components/admin/bookings/Bookings'
import Dashboard from './components/admin/dashboard/Dashboard'
import PublicHome from './components/public/PublicHome'

import SignUp from './components/auth/signup'
import SignIn from './components/auth/signin'

export const routes = [
    { path: '/', component: PublicHome,
        children: [
            { path: 'signup', component: SignUp },
            { path: 'signin', component: SignIn }
        ]
    },

    { path: '/admin', component: AdminHome,
        children: [
            { path: 'apartments', component: Apartments },
            { path: 'bookings', component: Bookings },
            { path: '*', component: Dashboard },
        ]
    },



]
