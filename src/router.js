import Vue from "vue"
import Router from "vue-router"
import store from "./store";
const Home = () => import ("./components/Homepage/HomeIndex")

Vue.use(Router);

let router =  new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "HomeIndex",
            component: Home,
        },   
        {
            path: "/home",
            name: "HomeIndex",
            component: Home,
        }, 
        {
            name: "Registration",
            path: "/signup",
            component: () => import("./components/Authentication/Registration"),
        }, 
        // {
        //     name: "RegistrationEmailSent",
        //     path: '/email-sent',
        //     component: () => import("./components/EmailSent/RegistrationEmailSent")
        // },   
        
        {
            name: "Login",
            path: "/login",
            component: () => import("./components/Authentication/Login"),
        }, 
        {
            name: "Dashboard",
            path: "/dashboard",
            component: () => import("./components/Dashboard/Dashboard"),
            meta: {
				requiresAuth: true,
			},
        },           
        {
            name: "ChangePassword",
            path: "/change-password",
            component: () => import("./components/Authentication/ChangePassword"),
            meta: {
				requiresAuth: true,
			},
        },
        {
            name: "UserList",
            path: "/team-members",
            component: () => import("./components/sections/UserList"),
            meta: {
				requiresAuth: true,
			},
        },
        {
            name: "AppraisalList",
            path: "/appraisals",
            component: () => import("./components/Appraisal/AppraisalList"),
            meta: {
				requiresAuth: true,
			},
        },
        {
            name: "IndividualUserAppraisal",
            path: "/appraisal/:username",
            component: () => import("./components/Appraisal/IndividualUserAppraisal"),
            meta: {
				requiresAuth: true,
			},
        }

        
    ]
})

// Used to check if a route is projected, if it is then you are required to
// be authenticated before you can access it


router.beforeEach((to, from, next) => {
if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (store.getters.get_is_user_authenticated) {
        next();
    } else{
        next("/login");
    }
} 
next();

});

export default router;