This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📋 Tabla de Contenidos

- [Características](#características)
- [Configuración Inicial](#configuración-inicial)
- [Configuración de YouTube API](#configuración-de-youtube-api)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)

## ✨ Características




- 🎥 Integración con YouTube (muestra el video más reciente automáticamente)
- 📸 Sección de Instagram
- 🎭 Sección de Tour/Eventos
- 🛍️ Sección de Merchandise
- 📱 Diseño responsive (móvil, tablet y escritorio)
- 🎨 Animaciones suaves con Framer Motion
- ⚡ Optimización de rendimiento con Next.js 14

## 🚀 Configuración Inicial

### Requisitos Previos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
# o
yarn install
```

3. Configura las variables de entorno (ver sección siguiente)

## 🔑 Configuración de YouTube API

Este proyecto requiere credenciales de YouTube Data API v3 para funcionar correctamente.

### Para Clientes (No Técnicos)

Si eres el dueño del canal de YouTube y necesitas obtener tus credenciales:

📖 **[Lee el tutorial completo aquí: TUTORIAL_YOUTUBE_API.md](./TUTORIAL_YOUTUBE_API.md)**

### Para Desarrolladores

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega las siguientes variables:

```bash
NEXT_PUBLIC_YOUTUBE_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=tu_channel_id_aqui
```

📖 **[Guía completa de configuración: SETUP_YOUTUBE_CREDENTIALS.md](./SETUP_YOUTUBE_CREDENTIALS.md)**

### Archivos de Referencia

- `TUTORIAL_YOUTUBE_API.md` - Tutorial paso a paso para clientes
- `SETUP_YOUTUBE_CREDENTIALS.md` - Guía técnica para desarrolladores
- `EMAIL_TEMPLATE_CLIENTE.md` - Plantillas de email para enviar al cliente

## 💻 Desarrollo

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Despliegue

### Deploy on Vercel (Recomendado)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**⚠️ IMPORTANTE**: No olvides configurar las variables de entorno en Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega `NEXT_PUBLIC_YOUTUBE_API_KEY` y `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID`
4. Redeploy el proyecto

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Otras Plataformas

También puedes desplegar en:

- **Netlify**: Configura variables en Site settings → Environment
- **AWS Amplify**: App settings → Environment variables
- **Railway/Render**: Environment Variables section

## 📁 Estructura del Proyecto

```
/Users/yira/allison-new/
├── app/
│   ├── api/              # API routes (Instagram, etc.)
│   ├── globals.css       # Estilos globales
│   ├── layout.js         # Layout principal
│   └── page.js           # Página principal
├── components/
│   ├── Banner.js         # Banner principal
│   ├── DynamicVideo.js   # Componente de video de YouTube (API)
│   ├── Footer.js         # Footer del sitio
│   ├── InstagramSection.js    # Sección de Instagram
│   ├── MerchSection.js   # Sección de merchandise
│   ├── Navigation.js     # Barra de navegación
│   ├── TourSection.js    # Sección de fechas de tour
│   └── YouTubeSection.js # Wrapper del componente de YouTube
├── public/
│   └── img/              # Imágenes del sitio
├── .env.local            # Variables de entorno (no se sube a git)
├── .env.example          # Ejemplo de variables de entorno
└── package.json          # Dependencias del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **React 18** - Biblioteca de UI
- **Framer Motion** - Animaciones
- **Tailwind CSS** - Estilos
- **YouTube Data API v3** - Integración de videos

## 📞 Soporte

Si tienes preguntas o problemas:

1. Revisa los archivos de documentación en la raíz del proyecto
2. Verifica que todas las variables de entorno estén configuradas correctamente
3. Consulta la consola del navegador para mensajes de error específicos

## 📄 Licencia

Este proyecto es privado y confidencial.
