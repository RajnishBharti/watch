import CategoryModel from "~/models/category";
import dbConnect from "~/utils/dbConnect";


export default async function apiHandler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { type } = req.query;

          const data = await CategoryModel.findOne({slug: type});
          res.setHeader(
            "Cache-Control",
            "s-maxage=300, stale-while-revalidate"
          );
          res.status(200).json({
            success: true,
            catego: data,
          });
        
      } catch (err) {
        console.log(err.message);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}