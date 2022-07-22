import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../News/News.css"
import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import ProductApi from "../../api/ProductApi";
import CategoryProductApi from "../../api/CategoryProductApi";
import { async } from "@firebase/util";

function ProductPageAdmin() {
  const [listCategory, setListCategory] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListCategory(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListCategory();
  }, []);
  useEffect(() => {
    const FetchFullProduct = async () => {
      try {
        const response = await ProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProduct(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchFullProduct();
  }, []);
  const FetchFullProduct = async () => {
    try {
      const response = await ProductApi.getAll();
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setListProduct(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function handleGetProjectbyIDCategory(e) {
    if (e.target.value === "DEFAULT") {
      FetchFullProduct();
    } else {
      getProductbyIDCategory(e.target.value);
    }
  }
  const getProductbyIDCategory = async (id) => {
    try {
      const response = await ProductApi.getByIdCate(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setListProduct(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  async function DeleteProductApi(id) {
    try {
      const response = await ProductApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Xóa thành công");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  function DeleteImage(product) {
    const files = product.image;
    let count = files.length;
    if (!files.length > 0) return;
    for (const file of files) {
      count = count - 1;
      const desertRef = ref(storage, `images/product/image/${file.name}`);
      deleteObject(desertRef).catch((error) => {
        console.log("not");
      });
    }
    if (count === 0) {
      DeleteProductApi(product._id);
    }
  }
  // Func delete image
  function handleDeleteProduct(product) {
    const desertRef = ref(
      storage,
      `images/product/avatar/${product.avatar.name}`
    );
    deleteObject(desertRef)
      .then(() => {
        DeleteImage(product);
      })
      .catch((error) => {
        console.log("not");
      });
  }
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh sách sản phẩm</h2>
      <div className="container">
        <div className=" form-group-1 form-group">
          <label>Chọn danh mục</label>
          <select
            onChange={handleGetProjectbyIDCategory}
            defaultValue="DEFAULT"
            className="form-control-1 form-control"
          >
            <option value="DEFAULT">Tất cả</option>
            {listCategory?.map((c) => (
              <option value={c._id} key={c._id}>
                {c?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
      <div className="auto-scroll-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "50px" }}>STT</th>
              <th>Tên</th>
              <th>Danh mục</th>
              <th>Công dụng</th>
              <th>Ảnh đại diện</th>
              <th>SL ảnh</th>
              <th>Mô tả</th>
              <th style={{ width: "180px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listProduct?.map((c, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{c.commonName}</td>
                <td>{c.nameCategory}</td>
                <td>{c.uses}</td>
                <td>
                  {" "}
                  <img
                    className="img-news-admin"
                    alt=""
                    src={c?.avatar.url}
                  ></img>
                </td>

                <td>{c.image.length}</td>
                <td>
                  <div
                    className="auto-scroll"
                    dangerouslySetInnerHTML={{ __html: c.description }}
                  />
                </td>
                <td>
                  <a
                    href={`/admin/san-pham/${c._id}`}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-eye"></i>
                  </a>
                  <a
                    href={`/admin/san-pham/cap-nhat/${c._id}`}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-edit"></i>
                  </a>
                  <button
                    onClick={() => handleDeleteProduct(c)}
                    className="btn-action btn btn-danger"
                  >
                    <i className="icon-action fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
        <div className="group-btn">
          <a
            href="/admin/san-pham/tao"
            type="submit"
            className="btn-admin btn btn-primary"
          >
            Thêm sản phẩm
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductPageAdmin;
