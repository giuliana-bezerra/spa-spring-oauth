package br.com.giulianabezerra.gateway;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.client.registration.ReactiveClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestCustomizers;
import org.springframework.security.oauth2.client.web.server.DefaultServerOAuth2AuthorizationRequestResolver;
import org.springframework.security.oauth2.client.web.server.ServerOAuth2AuthorizationRequestResolver;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.RedirectServerAuthenticationSuccessHandler;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {
  @Autowired
  private ReactiveClientRegistrationRepository clientRegistrationRepository;

  @Bean
  SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
    http.authorizeExchange(conf -> conf.pathMatchers("/login").permitAll().anyExchange().authenticated());
    http.oauth2Login(conf -> conf
        .authorizationRequestResolver(authorizationRequestResolver(clientRegistrationRepository))
        .authenticationSuccessHandler(new RedirectServerAuthenticationSuccessHandler(
            "http://localhost:3000/profile")));

    return http.build();
  }

  private ServerOAuth2AuthorizationRequestResolver authorizationRequestResolver(
      ReactiveClientRegistrationRepository clientRegistrationRepository2) {
    var authorizationRequestResolver = new DefaultServerOAuth2AuthorizationRequestResolver(
        clientRegistrationRepository);
    authorizationRequestResolver.setAuthorizationRequestCustomizer(
        OAuth2AuthorizationRequestCustomizers.withPkce());
    return authorizationRequestResolver;
  }

}
