import { Eye, Repeat, SuitHeart } from "@styled-icons/bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ImageLoader from "~/components/Image";
import ReviewCount from "~/components/Review/count";
import { postData, stockInfo } from "~/lib/clientFunctions";
import { updateComparelist, updateWishlist } from "~/redux/cart.slice";
import c from "./product.module.css";

const Product = ({
  product,
  button,
  link,
  deleteButton,
  layout,
  border,
  hideLink,
  cssClass,
  tranding
}) => {
  const { session } = useSelector((state) => state.localSession);
  const settings = useSelector((state) => state.settings);
  const { wishlist: wishlistState, compare: compareState } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const discountInPercent =
    Math.round((100 - (product.discount * 100) / product.price) * 10) / 10;

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(value);

  const addToWishList = () => {
    const pid = product._id;
    const exists = wishlistState.find((x) => x === pid);
    if (exists) {
      toast.warning("This Item already exists on your wishlist");
    } else {
      const __data = [...wishlistState, product._id];
      dispatch(updateWishlist(__data));
      toast.success("Item has been added to wishlist");
    }
  };

  //   const addToCompareList = () => {
  //     const pid = product._id;
  //     const exists = compareState.find((x) => x === pid);
  //     if (exists) {
  //       toast.warning("This Item already exists on your compare list");
  //     } else {
  //       const __data = [...compareState, product._id];
  //       dispatch(updateComparelist(__data));
  //       toast.success("Item has been added to compare list");
  //     }
  //   };

  const itemLink = link ? link : `/gallery?slug=${product.slug}`;
  const ItemLayout = layout ? layout : "row";
  console.log(product);
  return (
    <div
      className={`col ${product.quantity === 0 ? `${c.outofstockProduct}` : ""
        }`}
      id="product-croul"
    // id={product.quantity}
    >
     
      <div
        className={`hotProductCol text-center ${c.card} ${border ? c.border : ""
          } ${cssClass ? cssClass : ""}`}
      >
        

          {!tranding?null:<div className={c.tranding}>{tranding.split(" ")[0]}</div>}
        <div className={c.hover_buttons}>
         
          <button onClick={addToWishList}> 
            <SuitHeart width={15} height={15} />
            <i className="fa fa-heart-o"></i>
            {/* <img src='/images/heartIcon.png' width={15}  /> */}
          </button>


          {deleteButton && deleteButton}
        </div>
        <div>
          <Link href={`/watches/${product.categories[0]}/${product.slug}`}>
            {product.quantity === 0 && (
              <div class={`${c.overlay}`}>OUT OF STOCK</div>
            )}
            <div
              className={`${c.container} ${product.quantity === 0 ? `${c.outofstock}` : ""
                }`}
            >
              <ImageLoader
                src={product.image[0].url}
                alt={product.name}
                width={175}
                height={262.95}
                style={{ height: "auto" }}
                quality={100}
              />
            </div>
          </Link>

          {product.discount < product.price && (
            <div className={c.discount}>{discountInPercent}%</div>
          )}

          <div className={c.nameContainer}>
            <p className={c.unit}>{product.brand}</p>
            {/* <ReviewCount reviews={product.review || []} showCount /> */}
            <div className={c.name}>
              <Link className={c.productLink} href={`/product/${product.slug}`}>
                {product.sku}
              </Link>
            </div>

            {/*
            <p className={c.unit}>{`${product.unitValue} ${product.unit}`}</p>
            
            <div className={c.price_con}>
              {product.discount < product.price && (
                <p className={c.price}>
                {settings.settingsData.currency.symbol}
                 ₹&nbsp;  {product.discount}
                </p>
              )}
              <p
                className={
                  product.discount < product.price ? c.price_ori : c.price
                }
              >
                {settings.settingsData.currency.symbol}
                {product.price}
              </p>
            </div>
            */}
          </div>
          {/*
          {button && (
            <div className={c.buttonContainer}>
              {stockInfo(product) ? (
                <Link
                  href={itemLink}
                  as={`/product/${product.slug}`}
                  scroll={false}
                  shallow={true}
                  className={c.button}
                >
                  BUY NOW
                </Link>
              ) : (
                <button className={c.button} disabled>
                  OUT OF STOCK
                </button>
              )}
            </div>
          )}
          */}
          <div class="btnaction priceRow price_view_btn">
            {/* <div class='productView'><Link href={`/product/${product.slug}`}> <i class='fa fa-arrow-circle-o-right'></i> View Details </Link></div>*/}
            <div className="priceHover">
              <div className={c.price}>
                {product.discount < product.price
                  ? numberFormat(product.discount)
                  : numberFormat(product.price)}{" "}              
              </div>
              <div className={c.taxes}>(incl. of all taxes)</div>
            </div>
            {/* <div className="priceHover"> 
          {product.discount < product.price && (
          ₹&nbsp;{ product.discount}
          )}
          
                <p className={ product.discount < product.price ? c.price_ori : c.price}>
                {product.price}
              </p>
              
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
