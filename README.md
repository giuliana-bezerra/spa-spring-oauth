<h1 align="center">
  Spring Oauth + SPA
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=Youtube&message=@giulianabezerra&color=8257E5&labelColor=000000" alt="@giulianabezerra" />
 <img src="https://img.shields.io/static/v1?label=Tipo&message=Tutorial&color=8257E5&labelColor=000000" alt="Tutorial" />
</p>

Projeto apresentado [nesse vídeo](https://youtu.be/OTl2hyeEVv0) que ilustra o uso do Spring Security utilizando o Oauth 2.0 + OpenID com uma aplicação frontend React que possui página de login customizada.

## Configuração do Keycloak

1 - Executar Keycloak
```
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.5 start-dev
```

2 - Criar um Identity Provider pro Google no Keycloak

3 - Informar como Authentication do Realm via browser a opção google como IdP Redirector

4 - Criar client oauth no Keycloak com Standard Flow (Authorization Code)

5 - Adicionar redirect URIs do Gateway e do SPA

## Testando a Aplicação

Após garantir que o Keycloak está em execução, siga os passos abaixo:

- Execute os projetos `secured-service` e `security-gateway`
- Execute o projeto frontend-spa com o comando `npm run dev`

Será possível acessar a aplicação através do endereço [http://localhost:3000](http://localhost:3000). 