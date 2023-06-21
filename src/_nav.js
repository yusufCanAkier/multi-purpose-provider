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
        name: 'AWS Storage List',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'AWS Database List',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'AWS Virtual Machines',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Azure Database List',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Azure Virtual Machines',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Billings',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Usages',
        to: '/base/spinners',
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
    name: 'Credentials',
  },
  {
    component: CNavItem,
    name: 'Access Keys',
    to: '/theme/typography',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
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
    component: CNavGroup,
    name: 'Databases',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'AWS Database',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Azure Database',
        to: '/base/',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Storage',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'AWS Storage',
        to: '/widgets/',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'K8s Manager',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Elastic K8s Service',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Azure K8s Service',
        to: '/base/placeholders',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://github.com/emirhandogandemir/cloud-infra-generator-api',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]
export default _nav
