const express = require('express')
const router = express.Router();

const Contact = require('../modals/contacts');



//data retreiver function

router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contact funtion
router.post('/contacts', (req, res,next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact succefully added'});
        }
    });
    //logic to add contacts
});

//delete contact funtion
router.delete('/contacts/:id', (req, res,next)=>{
    //logic to delete contacts
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;