# Aplicacion Web - Contador de Clics y Galeria de Gatos (Pipeline CI/CD)

Este proyecto consiste en una pagina web interactiva desarrollada para implementar y validar un pipeline de despliegue continuo (CI/CD) bajo el modelo DevOps, utilizando control de versiones estructurado, automatizacion de tareas y despliegue sobre infraestructura Cloud.

## Stack Tecnologico
* **Interfaz y Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6+), Bootstrap 5.3 (CDN).
* **Control de Versiones:** Git, GitHub.
* **Automatizacion y CI/CD:** GitHub Actions.
* **Infraestructura:** Azure Virtual Machine (Ubuntu Server).
* **Servidor Web:** Apache HTTP Server.

## Estructura de Directorios

.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   ├── script.js
│   └── style.css
├── index.html
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
└── LICENSE.md

## Estrategia de Control de Versiones

### Analisis de Modelos de Ramificacion
* **Trunk-Based Development:** Enfocado en la integracion frecuente dentro de una sola rama (`main`). Destaca por su velocidad, pero exige pruebas unitarias estrictas para prevenir fallos directos en produccion.
* **GitHub Flow:** Basado en una rama estable (`main`) y ramas auxiliares temporales. Es adecuado para proyectos livianos, aunque carece de una capa intermedia dedicada exclusivamente al desarrollo y pruebas de integracion.
* **GitFlow:** Define una arquitectura clara mediante ramas permanentes (`main`, `develop`) y ramas de soporte (`feature/*`, `hotfix/*`). Permite gestionar versiones estables e integrar parches sin afectar el trabajo en progreso.

### Justificacion del Modelo Elegido
Se implemento **GitFlow** para garantizar un aislamiento total entre el codigo listo para produccion y las etapas de desarrollo. Este enfoque facilita el trabajo en paralelo de multiples funcionalidades y permite aplicar parches prioritarios (`hotfix`) directamente sobre `main` sin incorporar cambios inestables que residan en `develop`.

Ramas utilizadas:
* `main`: Contiene exclusivamente el codigo de produccion desplegado en el servidor.
* `develop`: Sirve como punto de integracion para las nuevas funcionalidades.
* `feature/<nombre>`: Destinada a la creacion de nuevas caracteristicas.
* `hotfix/<nombre>`: Utilizada para resolver incidencias criticas en el entorno productivo.

## Estandares de Desarrollo

### Nomenclatura de Ramas
* Funcionalidades: `feature/dark-mode`, `feature/cat-counter`
* Correcciones urgentes: `hotfix/fix-dark-theme`

### Formato de Commits
Se sigue la convencion de mensajes estructurados:
* `feat:` incorporacion de nuevas funcionalidades.
* `fix:` solucion de errores o defectos.
* `style:` ajustes visuales, estilos CSS o maquetacion.
* `docs:` cambios en la documentacion.
* `refactor:` reorganizacion de codigo sin alterar la logica.

Ejemplos:
* `feat: implementar consumo de api y contador de imagenes`
* `fix: corregir especificidad css en tarjetas de contenido`

## Pipeline y Automatizacion (GitHub Actions)

El archivo `.github/workflows/deploy.yml` gestiona la integracion y el despliegue continuo hacia el entorno Cloud.

### Flujo de Ejecucion
1. Se activa mediante eventos de `push` sobre la rama `develop` y solicitudes de extraccion (`pull_request`) orientadas a `main`.
2. Establece una conexion segura por SSH con la VM de Azure empleando credenciales protegidas en GitHub Secrets:
   * `AZURE_HOST`
   * `AZURE_USER`
   * `AZURE_SSH_KEY`
3. Copia el contenido del proyecto (`index.html` y directorio `assets/`) hacia el directorio publico del servidor web (`/var/www/html/`).
4. Reinicia el servicio Apache para publicar los cambios de forma inmediata.

## Trazabilidad de Cambios

Durante la ejecucion del proyecto se registraron las siguientes etapas:
1. `feature/dark-mode`: Creacion del maquetado inicial y la paleta visual oscura. Integrado en `develop`.
2. `feature/cat-counter`: Incorporacion de la logica JavaScript para el contador de clics y la generacion dinamica de imagenes de gatos desde una API externa. Integrado en `develop`.
3. `Release`: Integracion de `develop` en `main` para el primer despliegue funcional en Azure.
4. `hotfix/fix-dark-theme`: Correccion urgente de visualizacion en produccion. Se integro en `main` para el redespliegue y posteriormente en `develop` para sincronizar los entornos.

## Autor

* **Tomas Ignacio Pena Pizarro**

"La adopcion de GitFlow me permitio estructurar de forma ordenada cada fase del ciclo de vida del software. Mantener un entorno separado para produccion aseguro la estabilidad del servicio en Azure, mientras que la automatizacion mediante GitHub Actions facilito un flujo de despliegue continuo rapido y sin intervenciones manuales repetitivas."