const usedMobile = require("../models/2ndMobileModel")
const path = require('path')
const multer = require('multer')


// uncomment if needed
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })


const mobilePage = path.join(__dirname, 'frontend/mobile2-index.html')
async function index2(req, res) {
    res.sendFile(mobilePage)
}

async function uploads2(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.')
        }
        const newMobile2 = new usedMobile({
            name: req.body.name,
            file: req.file.buffer,
            RAM: req.body.RAM,
            storage: req.body.storage,
            camera: req.body.camera,
            price: req.body.price,
            warranty: req.body.warranty
        })

        await newMobile2.save()

        console.log('Mobile details uploaded successfully:', newMobile2)
        res.status(201).send('Mobile details uploaded successfully.')
    } catch (err) {
        console.error('Error uploading mobile details:', err)
        res.status(500).send('Error uploading mobile details.')
    }
}

const imgpage = path.join(__dirname, 'frontend/get-mobile2.html')
async function oneMobilePage2 (req, res) {
    res.send(imgpage)
}

async function getMobile2(req, res) {
    try {
        const _id = req.params.id
        const mobileData = await usedMobile.findById(_id)

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

async function getAllMobiles2(req, res) {
    try {
        const allMobileData = await usedMobile.find()
        res.send(allMobileData)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {index2, uploads2, getMobile2, getAllMobiles2, oneMobilePage2}