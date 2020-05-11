import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  Home,
  Recommend,
  Rank,
  Singer
} from '@/pages'
export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"} />
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singer",
        component: Singer
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]