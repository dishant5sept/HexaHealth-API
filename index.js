const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()



app.use(express.json());




app.get('/',(req , res) => {
    res.send("Hello from Node API Server Dishant");
});

app.get('/api/products', async (req,res) => {
    try{
        const product = await product.find({});
        res.status(200).json(products);
    }
    catch (error){
        res.status(500).json({message:error.message});
    }
});

app.get('/api/product/:id', async (req,res)=> {

    try{
        const { id } = req.params;

        const product = await product.findById(id);
        res.status(200).json(product);

    } catch{
        res.status(500).json({message: error.message})
    }
});

app.post('/api/products', async (req,res) => {
    try{
        const product = await product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//update a product

app.put('/api/product/:id',async (req, res) => {
    try{
        const {id} = req.params;

        const product = await product.findByIdAndUpdate(id, req.body);

        if (!product){
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await product.findById(id);
        res.status(200).json(updatedProduct);
        

    } catch (error){
        res.status(500).json({message: error.message});
    }
});


// delete a product

app.delete('/api/product/:id', async (req,res)=>{

    try{
        const {id} = req.params;

        const product = await product.findByIdAndDelete(id);

        if (!product){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch (error){
        res.status(500).json({message: error.message});
    }
})








mongoose.connect("mongodb+srv://dishantyadav10s:QcEodaw7Cqmqz8qb@hexaapi.mjwvb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=HexaAPI")
.then(()=> {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed!");
});
