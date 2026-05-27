# Flujo Propuesto (To Be) - Verificación Asíncrona

```mermaid
flowchart LR
  A[Azure Function]
  V[Agente Verificador]
  B[GitHub API]
  C[(Storage)]
  D[GitHub Actions]
  E[Alerta]

  A -->|1 POST + correlation_id| B
  A -->|2 Guarda registro| C
  B -->|3 Encola dispatch| D
  D -->|4 Ejecuta workflow| D
  V -->|5 Lee pendientes| C
  V -->|6 GET /actions/runs| B
  V -->|7 Compara y verifica| C
  V -->|8 Si no existe tras 10-15 min| E
