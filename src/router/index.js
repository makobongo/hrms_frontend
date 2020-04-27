import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import NotFound from "../views/notFound/NotFound";
import { Login, Organization } from "../views/auth";
import { Admin } from "../views/admin";
import { Dashboard } from "../components/admin/dashboard";
import {
  Profile,
  PersonalInformation,
  Experience,
  Education,
  References,
  Resume
} from "../components/admin/profile";

import {
  Departments,
  DepartmentList,
  DepartmentDetail,
  DepartmentCreate
} from "../components/admin/departments";

import {
  Users,
  UsersList,
  UserCreate,
  UserDetail
} from "../components/admin/users";
import { Account } from "../components/admin/account";
import { Jobs, JobsList, JobCreate, JobDetail } from "../components/admin/jobs";
import { Files } from "../components/admin/files";
import { About } from "../components/admin/about";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    redirect: "/auth/login"
  },
  {
    path: "/auth/org",
    name: "org",
    component: Organization,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        component: Profile,
        children: [
          {
            path: "/",
            name: "personalinfo",
            component: PersonalInformation
          },
          {
            path: "experience",
            name: "experience",
            component: Experience
          },
          {
            path: "education",
            name: "education",
            component: Education
          },
          {
            path: "references",
            name: "references",
            component: References
          },
          {
            path: "resume",
            name: "resume",
            component: Resume
          }
        ]
      },
      {
        path: "/admin",
        redirect: "/admin/dashboard"
      },
      {
        path: "departments",
        component: Departments,
        children: [
          {
            path: "/",
            name: "departments-list",
            component: DepartmentList
          },
          {
            path: "create",
            name: "department-create",
            component: DepartmentCreate
          },
          {
            path: ":id",
            name: "department-detail",
            component: DepartmentDetail
          }
        ]
      },
      {
        path: "users",
        component: Users,
        children: [
          {
            path: "/",
            name: "users-list",
            component: UsersList
          },
          {
            path: "create",
            name: "user-create",
            component: UserCreate
          },
          {
            path: ":id",
            name: "user-detail",
            component: UserDetail
          }
        ]
      },
      {
        path: "account",
        component: Account
      },
      {
        path: "jobs",
        component: Jobs,
        children: [
          {
            path: "/",
            name: "job-list",
            component: JobsList
          },
          {
            path: "create",
            name: "job-create",
            component: JobCreate
          },
          {
            path: ":id",
            name: "job-detail",
            component: JobDetail
          }
        ]
      },
      {
        path: "files",
        component: Files
      },
      {
        path: "about",
        component: About
      }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    store.state.auth.isLoggedIn === false
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
