const express = require('express');
const router = express.Router();

router.use(express.json());

const itemList = [{
    id: 1,
    name: "Pen",
    description: "This is just a pen Bro"
}, {
    id: 2,
    name: "Water",
    description: "A little bit of water"
}, {
    id: 3,
    name: "Buttefly",
    description: "A tiny butterfly"
}, {
    id: 4,
    name: "Flower",
    description: "Look this rose"
}, {
    id: 5,
    name: "Cellphone",
    description: "Can you call me on my cellphone"
}, {
    id: 6,
    name: "Laptop",
    description: "hacking is life"
}, {
    id: 7,
    name: "Lamp",
    description: "A lamp to unlight the place"
}, ]


//Get request
router.get('/', (req, res) => {
    if (!itemList) {
        return res.status(400).send("Sorry Items not found..")
    }
    res.json(itemList);
})

router.get('/:id', (req, res) => {
    if (!itemList[req.params.id - 1]) {
        return res.status(400).send("Sorry the specific item you asked was not found");
    }
    res.json(itemList[req.params.id - 1]);
})

//Post requests
router.post('/', (req, res) => {
    const item = {
        id: itemList.length + 1,
        name: req.body.name,
        description: req.body.description,
    }
    itemList.push(item);
    res.json(item);
})

//Patch requests
router.patch("/:id", (req, res) => {
    if (!itemList[req.params.id - 1]) {
        return res.status(400).send("Sorry the specific item you tried to update was not found");
    }

    let newItem = itemList[req.params.id - 1];
    newItem.name = req.body.name;
    newItem.description = req.body.description;

    res.json(newItem);
})

//Delete requests
router.delete("/:id", (req, res) => {
    if (!itemList[req.params.id - 1]) {
        return res.status(400).send("Sorry the specific item you tried to delete was not found");
    }

    itemList.splice(itemList.indexOf(itemList[req.params.id - 1]), 1)

    res.json(itemList);
})

module.exports = router;