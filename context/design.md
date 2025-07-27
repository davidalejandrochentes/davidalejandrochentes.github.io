# Design – Diseño visual y estilo general
En la carpeta img dentro de assets se encuentra la imagen fondo.jpg. Quiero que esta imagen sea el fondo de toda mi web. Es decir, todos los elementos de la web deben aparecer sobre esa imagen al hacer scroll, sin distorsionarla. De esta forma, lograremos que el efecto glassmorphism de los componentes se vea atractivo al subir o bajar por la página.

## Paleta de colores principal
Inspirado en tonos vibrantes con buen contraste para destacar sobre fondos translúcidos.

- **Fondo claro:** `#F9F9F9` o degradado suave
- **Texto oscuro:** `#1A1A1A`
- **Texto gris:** `#666666`
- **Vidrio/fondo translúcido:** `rgba(255, 255, 255, 0.1)` con desenfoque

## Tipografía
- **Principal:** `Inter`, `Poppins` o `Rubik` – Modernas, legibles, elegantes.
- **Secundaria (opcional para títulos):** `Playfair Display` o `Sora` para dar personalidad.

## Estilo visual general
- Diseño centrado en **glassmorphism**:
  - Fondos con desenfoque (`backdrop-blur`)
  - Opacidad y bordes suaves
  - Sombras internas o externas para crear profundidad
- Bordes redondeados (`rounded-2xl`)
- Sombras suaves (`shadow-lg`, `drop-shadow`)
- Layout en **Flexbox** o **Grid** para estructura responsive
- Espaciado generoso (`p-6`, `m-4`) para aire visual

## Elementos con efecto glassmorphism
Aplicar este efecto especialmente en:

### 🧭 Navbar (menú de navegación)
- Fondo semitransparente con desenfoque (`bg-white/10`, `backdrop-blur-md`)
- Borde inferior sutil (`border-b border-white/20`)
- Links con efecto hover suave

### 🔘 Botones
- Fondo translúcido con desenfoque o gradiente
- Bordes sutiles, íconos o texto con buen contraste
- Hover con escala suave (`transition-transform scale-105`)

### 🧱 Tarjetas (proyectos, servicios)
- Fondo tipo vidrio con desenfoque (`backdrop-blur`, `bg-white/10`)
- Borde con brillo tenue (`border border-white/15`)
- Texto bien contrastado, íconos representativos

### 📝 Formularios de contacto
- Inputs con fondos translúcidos y bordes suaves
- Placeholder con opacidad baja
- Botón de envío con efecto glass

## Iconografía
- Íconos vectoriales modernos: [Lucide](https://lucide.dev/), Tabler Icons o Font Awesome.
- Íconos representando tecnologías y acciones (GitHub, correo, enviar, etc.)

## Diseño responsive
- Mobile-first.
- Navbar con menú hamburguesa.
- Botones y tarjetas adaptables.
- Tipografía legible en todos los tamaños.
