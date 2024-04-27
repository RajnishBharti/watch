import sessionChecker from "~/lib/sessionPermission";
import attributeModel from "~/models/attributes";
import categoryModel from "~/models/category";
import colorModel from "~/models/colors";
import couponModel from "~/models/coupon";
import orderModel from "~/models/order";
import userModel from "~/models/user";
import dbConnect from "~/utils/dbConnect";

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "general")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
       
        
        const totalOrder = await orderModel.estimatedDocumentCount();
        const totalUser = await userModel.estimatedDocumentCount();
        const totalCategory = await categoryModel.estimatedDocumentCount();
        const totalColor = await colorModel.estimatedDocumentCount();
        const totalCoupon = await couponModel.estimatedDocumentCount();
        const totalAttribute = await attributeModel.estimatedDocumentCount();
        res.status(200).json({
          success: true,
          totalOrder,
          totalUser,
          totalCategory,
          totalColor,
          totalCoupon,
          totalAttribute,
        });
      } catch (err) {
         // throw new Error(err);
        console.log(err);
        //res.status(500).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
