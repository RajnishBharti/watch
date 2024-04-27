//import { getToken } from "next-auth/jwt";
//import UserModel from "../../../models/user";
import productModel from "../../../models/product";
import dbConnect from "../../../utils/dbConnect";

const productItemField = {
  name: 1,
  slug: 1,
  sku: 1,
  image: 1,
  categories: 1,
  unit: 1,
  unitValue: 1,
  price: 1,
  discount: 1,
  shortDescription: 1,
  date: 1,
  type: 1,
  quantity: 1,
};

export default async function apiHandler(req, res) {
  const { method } = req;
  //const secret = process.env.AUTH_SECRET;
  //const session = await getToken({ req, secret });
 // if (!session)
  //  return res
  //    .status(403)
  //    .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
   // case "GET":
    case "POST":
      try {
       // const user = await UserModel.findById(session.user.id).select({
        //  favorite: 1,
       // });
       // res.status(200).json({ success: true, wishlist: user.favorite.length });
       const ids = req.body.idList;
        const data = await productModel
          .find()
          .where("_id")
          .in(ids)
          .select(productItemField)
          .exec();
        res.status(200).json({ success: true, data });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
