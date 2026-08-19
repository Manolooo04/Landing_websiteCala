Sitio web — Grupo CALA
Prototipo de sitio web corporativo para Cala Negocios e Inversiones SAC.

Estructura
cala-website/
├── index.html          → sitio completo (HTML + CSS + JS en un solo archivo)
├── images/
│   ├── equipo-1.jpg    → foto equipo (carrusel)
│   ├── equipo-2.jpg    → foto equipo (carrusel)
│   ├── equipo-3.jpg    → foto equipo (carrusel)
│   └── equipo-4.jpg    → foto equipo (carrusel)
└── README.md
Cómo verlo
Abrir index.html directamente en el navegador, o servirlo con cualquier servidor estático:

npx serve .
Contenido pendiente de reemplazar
Estos valores están de ejemplo dentro de index.html — buscar y reemplazar:

contacto@cala.pe → correo corporativo real
+51 999 999 999 → teléfono real
wa.me/51999999999 → número real de WhatsApp
Links de Instagram / LinkedIn (actualmente #)
Notas técnicas
Sin frameworks ni dependencias — HTML/CSS/JS puro.
Tipografías vía Google Fonts (Space Grotesk + Inter) — requiere conexión a internet para cargar.
El carrusel de fotos del equipo rota automáticamente cada ~3.2s (ver <script> al final de index.html).
Diseñado para agregar más fotos al carrusel fácilmente: solo sumar una línea <img src="images/equipo-N.jpg"> dentro de #teamCarousel.
