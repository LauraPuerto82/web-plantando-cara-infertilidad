import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configuración para usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para la página de autora
app.get('/author', (req, res) => {
    res.render('author');
});

// Ruta para la página el libro
app.get('/the-book', (req, res) => {
    res.render('the-book');
});

// Ruta para la página comprar el libro
app.get('/buy-the-book', (req, res) => {
    res.render('buy-the-book');
});

// Ruta para la página prensa
app.get('/press', (req, res) => {
    res.render('press');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

