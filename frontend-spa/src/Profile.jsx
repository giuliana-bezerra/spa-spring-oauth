import axios from "axios"
import { useEffect, useState } from "react"

function Profile() {
  const [principal, setPrincipal] = useState({})

  useEffect(() => {
    axios({
      baseURL: 'http://localhost:3000/userinfo'
    })
      .then(res => setPrincipal(res.data))
  }, [])

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous" />
      </head>
      <div className="container">
        <br />
        <h1>OAuth 2.0 Login with Spring Security</h1>
        <div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a className="btn btn-lg btn-primary me-md-2" href="/resource" role="link"
              style={{ marginTop: '10px' }}>
              Recurso protegido
            </a>
          </div>
        </div>
        <br />
        <div>
          You are successfully logged in <span style={{ fontWeight: 'bold' }}>{principal.name}</span>
          &nbsp;via the OAuth 2.0 Client <span style={{ fontWeight: 'bold' }}>{principal.clientName}</span>
          with id token <span
            style={{ fontWeight: 'bold', overflow: 'auto' }}>{principal.token}</span>
        </div>
        <div>&nbsp;</div>
        <div>
          <span style={{ fontWeight: 'bold' }}>User Attributes:</span>
          <ul>
            {principal && principal.userAttributes && Object.entries(principal.userAttributes)
              .map(([key, value]) => (
                <li key={key}>
                  <span style={{ fontWeight: 'bold' }} >{key}</span>: <span
                  >{value}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </ >
  );
}

export default Profile