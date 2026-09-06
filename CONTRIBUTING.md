# Guia para Colaboradores

Este documento establece las pautas tecnicas y operativas necesarias para contribuir al desarrollo del proyecto, asegurando la trazabilidad y calidad del codigo fuente.

## Reglas del Flujo de Trabajo

El proyecto se gestiona estrictamente bajo la estrategia GitFlow:

1. **Ramas Principales:**
   * `main`: Reservada unicamente para versiones estables. Se prohíbe realizar commits directos sobre esta rama.
   * `develop`: Base para la integracion de codigo verificado.

2. **Creacion de Funcionalidades (`feature`):**
   * Toda nueva caracteristica debe ramificarse desde `develop`:
     git checkout develop
     git pull origin develop
     git checkout -b feature/nombre-caracteristica
   * Al finalizar el desarrollo, se debe enviar la rama al remoto y solicitar un Pull Request con destino a `develop`.

3. **Correccion de Errores Urgentes (`hotfix`):**
   * Ante un fallo en produccion, la rama debe crearse desde `main`:
     git checkout main
     git pull origin main
     git checkout -b hotfix/nombre-error
   * Tras la validacion, se realiza un Pull Request hacia `main` y, de forma posterior, un Pull Request hacia `develop` para mantener la sincronia de ambos entornos.

## Politica de Commits

Los mensajes de commit deben describir el cambio realizado de manera breve y concisa, utilizando los siguientes prefijos:

* `feat`: Desarrollo de una nueva funcion.
* `fix`: Solucion de un error.
* `style`: Ajustes de formato, CSS o maquetacion.
* `docs`: Modificaciones en la documentacion.
* `chore`: Mantenimiento de configuraciones o archivos auxiliares.

## Lista de Verificacion para Pull Requests

Antes de solicitar la integracion de un cambio, asegurese de cumplir con lo siguiente:
* El codigo funciona correctamente en el entorno local de desarrollo.
* Los mensajes de commit son descriptivos y se ajustan a las convenciones.
* No se incluyen archivos temporales, basura ni credenciales sensibles.