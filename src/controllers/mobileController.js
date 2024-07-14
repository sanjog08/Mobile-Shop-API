const Mobile = require("../models/mobileModel")
const path = require('path')
const multer = require('multer')


// uncomment if needed
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })


const mobilePage = path.join(__dirname, 'frontend/mobile-index.html')
async function index(req, res) {
    res.sendFile(mobilePage)
}

async function uploads(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.')
        }
        const newMobile = new Mobile({
            name: req.body.name,
            file: req.file.buffer,
            RAM: req.body.RAM,
            storage: req.body.storage,
            price: req.body.price,
            camera: req.body.camera
        })

        await newMobile.save()

        console.log('Mobile details uploaded successfully:', newMobile)
        res.status(201).send('Mobile details uploaded successfully.')
    } catch (err) {
        console.error('Error uploading mobile details:', err)
        res.status(500).send('Error uploading mobile details.')
    }
}

const imgpage = path.join(__dirname, 'frontend/get-mobile.html')
async function oneMobilePage (req, res) {
    res.send(imgpage)
}

async function getMobile(req, res) {
    try {
        const _id = req.params.id
        const mobileData = await Mobile.findById(_id)

        if (!mobileData) {
            return res.status(404).send('Mobile not found')
        } else {
            res.send(mobileData)
            // res.sendFile(imgpage)
        }
    } catch (err) {
        res.status(500).send('Error retrieving mobile: ' + err)
    }
}

async function getAllMobiles(req, res) {
    try {
        const allMobileData = await Mobile.find()
        res.send(allMobileData)
    } catch (err) {
        res.send(err)
    }
}


module.exports = {index, uploads, getMobile, getAllMobiles, oneMobilePage}