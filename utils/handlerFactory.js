import catchAsync from "../utils/catchAsync.js";

class HandlerFactory {
  createOne = (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.create({
        data: req.body,
      });
      return res.status(201).json({ status: 201, data, msg: "Data Created" });
    });

  deleteOne = (Model) =>
    catchAsync(async (req, res, next) => {
      const { id } = req.params;
      const data = await Model.delete({
        where: {
          id: parseInt(id),
        },
      });

      if (!data) {
        return res.status(404).json({ status: 404, msg: "Data Not Found" });
      } else {
        return res.status(200).json({ status: 200, msg: "Article Deleted" });
      }
    });

  getAll = (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.findMany();
      return res.status(200).json({
        status: 200,
        data,
        msg: "All Articles Fetched",
      });
    });

  getOne = (Model) =>
    catchAsync(async (req, res, next) => {
      const { id } = req.params;
      const article = await Model.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      if (article) {
        return res.status(200).json({
          status: 200,
          data: article,
          msg: "Single Article Fetched",
        });
      } else {
        return res.status(404).json({
          status: 404,
          msg: "Article Not Found",
        });
      }
    });

  updateOne = (Model) =>
    catchAsync(async (req, res, next) => {
      const { id } = req.params;
      const data = await Model.update({
        where: {
          id: parseInt(id),
        },
        data: req.body,
      });

      return res.status(200).json({
        status: 200,
        data,
        msg: "Article Updated",
      });
    });
}

const factory = new HandlerFactory();

export default factory;
