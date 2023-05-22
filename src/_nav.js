import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'All Resources',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Amazon EKS',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Amazon Nodegroup',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Azure AKS',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Google K8s Service',
        to: '/base/',
      },
      {
        component: CNavItem,
        name: 'All',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'MultiPurpose Clusters',
  },
  {
    component: CNavItem,
    name: 'Kubernetes Provider',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Clusters',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Google Cloud',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Amazon Web Services',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Azure Resource Group',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Virtual Machine',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Amazon Web Services',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Microsoft Azure',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://kubernetes.io/docs/home/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
