const express = require('express')
const multer = require('multer')

require('./db/conn')

const app = express()
const upload  = multer()
const port = process.env.PORT || 7000

app.use(express.urlencoded({ extended: true }));

const mobCon = require('./controllers/mobileController')
const mob2Con = require('./controllers/mobile2controller')
const earCon = require('./controllers/earphoneController')


// home page router
app.get('/', (req, res) => {
    res.send("E-Commerce API is runing fine.")
})

// mobile routes
app.get('/mobile-index', mobCon.index)
app.post('/mobile-upload', upload.single('file'), mobCon.uploads)
app.get('/mobile-one/:id', mobCon.getMobile)
app.get('/mobile-page', mobCon.oneMobilePage)
app.get('/mobile-all', mobCon.getAllMobiles)
app.get('/image/:id', mobCon.singleImg)

// 2nd hand mobile routes
app.get('/mobile2-index', mob2Con.index2)
app.post('/mobile2-upload', upload.single('file'), mob2Con.uploads2)
app.get('/mobile2-one/:id', mob2Con.getMobile2)
app.get('/mobile2-all', mob2Con.getAllMobiles2)

// earphone routes
app.get('/earphone-index', earCon.index3)
app.post('/earphone-upload', upload.single('file'), earCon.uploads3)
app.get('/earphone-one/:id', earCon.getMobile3)
app.get('/earphone-all', earCon.getAllMobiles3)



app.listen(port, () => {
    console.log(`Server is listening at port number ${port}`)
});