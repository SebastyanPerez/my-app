# 🎵 Music Streaming App

Una aplicación web moderna de streaming de música construida con React, inspirada en plataformas como Spotify. Diseñada con un enfoque en la experiencia del usuario, incluye navegación intuitiva, reproductor de música integrado y exploración de artistas y géneros.

## 🌟 Características

- **🎧 Reproductor de Música Integrado**: Controles completos de reproducción (play, pause, siguiente, anterior, volumen)
- **🔍 Búsqueda Avanzada**: Encuentra rápidamente artistas, géneros y playlists
- **🎨 Interfaz Moderna**: Diseño oscuro con degradados suave y animaciones fluidas
- **📱 Totalmente Responsive**: Funciona perfectamente en desktop, tablet y móvil
- **🎼 Múltiples Secciones**:
  - Home: Recomendaciones personalizadas
  - Explore: Descubre nueva música
  - Genres: Navega por géneros musicales
  - Artists: Explora artistas destacados
  - Playlists: Crea y gestiona tus playlists
- **🌐 Context API**: Gestión de estado global para el reproductor
- **✨ Animaciones Suaves**: Transiciones y efectos visuales modernos

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1**: Framework principal para la interfaz de usuario
- **React Router 7.9.1**: Navegación entre páginas
- **React Icons 4.12.0**: Biblioteca de iconos SVG
- **CSS3**: Estilos modernos con variables CSS, grid y flexbox
- **Create React App 5.0.1**: Herramienta de construcción

## 📦 Instalación

### Requisitos Previos
- Node.js 14.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/SebastyanPerez/my-app.git
cd my-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar la aplicación en modo desarrollo**
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

## 📖 Uso

### Comandos Disponibles

#### `npm start`
Inicia la aplicación en modo de desarrollo con hot reload. Abre [http://localhost:3000](http://localhost:3000) automáticamente.

#### `npm test`
Ejecuta los tests en modo interactivo. Presiona `q` para salir.

#### `npm run build`
Crea una versión optimizada para producción en la carpeta `build/`. Incluye minificación y optimizaciones de rendimiento.

#### `npm run eject`
Expone la configuración de Create React App (irreversible). Solo usar si necesitas personalización avanzada.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/              # Componentes reutilizables
│   │   ├── Avatar.js
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── SearchBar.js
│   │   └── css/
│   ├── layout/              # Componentes de layout principal
│   │   ├── Header.js        # Barra superior con navegación
│   │   ├── Sidebar.js       # Navegación lateral
│   │   ├── MusicPlayer.js   # Reproductor de música
│   │   └── css/
│   └── sections/            # Secciones de contenido
│       ├── WelcomeBanner.js
│       ├── ArtistsSection.js
│       ├── GenresSection.js
│       ├── RecommendedSection.js
│       └── css/
├── Pages/                   # Páginas principales
│   ├── Home.js
│   ├── Explore.js
│   ├── Genres.js
│   ├── Artists.js
│   ├── Playlists.js
│   └── css/
├── context/                 # Context API para estado global
│   └── PlayerContext.js
├── Styles/                  # Estilos globales
│   ├── variables.css        # Variables CSS (colores, spacing, etc)
│   ├── global.css           # Estilos globales
│   └── responsive.css       # Media queries
├── utils/                   # Utilidades
│   ├── constants.js
│   └── mockData.js
├── App.js                   # Componente principal
└── index.js                 # Punto de entrada
```

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Primario**: Púrpura (`#8b5cf6`)
- **Secundario**: Púrpura Oscuro (`#7c3aed`)
- **Fondo Oscuro**: Negro (`#0a0a0a`, `#1a1a1a`)
- **Texto Primario**: Blanco (`#ffffff`)
- **Acentos**: Cyan, Verde, Rojo

### Componentes Principales

#### Button
Botones reutilizables con variantes:
- `btn-primary`: Botón principal con gradiente púrpura
- `btn-secondary`: Botón secundario transparente
- `btn-tertiary`: Botón de borde

```jsx
<Button variant="primary">Explorar</Button>
```

#### Card
Componente de tarjeta para mostrar contenido:
```jsx
<Card title="Artista" subtitle="Género">
  {/* contenido */}
</Card>
```

#### SearchBar
Barra de búsqueda integrada:
```jsx
<SearchBar placeholder="Buscar artistas..." />
```

## 🔄 Context API

### PlayerContext
Gestiona el estado del reproductor de música:
- `currentSong`: Canción actual
- `isPlaying`: Estado de reproducción
- `volume`: Nivel de volumen
- `playlist`: Cola de reproducción

```jsx
import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext';

const MyComponent = () => {
  const { currentSong, isPlaying } = useContext(PlayerContext);
  // ...
};
```

## 📱 Responsive Design

La aplicación se adapta automáticamente a diferentes tamaños de pantalla:

| Dispositivo | Ancho | Cambios |
|------------|-------|---------|
| Desktop | > 1024px | Sidebar visible |
| Tablet | 768px - 1024px | Sidebar reducido |
| Móvil | < 768px | Sidebar colapsable |

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'build' a Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Configura "homepage" en package.json
npm run build
npm run deploy
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

### Mejoras Recientes

- ✨ Sistema de variables CSS mejorado con espaciado, sombras y radio de borde
- 🎨 Estilos globales actualizados con gradientes y efectos modernos
- 🖱️ Efectos hover mejorados en todos los componentes
- 📜 Scrollbar personalizado con tema morado
- 🔧 Mejor accesibilidad con focus visible
- 📱 Responsive design refinado

### Próximas Características

- [ ] Autenticación de usuarios
- [ ] Sincronización con APIs de música real
- [ ] Guardado de playlists
- [ ] Modo oscuro/claro
- [ ] Notificaciones en tiempo real
- [ ] Historial de reproducción

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Sebastian Perez**
- GitHub: [@SebastyanPerez](https://github.com/SebastyanPerez)
- Email: sebastianperezescobedo@gmail.com

## 🙏 Agradecimientos

- Diseño inspirado en Spotify
- Iconos de [React Icons](https://react-icons.github.io/react-icons/)
- Create React App por la configuración inicial
