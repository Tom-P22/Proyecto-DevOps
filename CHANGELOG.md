# Registro de Cambios (Changelog)

Todos los cambios relevantes realizados en este proyecto se documentan en este archivo.

## [1.0.1] - 2026-09-05
### Corregido
* **Hotfix:** Correccion de inconsistencias visuales en la tarjeta principal provocadas por la especificidad CSS de Bootstrap (`hotfix/fix-dark-theme`).
* Inclusion de reglas prioritarias en `assets/style.css` para garantizar el tema oscuro en el servidor de produccion.

## [1.0.0] - 2026-09-05
### Agregado
* **Feature:** Implementacion de la maqueta principal en modo oscuro (`feature/dark-mode`).
* **Feature:** Incorporacion del contador de clics y generacion dinamica de imagenes de gatos mediante la API Cataas (`feature/click-counter`).
* Configuracion del flujo automatizado en GitHub Actions para el despliegue mediante SSH a la Maquina Virtual de Azure.
* Estructura inicial del proyecto con archivos de gobernanza y documentacion tecnica.