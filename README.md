# 🚀 Sitio Web Provisional

Bienvenido al repositorio oficial del sitio web provisional e institucional de la empresa. Este proyecto tiene como objetivo presentar de forma clara, moderna y profesional la identidad corporativa, misión, valores de trabajo en equipo (*SHAKE*), herramientas y canales directos de contacto.

---

## 📌 Tabla de Contenidos
- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Estructura del Sitio](#-estructura-del-sitio)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Estructura de Carpetas](#-estructura-de-carpetas)
- [Personalización de Contenido](#-personalización-de-contenido)
- [Despliegue](#-despliegue)
- [Licencia](#-licencia)

---

## 📖 Descripción del Proyecto

El sitio web está diseñado en formato **One-Page** (página única con desplazamiento suave) optimizado para dispositivos móviles (*Mobile-First*). Sirve como carta de presentación digital mientras se desarrollan plataformas adicionales o módulos internos.

### Objetivos principales:
1. **Identidad:** Explicar quiénes somos, nuestra visión y el enfoque de trabajo.
2. **Cultura SHAKE:** Transmitir los valores de compañerismo, empatía, trabajo en equipo, innovación y compromiso.
3. **Conversión y Contacto:** Facilitar la comunicación directa mediante formulario web y enlace directo a WhatsApp.

---

## 🏛️ Estructura del Sitio

La página cuenta con las siguientes secciones estratégicas:

1. **Header & Hero Section:** Barra de navegación fija, propuesta de valor en una sola oración y botón principal de contacto (*CTA*).
2. **Quiénes Somos:** Misión, visión e historia/enfoque de trabajo diario.
3. **Cultura & Valores (SHAKE):** Tarjetas interactivas con los pilares corporativos (compañerismo, empatía, trabajo colaborativo).
4. **Qué Hacemos & Herramientas:** Servicios principales y tecnologías/programas empleados.
5. **Equipo de Trabajo:** Tarjetas de presentación de los miembros clave con roles y enlaces profesionales.
6. **Contacto & Ubicación:** Formulario funcional, botón directo a WhatsApp corporativo, datos de contacto y redes sociales.
7. **Footer:** Derechos de autor y enlace a políticas de privacidad.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Marcado semántico y accesible.
- **CSS3 / Tailwind CSS / Framework:** Estilos modernos, diseño responsivo y animaciones sutiles.
- **JavaScript (Vanilla):** Interactividad, desplazamiento fluido (*smooth scroll*) y validación de formularios.
- **Íconos:** Lucide Icons / FontAwesome / SVG nativos.

---

## 💻 Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Abrir localmente
Si el proyecto es puramente estático (HTML/CSS/JS):
- Puedes abrir directamente el archivo `index.html` en tu navegador favorito.
- O utilizar una extensión como **Live Server** en Visual Studio Code.

Si utilizas un empaquetador (Vite, Next.js, Astro, etc.):
```bash
npm install
npm run dev
```

---

## 📁 Estructura de Carpetas

```text
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── team/          # Fotos del equipo
│   │   ├── icons/         # Íconos y logotipos
│   │   └── logo.svg       # Logo corporativo
├── index.html             # Estructura principal
├── README.md              # Documentación del proyecto
└── LICENSE
```

---

## ⚙️ Personalización de Contenido

- **Formulario de Contacto:** Configura el destino del formulario conectándolo a servicios como [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/) o un backend propio.
- **Enlace de WhatsApp:** Actualiza el número en el botón de WhatsApp dentro de `index.html`:
  ```html
  <a href="https://wa.me/TUNUMERODETELEFONO?text=Hola,%20deseo%20más%20información">Escríbenos</a>
  ```
- **SEO & Metadatos:** Edita las etiquetas `<title>`, `<meta name="description">` y las etiquetas Open Graph (`og:image`, `og:title`) en el `<head>` para una correcta previsualización al compartir el enlace.

---

## 🚀 Despliegue

Este proyecto puede desplegarse de manera gratuita y rápida en:
- **GitHub Pages:** En la configuración del repositorio (`Settings > Pages`).
- **Vercel:** Conectando directamente el repositorio de GitHub.
- **Netlify:** Arrastrando la carpeta del proyecto o mediante integración continua.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.
