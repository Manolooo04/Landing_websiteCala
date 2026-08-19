# Club Cala — Plataforma SaaS de Fidelización Multicanal

Plataforma integral de lealtad para restaurantes y MYPEs basada en **Apple Wallet**, **Google Wallet** y mensajería automatizada en tiempo real mediante **WhatsApp Business Cloud API (Meta)**.

---

## 🚀 Ecosistema de la Plataforma

* **Panel de Administración Web (SaaS B2B):** [https://vercel-cala-project.vercel.app/](https://vercel-cala-project.vercel.app/)[cite: 2]
* **Registro de Clientes (PWA / Wallet Pass QR):** [https://oakberry-wallet.vercel.app/](https://oakberry-wallet.vercel.app/)[cite: 2]
* **App de Caja para Tiendas:** `OakBerry-Caja-v1.0.0.apk` (Paquete Android nativo)

---

## 🏗️ Arquitectura y Flujos del Sistema

La plataforma desacopla la operativa física de tienda de la comunicación saliente:

[ FRONTEND CLIENTE ] ──► [ WALLET PASS ] ──► [ POS / CAJA APK ] ──► [ META CLOUD API ]
Registro vía QR         Apple / Google       Suma de estampillas      5 Triggers automáticos
en vitrina              Wallet               y validación de canje    al WhatsApp del cliente


### 1. Operativa en Tienda (Detalles dentro de Tarjetas / Micro-DB)
Cada tarjeta (ej. *Oakberry Chacarilla*) funciona como una base de datos local contextualizada para la sede:
* **Resumen:** Indicadores de uso, pases activos y estado de salud de Meta API[cite: 2].
* **Configuración:** Diseño visual del Pass para Apple y Google Wallet[cite: 2].
* **Ver Clientes:** Base local con avance de estampillas y estado de vinculación (`Wallet Instalado: Sí/No`)[cite: 2].
* **Recompensas:** Reglas del programa (12 sellos Classic, 14 Works, 15 The Oak)[cite: 2].
* **Historial de Canjeos:** Trazabilidad transaccional en caja con monitor pasivo de entrega de WhatsApp (`✓✓ Leído`, `✓✓ Entregado`, `⚠ Fallido`)[cite: 2].
* **Zona de Peligro:** Desactivación o borrado de tarjeta[cite: 2].

### 2. Motor de Comunicación (Marketing > WhatsApp)
Centraliza la salida de mensajes transaccionales y campañas masivas[cite: 2]:
* **Automatizaciones (Triggers Transaccionales - UTILITY):**
  1. `bienvenida_program`: Se dispara al guardar el Pass en Apple/Google Wallet[cite: 2].
  2. `estampillas_acumuladas`: Se dispara tras el escaneo en caja desde la APK móvil[cite: 2].
  3. `canje_disponible`: Notifica premio listo o pase a tarjeta superior (Classic $\rightarrow$ Works $\rightarrow$ The Oak)[cite: 2].
  4. `reactivacion_visita`: CronJob que evalúa 7 a 14 días de inactividad con oferta FOMO[cite: 2].
  5. `birthday_oak`: CronJob diario que envía saludo y regalo en la fecha de cumpleaños[cite: 2].
* **Campañas (MARKETING):** Envíos masivos programados para festividades (Navidad, Fiestas Patrias, Halloween)[cite: 2].
* **Geopush:** Notificaciones nativas geolocalizadas al aproximarse al local[cite: 2].
* **Trazabilidad y Logs:** Auditoría detallada con webhooks de Meta y reintentos automáticos (*Exponential Backoff*)[cite: 2].

---

## 📂 Estructura del Repositorio

cala-saas/
├── public/
│   ├── images/
│   │   ├── passes/              # Assets visuales de tarjetas (Classic, Works, The Oak)
│   │   └── brand/               # Logos de franquicias y marca Cala
│   └── downloads/
│       └── OakBerry-Caja-v1.0.0.apk  # APK de caja distribuible
├── src/
│   ├── components/
│   │   ├── cards/               # Vistas de Micro-DB (Clientes, Canjes, Recompensas)
│   │   ├── marketing/           # Gestor de Triggers, Simulador WABA y Logs
│   │   └── help/                # Sección de Ayuda y FAQ interactivo
│   ├── pages/
│   │   ├── api/
│   │   │   ├── webhooks/meta.ts # Listener de estados de WhatsApp (sent, read, failed)
│   │   │   ├── wallet/pass.ts   # Generador y firmador de pases Apple/Google
│   │   │   └── cron/            # Tareas programadas de reactivación y cumpleaños
│   │   ├── admin/               # Panel B2B Club Cala
│   │   └── register/            # Landing responsiva de registro QR
│   └── styles/
│       └── globals.css          # Configuración de diseño en modo oscuro
└── README.md


---

## ⚙️ Configuración y Despliegue Local

### 1. Requisitos Previos
* Node.js 18+ instalado.
* Cuenta de Desarrollador en **Meta for Developers** (WhatsApp Cloud API configurada)[cite: 2].
* Certificados de Apple Developer (`Pass Type ID`) y Service Account de Google Wallet API.

### 2. Variables de Entorno (`.env.local`)
Crea un archivo `.env.local` en la raíz con las siguientes credenciales:

```env
# Meta / WhatsApp Cloud API
META_WA_API_VERSION=v20.0
META_ACCESS_TOKEN=tu_token_de_acceso_permanente
META_WABA_ID=tu_waba_id
META_PHONE_NUMBER_ID=tu_phone_number_id
META_WEBHOOK_VERIFY_TOKEN=token_personalizado_de_verificacion

# Apple & Google Wallet
APPLE_PASS_TYPE_IDENTIFIER=pass.pe.cala.oakberry
APPLE_TEAM_ID=XXXXXXXXXX
GOOGLE_WALLET_ISSUER_ID=tu_issuer_id_de_google
3. Ejecución
Bash
# Instalar dependencias
npm install

# Iniciar en entorno local
npm run dev
El panel estará disponible en http://localhost:3000.

📋 Checklist de Lanzamiento a Producción
[ ] Completar verificación del negocio en Meta Business Manager[cite: 2].

[ ] Registrar y solicitar aprobación de las 5 plantillas oficiales UTILITY en Meta[cite: 2].

[ ] Vincular el webhook de producción con el endpoint /api/webhooks/meta[cite: 2].

[ ] Cargar certificados de producción para Apple Wallet (.p12 / WWDR) y Google Wallet Issuer[cite: 1].

[ ] Distribuir la APK OakBerry-Caja-v1.0.0.apk al personal de tienda[cite: 2].
