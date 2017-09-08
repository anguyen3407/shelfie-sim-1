module.exports = {
    getShelf: (req, res) => {
        let { id } = req.params;
        req.app.get('db').get_shelf(id).then( shelf => {
            res.status(200).send(shelf);
        }).catch(err => console.log(err));
    } ,
    getBin: (req, res) => {
        let {id} = req.params;
        let ids = id.toString();
        let i = ids[0];
        let d = ids[1];
        req.app.get('db').get_bin([i, d]).then(bin => {
            res.status(200).json( bin);
        }).catch(err => console.log(err));
    } ,
    updateBin: (req,res) => {
        let {id} = req.params;
        let ids = id.toString();
        let i = ids[0];
        let d = ids[1]; 
        let {name, price} = req.body;
        req.app.get('db').update_bin([i,d,name,price]).then( bin => {
            res.status(200).send(bin);
        }).catch(err => console.log(err));
    } ,
    deleteBin: (req, res) => {
        let {id} = req.params;
        let ids = id.toString();
        let i = ids[0];
        let d = ids[1];
        req.app.get('db').delete_bin([i, d]).then(bin => {
            res.status(200).send('bin deleted');
        }).catch(err => console.log(err));
    },
    createBin: (req, res)  => {
        let {id} = req.params;
        let ids = id.toString();
        let i = ids[0];
        let d = ids[1]; 
        let {name, price} = req.body;
        req.app.get('db').create_bin([i,d,name,price]).then(bin => {
            res.status(200).send(bin);
        }).catch(err => console.log(err));
    }
}