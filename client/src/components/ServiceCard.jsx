export default function ServiceCard({ name, url, status }) {
  return (
    <tr>
      <td className="service-name">{name}</td>

      <td>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="service-url"
        >
          {url}
        </a>
      </td>

      <td>
        <span
          className={`status-badge ${
            status === "healthy" ? "healthy" : "unhealthy"
          }`}
        >
          <span className="status-dot" />
          {status}
        </span>
      </td>
    </tr>
  );
}