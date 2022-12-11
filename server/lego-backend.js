var express = require('express')
var cors = require('cors')
var sets = require('./sets.json')

const port = 3001;
const app = express();

app.use(cors())
app.use(express.json());
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    }
});

app.get('/sets', function (req, res) {
    let search = req.query.search;
    let limit = req.query.limit || 100;

    let filteredSets = sets
    if (search) {
        filteredSets = filteredSets.filter(function (set) {
            return (set.setName && set.setName.toLowerCase().indexOf(search.toLowerCase()) >= 0)
                || (set.setId && set.setId.toLowerCase().indexOf(search.toLowerCase()) >= 0)
                || (set.themeName && set.themeName.toLowerCase().indexOf(search.toLowerCase()) >= 0)
        })
    }

    res.json(filteredSets.slice(0, limit));
});


let favorites = [];
app.get('/favorites', function (req, res) {
    res.json(favorites);
})

app.post('/favorites', function (req, res) {

    let id = req.body.setId;

    let newFavorite = sets.find(function (set) {
        return set.setId == id;
    });

    if (!newFavorite) {
        res.status(400).json()
        return
    }

    if (favorites.some(function (set) {
        return set.setId == id;
    })) {
        res.status(400).json()
    } else {
        newFavorite.isFavorite = true;
        favorites.push(newFavorite)
        res.status(201).json()
    }
})

app.delete('/favorites/:setId', function (req, res) {
    let id = req.params.setId;

    favorites = favorites.filter(function (set) {
        return set.setId !== id
    });
    const FavoriteIndex = sets.findIndex(set => set.setId === id);
    sets[FavoriteIndex].isFavorite = false;

    res.status(200).json()
})
