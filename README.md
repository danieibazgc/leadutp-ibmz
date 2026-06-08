# IBM Z Career Connection | UTP 🚀

Este es el repositorio oficial de la página web de registro e información para el evento **IBM Z Career Connection | UTP**. Una landing page moderna, rápida y totalmente responsive diseñada para conectar a la comunidad estudiantil de la Universidad Tecnológica del Perú (UTP) con las tecnologías de Enterprise Computing e IBM Z.

---

## 📅 Sobre el Evento

El **IBM Z Career Connection | UTP** es un evento presencial y gratuito enfocado en descubrir cómo las infraestructuras tecnológicas empresariales más potentes del mundo procesan el 70% de las transacciones globales.

*   **Fecha:** Martes 16 de junio de 2026.
*   **Hora:** 4:00 PM (Hora exacta - Apertura de registro). Cierre de puertas a las 4:30 PM.
*   **Lugar:** Auditorio UTP, Torre Arequipa (Presencial).
*   **Ponente Especial:** **Maria Fernanda Martinez**, IBM Z Client Skills Leader, quien viaja especialmente a Lima para compartir su visión y liderazgo sobre el ecosistema de IBM Z.
*   **Público Objetivo:** Estudiantes de últimos ciclos (8vo en adelante) y egresados de carreras de Ingeniería de Sistemas, Software, Ciencias de la Computación o afines.
*   **Beneficios:**
    *   Constancia de participación oficial emitida por UTP.
    *   Acceso a rutas de aprendizaje y certificaciones digitales gratuitas a través de **IBM Z Xplore**.
    *   Networking con profesionales del equipo de IBM Z y la comunidad LEAD UTP.
    *   Ingreso 100% gratuito.

---

## 🛠️ Tecnologías Utilizadas

El proyecto ha sido desarrollado utilizando un stack de desarrollo web moderno centrado en rendimiento, accesibilidad y diseño premium:

*   **[React 19](https://react.dev/):** Biblioteca principal de JavaScript para construir la interfaz de usuario modular basada en componentes.
*   **[Vite 8](https://vite.dev/):** Herramienta de compilación ultrarrápida y entorno de desarrollo (HMR).
*   **[Tailwind CSS v4.0](https://tailwindcss.com/):** Framework CSS utilitario para lograr un diseño estilizado, dinámico y responsivo, integrado directamente como plugin de Vite (`@tailwindcss/vite`).
*   **Google Fonts:** Tipografías corporativas y profesionales:
    *   *IBM Plex Sans* para textos e interfaces limpias.
    *   *IBM Plex Mono* para detalles técnicos, fechas y códigos.
*   **Material Symbols Outlined:** Iconografía moderna de Google utilizada en las diferentes secciones del sitio.

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura limpia, separando la lógica de presentación de los datos del contenido para facilitar actualizaciones futuras.

```text
leadutp-ibmz/
├── public/                 # Recursos estáticos servidos directamente
│   ├── images/             # Imágenes y fotos oficiales (logos, ponente, etc.)
│   ├── favicon.svg         # Icono del sitio web
│   └── icons.svg           # Set de iconos
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Componentes React modulares y reutilizables
│   │   ├── AgendaItem.jsx         # Tarjeta individual para el cronograma del evento
│   │   ├── AgendaSection.jsx      # Sección completa de la agenda del evento
│   │   ├── BenefitCard.jsx        # Tarjeta para mostrar cada beneficio
│   │   ├── BenefitsSection.jsx    # Sección que recopila las ventajas de asistir
│   │   ├── FadeInUp.jsx           # Componente de animación/transición de entrada
│   │   ├── Footer.jsx             # Pie de página con enlaces y modales de Políticas/Términos
│   │   ├── HeroSection.jsx        # Cabecera interactiva y atractiva de la página
│   │   ├── Modal.jsx              # Modal reutilizable para visualizar Políticas o Términos
│   │   ├── Navbar.jsx             # Barra de navegación superior responsiva
│   │   ├── RegistrationSection.jsx # Sección para el registro oficial (Iframe de Luma)
│   │   ├── RequirementsSection.jsx# Requisitos de ingreso y público objetivo
│   │   └── SpeakerSection.jsx     # Perfil y biografía de la ponente principal
│   ├── data/               # Datos de contenido centralizados
│   │   └── content.js      # Textos, enlaces, agenda y configuraciones legales del evento
│   ├── App.jsx             # Componente raíz que organiza las secciones de la página
│   ├── index.css           # Estilos globales y configuración/directivas de Tailwind CSS
│   └── main.jsx            # Punto de entrada de React 19 para renderizar en el DOM
├── index.html              # Estructura HTML base y carga de fuentes externas
├── package.json            # Configuración de dependencias de npm y scripts de ejecución
├── vite.config.js          # Configuración del servidor y compilador Vite
└── eslint.config.js        # Reglas de análisis de calidad de código (Linter)
```

---

## 🚀 Instrucciones de Configuración y Ejecución

Para iniciar el proyecto en tu entorno local, asegúrate de tener instalado [Node.js](https://nodejs.org/).

### 1. Instalar dependencias
```bash
# Instalar los paquetes necesarios del proyecto
npm install
```

### 2. Ejecutar el servidor de desarrollo
Inicia el entorno de desarrollo local con recarga rápida en tiempo real (HMR).
```bash
npm run dev
```
*El sitio estará disponible por defecto en `http://localhost:5173` o el puerto que indique la terminal.*

### 3. Compilar para producción
Genera una versión optimizada, minificada y lista para desplegar en producción.
```bash
npm run build
```
*Los archivos optimizados se guardarán en la carpeta `dist/`.*

### 4. Vista previa de la compilación de producción
Prueba localmente la compilación de producción antes de desplegar.
```bash
npm run preview
```

---

## 👨‍💻 Organización
Este proyecto ha sido impulsado por el equipo de **LEAD UTP** en colaboración con el equipo de **IBM Z Skills Team**.
