import * as tuitsDao from '../tuits/tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.userName = "Shi"
    newTuit.handle = "@Shi"
    newTuit.avatarIcon = "Nsa.jpg"
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);

    // res.json(newTuit);
    res.json(insertedTuit);

}

const findTuits = async (req, res) =>{
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
    // res.send(tuits);
}



const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] =
    //     {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
                    updates);
    res.json(status);
    // res.sendStatus(200);
}



const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    //                          t._id !== tuitdIdToDelete);
    res.json(status);
    // res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
