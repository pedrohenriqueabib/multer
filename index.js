const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname)
    }
});
const upload = multer({storage});

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/', upload.single('img'), (req, res) =>{
    console.log(req.body, req.file);
    res.send('ok');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('running....'));
