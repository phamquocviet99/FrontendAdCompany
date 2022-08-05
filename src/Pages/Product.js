import { React, useState, useEffect } from "react";
import "./Style/Product.css";
import { motion } from "framer-motion";
import { Form, FormControl, Button } from "react-bootstrap";
import BoxProduct from "../components/BoxProduct/BoxProduct";
import CategoryProductApi from "../api/CategoryProductApi";
import { useParams, useNavigate } from "react-router-dom";
import ProductApi from "../api/ProductApi";
import OnTop from "../components/BacktoTop/OnTop";
function Product() {
  const navigator = useNavigate();
  const [listCategory, setListCategory] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState({ key: "" });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 8,
    countRows: 1,
  });
  const [filters, setFilters] = useState({
    limit: 8,
    page: 0,
  });
  const totalPages = Math.ceil(pagination.countRows / pagination.limit);
  useEffect(() => {
    document.title = "SẢN PHẨM";
    function FindItem(data) {
      var r = [],
        o = {};
      data.forEach(function (a) {
        if (o[a._id] && o[a._id].children) {
          a.children = o[a._id] && o[a._id].children;
        }
        o[a._id] = a;
        if (a.idParent === "none") {
          r.push(a);
        } else {
          o[a.idParent] = o[a.idParent] || {};
          o[a.idParent].children = o[a.idParent].children || [];
          o[a.idParent].children.push(a);
        }
      });
      return r;
    }

    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setListCategory(FindItem(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListCategory();
  }, []);
  useEffect(() => {
    const FetchListProduct = async () => {
      try {
        setLoading(true);
        const response = await ProductApi.getAll(filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProduct(data.data);
          setPagination(data.pageInfo);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const FetchListProductByIDCate = async () => {
      try {
        const response = await ProductApi.getByIdCate(id, filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProduct(data.data);
          setPagination(data.pageInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id === undefined) {
      FetchListProduct();
    } else {
      FetchListProductByIDCate();
    }
  }, [id, filters]);
  function getListProjectByIdCategory(id) {
    navigator(`/san-pham/${id}`);
  }
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
  }

  const FetchListProduct = async () => {
    try {
      const response = await ProductApi.getAll(filters);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setListProduct(data.data);
        setPagination(data.pageInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function BarCategory({ current }) {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
      if (!current.children) {
        getListProjectByIdCategory(current._id);
      }

      setShow((prevState) => !prevState);
    };
    return (
      <div>
        <div
          onClick={toggleShow}
          className="item-cate-project"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{current.name}</p>
          <i
            style={current.children ? { margin: "7px 0" } : { display: "none" }}
            className="fa fa-arrow-down"
          ></i>
        </div>
        {current.children ? (
          <div style={show ? { display: "" } : { display: "none" }}>
            {current.children.map((item, index) => (
              <BarCategory key={index} current={item} />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
  async function handleSearch() {
    try {
      const response = await ProductApi.search(search);
      const data = JSON.parse(JSON.stringify(response));

      if (!data.error) {
        setListProduct(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="banner-product-page">
        <div className="container">
          <div className="title-about">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              sản phẩm
            </motion.h2>
          </div>
        </div>
      </div>
      <article>
        <div className="container">
          <div className="row">
            <div
              className="col-md-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="home-title">
                <p style={{ fontSize: "20px" }} className="font-title-home">
                  danh mục sản phẩm
                </p>
              </div>
              <Form style={{ margin: "20px 0" }} className="d-flex">
                <FormControl
                  onChange={(e) => setSearch({ key: e.target.value })}
                  type="search"
                  placeholder="Search"
                  className="input-search"
                  aria-label="Search"
                />
                <Button onClick={handleSearch} variant=" btn-search">
                  <i style={{ fontSize: "20px" }} className="fa fa-search"></i>
                </Button>
              </Form>
              <div className="list-item panel">
                <div
                  onClick={FetchListProduct}
                  className="item-cate-project"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Tất cả</p>
                </div>
                {listCategory.map((item, index) => (
                  <BarCategory key={index} current={item} />
                ))}
              </div>
            </div>
            <div className="col-md-9 ed-title-thumb">
              {loading ? (
                <></>
              ) : (
                <div className="row">
                  {listProduct?.map((p, index) => (
                    <div className="col-sm-4">
                      <BoxProduct product={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pagination">
          {pagination.page <= 0 ? (
            <></>
          ) : (
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-outline-success"
              disabled={pagination.page <= 0}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              Quay lại
            </button>
          )}
          {pagination.page >= totalPages - 1 ? (
            <></>
          ) : (
            <button
              className="btn btn-outline-success"
              disabled={pagination.page >= totalPages - 1}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              Xem thêm
            </button>
          )}
        </div>
      </article>
      <OnTop />
    </div>
  );
}

export default Product;
