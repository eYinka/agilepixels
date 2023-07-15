export default function Link({link}) {
  return (
    <li>
      <a href={link.url} className="nav-link">{link.label}</a>
    </li>
  )  
}