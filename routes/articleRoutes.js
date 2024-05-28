import { Router } from 'express';
import * as articleController from '../controllers/articleController.js';

const articleRouter = Router();

articleRouter.route('/')
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);

articleRouter.route('/:id')
  .get(articleController.getOneArticle)
  .put(articleController.updateArticle)
  .delete(articleController.deleteArticle);

export default articleRouter;
