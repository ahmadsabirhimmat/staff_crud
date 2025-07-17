import express from 'express'
const router = express.Router()
import {
    getContacts,
    getContact,
    addContactPage,
    addContact,
    updateContactPage,
    updateContact,
    deleteContact
} from '../controller/contact.controller.js'

router.get("/",getContacts) 
//show
router.get("/show-contact/:id",getContact)
//add
router.get("/add-contact",addContactPage)
router.post("/add-contact",addContact)
//update
router.get("/update-contact/:id",updateContactPage)
router.post("/update-contact/:id",updateContact);
//delete
router.get("/delete-contact/:id",deleteContact)
export default router