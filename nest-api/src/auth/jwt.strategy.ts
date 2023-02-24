import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

const publicKey: string = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIUljdYVwEeCYwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAwwmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjMw\nMjE1MDkzOTE5WhcNMjMwMzAzMjE1NDE5WjAxMS8wLQYDVQQDDCZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAOrozwM8hOjLO1b8yg4w0Drb0XlNkUldUPtlovEDj3MO8sQX\nnJZu99oYBnoJ8jKDGgdRkNWIM23evV8jcPflFKGJRrdEg6uUP4w8+8HC6Z8vkbf7\nxUJ1W0zcdN0oJyxE9PCskzdTVuGgpyG+D48k+lMKzjB6s4lgz6ij76ZwykDEFmT2\n/crdzFog3B3n7/6RGIM5RtWZuxedxzrQmW2AB8a4uMqESEzYK7E9bB8+fAi/vNna\nIr5IFhYJIyodbY4kgMeVQQRrlt24NEEp/lNMHRIQXl3oqHiKUsongJI4brkT5mEG\n9pWqgoZWdP8dBagCAveU+6gn/UiyCU5m/c0REacCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAAJ9pY3LfKoQMYJ9q3GJdfAgHa46sZ+nKlLwPQly74eK\n+XvpcBNbGbJdwEbliWH9ItgeltrToAt3rIu6nVL+eeJcxzD8dHlPymRziC7nLSjg\nv5U4KebwZQCIw9vpM7ECzFfuLU3q5TJdbw0tiYV9SPSMndAqB7YgTsEjTJMdvuMs\nmprSHsPhz2k8100X0F3xO/Kv8kLsNbvmP8XBtRd9+z493Ag2hPuZJqSHHzK/x6gu\nqsKoPxgDhsPgK86DHynqah+rEJAMLBdWZUCCZCTru8WhOStOcETq+EX/pTylcU4d\npRPPsPPKjy9pCTVtUxrJc1XkJiT8N1PM7APRyXf1ojI=\n-----END CERTIFICATE-----\n"

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    ExtractJwt.fromAuthHeaderAsBearerToken();
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: publicKey
    })
  }

  async validate(payload: any) {
    // TODO: pegar info na database?
    return { userId: payload.sub, username: payload.username }
  }
}