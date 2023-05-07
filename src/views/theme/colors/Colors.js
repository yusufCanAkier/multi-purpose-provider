import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          About Kubernetes Provider
          <DocsLink href="" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCardBody>
              <p>
                A Kubernetes cluster is a group of interconnected nodes (virtual or physical
                machines) used to manage, scale, and deploy containerized applications using
                Kubernetes, an open-source container orchestration platform. The cluster provides a
                consistent, centralized environment that helps automate the deployment, scaling, and
                management of containerized applications across multiple nodes.
              </p>
              <p>Kubernetes clusters consist of two main components:</p>
              <p>
                Control Plane (Master Node): The control plane is responsible for managing the
                overall state of the cluster, ensuring that the desired state of the system is
                maintained. It includes components like the kube-apiserver, etcd datastore,
                kube-controller-manager, and kube-scheduler. These components work together to
                orchestrate the various tasks necessary to keep the cluster running smoothly.
              </p>
              <p>
                Worker Nodes: Worker nodes are the machines where containerized applications are
                deployed, managed, and scaled. Each worker node runs a container runtime (e.g.,
                Docker) and the Kubernetes agent called the kubelet. The kubelet communicates with
                the control plane to ensure the right containers are running on each node, and it
                manages the lifecycle of containers on the worker node. Worker nodes also run the
                kube-proxy, which is responsible for managing network communication between the
                containers and external clients.
              </p>
              <p>Kubernetes clusters provide a range of benefits, such as:</p>
              <p>
                High availability: Kubernetes can detect when a container or node fails and
                automatically reschedule the affected workloads to other healthy nodes, ensuring
                that applications remain highly available.
              </p>
              <p>
                Scalability: Kubernetes makes it easy to scale applications by adding or removing
                containers based on demand, ensuring that resources are used efficiently.
              </p>
              <p>
                Load balancing: Kubernetes can distribute incoming network traffic across multiple
                containers or nodes, ensuring that no single node becomes a bottleneck and improving
                the overall performance of the system.
              </p>
              <p>
                Rolling updates and rollbacks: Kubernetes enables you to update applications without
                downtime by gradually rolling out changes across the cluster. If a problem is
                detected, it can also automatically roll back the changes to a previous version.
              </p>
              <p>
                Self-healing: Kubernetes can automatically restart failed containers, reschedule
                them to other nodes, or replace them with new containers, ensuring that applications
                continue running without manual intervention.
              </p>
            </CCardBody>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
