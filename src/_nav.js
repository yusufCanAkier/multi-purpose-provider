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
        name: 'Get EKS',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'AWS VM Get',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Create AWS Nodegroup',
        to: '/base/popovers',
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
        to: '/base/placeholders',
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
    name: 'AWS',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
    
      {
        component: CNavItem,
        name: 'AWS Database',
        to: '/base/paginations',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Azure',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Azure Database',
        to: '/base/',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'EKS Manager',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Amazon EKS',
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
