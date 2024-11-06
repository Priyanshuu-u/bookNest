import express from 'express';
import { getBook, sellBook , getBooksByUser} from '../controller/book.controller.js';
const router=express.Router();

router.get("/",getBook);
router.post('/sell', sellBook);
router.get('/profile', getBooksByUser);
export default router;