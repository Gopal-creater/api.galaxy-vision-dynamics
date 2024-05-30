import prisma from "../config/db.config.js";
import factory from "../utils/handlerFactory.js";

export const createArticle = factory.createOne(prisma.articles);
export const deleteArticle = factory.deleteOne(prisma.articles);
export const getAllArticles = factory.getAll(prisma.articles);
export const getOneArticle = factory.getOne(prisma.articles);
export const updateArticle = factory.updateOne(prisma.articles);
