function App() {
  return <main>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous" />
    </head>
    <body>
      <div class="container">
        <br />
        <div class="d-grid gap-2 col-4 mx-auto">
          <br />
          <form class="form-signin w-100 m-auto">
            <a class="w-100 btn btn-lg btn-primary" href="http://localhost:3000/oauth2/authorization/keycloak"
              role="link" style={{ marginTop: '10px' }}>
              Login
            </a>
          </form>
        </div>
      </div>
    </body>
  </main>
}

export default App
