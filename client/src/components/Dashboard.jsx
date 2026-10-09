import ServiceCard from "./ServiceCard"
import { useEffect, useState } from "react"
import "../css/Dashboard.css"

export default function Dashboard() {
  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/services"
        )

        if (!response.ok) {
          throw new Error("Failed to fetch services")
        }

        const data = await response.json()

        setServices(data)
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }

    fetchServices()
  }, [])

  const serviceComponents = services.map(service => (
    <ServiceCard
      key={service._id}
      name={service.name}
      url={service.url}
      status={service.status}
    />
  ))

  return (
    <div className="dashboard">
      <h1>Service Monitor</h1>
      <p className="dashboard-subtitle">
        Monitor your services in real time
      </p>

      <div className="table-container">
        <table className="services-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>URL</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {services.map(service => (
              <ServiceCard
                key={service._id}
                name={service.name}
                url={service.url}
                status={service.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}