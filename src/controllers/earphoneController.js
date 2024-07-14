const earphone = require("../models/earphoneModel")
const path = require('path')
const multer = require('multer')


// uncomment if needed
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


const mobilePage = path.join(__dirname, 'frontend/earphone-index.html')
async function index3(req, res) {
    res.sendFile(mobilePage)
}

async function uploads3(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.')
        }
        const newEarphone = new earphone({
            name: req.body.name,
            file: req.file.buffer,
            bluetooth: req.body.bluetooth,
            battery: req.body.battery,
            colour: req.body.colour,
            price: req.body.price
        })

        await newEarphone.save()

        console.log('Earphone details uploaded successfully:', newEarphone)
        res.status(201).send('Earphone details uploaded successfully.')
    } catch (err) {
        console.error('Error uploading earphone details:', err)
        res.status(500).send('Error uploading earphone details.')
    }
}

const imgpage = path.join(__dirname, 'frontend/get-mobile2.html')
async function oneMobilePage3 (req, res) {
    res.send(imgpage)
}

async function getMobile3(req, res) {
    try {
        const _id = req.params.id
        const earphoneData = await earphone.findById(_id)

        if (!earphoneData) {
            return res.status(404).send('Earphone not found')
        } else {
            res.send(earphoneData)
            // res.sendFile(imgpage)
        }
    } catch (err) {
        res.status(500).send('Error retrieving earphone: ' + err)
    }
}

async function getAllMobiles3(req, res) {
    try {
        const allEarphoneData = await earphone.find()
        res.send(allEarphoneData)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {index3, uploads3, getMobile3, getAllMobiles3, oneMobilePage3}