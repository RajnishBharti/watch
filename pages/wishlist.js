import { Trash3 } from "@styled-icons/bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import HeadData from "~/components/Head";
import ImageLoader from "~/components/Image";
import { postData, stockInfo } from "~/lib/clientFunctions";
import { updateWishlist } from "~/redux/cart.slice";
import Product from "~/components/Shop/Product/product";
import c from "../styles/compare.module.css";

const GlobalModal = dynamic(() => import("~/components/Ui/Modal/modal"));
const Spinner = dynamic(() => import("~/components/Ui/Spinner"));
const ProductDetails = dynamic(() =>
  import("~/components/Shop/Product/productDetails"),
);

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { wishlist } = useSelector((state) => state.cart);
  const { settingsData } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  async function getData() {
    const url = `/api/home/wishlist`;
    const resp = await postData(url, { idList: wishlist });
    resp.success ? setData(resp.data) : null;
  }

  useEffect(() => {
    if (wishlist.length > 0) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlist]);

  //popup product viewer track
  useEffect(() => {
    if (router.query.slug) {
      setIsOpen(true);
    }
  }, [router.query.slug]);

  //modal close handler
  const handleCloseModal = () => {
    router.push("/wishlist", undefined, { shallow: true });
    setIsOpen(false);
  };

  function removeItem(id) {
    const filtered = wishlist.filter((x) => x !== id);
    dispatch(updateWishlist(filtered));
    toast.success("Item has been removed from wishlist");
  }

  return (
    <>
      <HeadData title="Wishlist" />
      <div className="row">
        <h1 className={c.heading}>Wishlist</h1>
        {wishlist.length === 0 && (
        <p className="text-center py-5 mt-3 mb-_5 fw-bold">
            No products in wishlist
          </p>
        )}
        <div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2'>
         {data.map((item, idx) => (
                <Product
              product={item}
              key={item._id}
              layout={"col-lg-4 col-md-6 col-sm-6 col-12"}
              link={`/profile?slug=${item.slug}&tab=1`}
              button={true}
              deleteButton={
                <button onClick={() => removeItem(item._id)}>
                  <Trash3 width={15} height={15} />
                </button>
              }
            />
                ))}
                </div>
          
      </div>
      <GlobalModal
        small={false}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      >
        {router.query.slug && (
          <ProductDetails productSlug={router.query.slug} />
        )}
      </GlobalModal>
    </>
  );
};

export default Wishlist;
