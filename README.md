# Worldlens
La aplicación permite a los usuarios descubrir estadísticas clave de cada país —como población, área, región, capital, idiomas y banderas— y realizar comparaciones entre varios países para visualizar diferencias y rankings basados en distintos indicadores.
# 🌍 WorldLens — Country Intelligence

WorldLens es una aplicación web interactiva que permite explorar, analizar y comparar información de países alrededor del mundo utilizando datos en tiempo real provenientes de la REST Countries API.

La aplicación está diseñada para ofrecer una forma visual y sencilla de analizar datos demográficos y geográficos, permitiendo a los usuarios descubrir diferencias entre países mediante comparaciones y rankings basados en distintos indicadores.

---

# 🚀 Características

### 🌎 Exploración global

Explora información básica de todos los países del mundo incluyendo:

* nombre
* bandera
* población
* área
* región y subregión
* capital
* idiomas
* índice Gini

### ⚖️ Comparación de países

Selecciona varios países y compáralos directamente para analizar diferencias en:

* población
* tamaño territorial
* indicadores socioeconómicos

Esto permite entender rápidamente cómo se posicionan los países entre sí.

---

### 🏆 Rankings

La aplicación permite visualizar rankings basados en distintos indicadores como:

* países más poblados
* países con mayor área
* comparaciones entre regiones
* índice gini
* densidad 
* idiomas

---

### 🌐 Datos en tiempo real

Los datos se obtienen directamente desde la **REST Countries API**, asegurando información actualizada de cada país.

---

# 🛠️ Tecnologías utilizadas

* React
* JavaScript (ES6+)
* Fetch API
* HTML5
* CSS3

API utilizada:

* REST Countries API

---

# 📊 Datos obtenidos de la API

La aplicación utiliza los siguientes campos de la API:

* `name`
* `flags`
* `population`
* `area`
* `region`
* `subregion`
* `capital`
* `languages`
* `cca3`
* `gini`

Estos datos permiten realizar análisis comparativos entre países.

---

# ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/worldlens.git
```

Entra al proyecto:

```bash
cd worldlens
```

Instala las dependencias:

```bash
npm install
```

---

# ▶️ Ejecutar la aplicación

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

o

```bash
npm start
```

Luego abre en el navegador:

```
http://localhost:3000
```

---

# 📡 Consumo de la API

La aplicación obtiene datos usando el endpoint:

```
https://restcountries.com/v3.1/all
```

y filtra los campos necesarios para mejorar el rendimiento.

Ejemplo del servicio utilizado:

```javascript
const BASE = 'https://restcountries.com/v3.1';
const FIELDS = 'name,flags,population,area,region,subregion,capital,languages,cca3,gini';
```

---

# 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como parte de un portafolio para demostrar habilidades en:

* consumo de APIs externas
* manejo de estado en React
* desarrollo de interfaces interactivas
* visualización y comparación de datos

---

# 🤝 Contribuciones

Las contribuciones son bienvenidas.

Puedes:

1. hacer un fork del proyecto
2. crear una nueva rama
3. enviar un pull request

---