import factory from '../utils/handlerFactory.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createArticle  = factory.createOne(prisma.articles);
export const deleteArticle = factory.deleteOne(prisma.articles);
export const getAllArticles = factory.getAll(prisma.articles);
export const getOneArticle = factory.getOne(prisma.articles);
export const updateArticle = factory.updateOne(prisma.articles);