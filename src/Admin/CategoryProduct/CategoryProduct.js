import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CategoryProductApi from "../../api/CategoryProductApi";
import { storage } from "../../api/FirebaseConfig";
import "./CategoryProduct.css";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import ProductApi from "../../api/ProductApi";
function CategoryProject() {
  const [listCateDelete, setListCateDelete] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [category, setCategory] = useState({
    name: "",
    idParent: "none",
  });
  const [nameBtn, setNameBtn] = useState("Thêm");
  const [idUpdate, setIdUpdate] = useState("");
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
  // func Add Category
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
  const addCategory = async () => {
    try {
      delete category.nameParent;
      const response = await CategoryProductApi.create(category);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Thêm danh mục mới thành công");
        window.location.reload();
        clearInput();
      }
    } catch (error) {
      alert("Thêm danh mục mới thất bại");
    }
  };
  const removeCategory = async (id) => {
    try {
      delete category.nameParent;
      const response = await CategoryProductApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Xóa thành công");
        window.location.reload();
        clearInput();
      }
    } catch (error) {
      alert("Xóa thất bại");
    }
  };
  const updateCategory = async (id) => {
    try {
      delete category.nameParent;
      const response = await CategoryProductApi.update(id, category);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Cập nhật danh mục thành công");
        window.location.reload();
      }
    } catch (error) {
      alert("Cập nhật danh mục thất bại");
    }
  };
  function handleChangeName(e) {
    setCategory({ ...category, name: e.target.value });
  }
  // func SetEdit Category
  function setEditCategory(category) {
    setCategory({
      ...category,
      name: category.name,
      idParent: category.idParent,
    });
    setNameBtn("Cập nhật");
    setIdUpdate(category._id);
  }
  // func Clear Input
  function clearInput() {
    setCategory({ name: "", idParent: "none" });
    setNameBtn("Thêm");
  }
  function handleChangeCategory(e) {
    if (nameBtn === "Thêm") {
      setCategory({ ...category, idParent: e.target.value });
    } else {
      if (idUpdate === e.target.value) {
        alert("Cha của danh mục không thể là chính nó");
        e.target.value = "";
      } else {
        let check = false;
        for (const cate of listCategory) {
          if (e.target.value === cate._id) {
            if (idUpdate === cate.idParent) {
              alert("Ông nội của danh mục không thể là chính nó");
              e.target.value = "";
              check = true;
            }
          }
        }
        if (!check) {
          setCategory({ ...category, idParent: e.target.value });
        }
      }
    }
  }
  // func Submit Button
  function submitCategory() {
    if (category.name !== "") {
      if (nameBtn === "Thêm") {
        addCategory();
      } else {
        updateCategory(idUpdate);
      }
    } else alert("Mời bạn nhập đủ trường dữ liệu ");
  }

  function findElement(id, listCate) {
    const listCateDe = listCateDelete;
    for (const c of listCategory) {
      if (c.idParent === id) {
        listCate.push(c);
        findElement(c._id, listCate);
        listCateDe.push(c);
        setListCateDelete(listCateDe);
      }
    }
  }
  // DeleteImage
  function DeleteProduct(product) {
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
  async function DeleteProductApi(id) {
    try {
      const response = await ProductApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        // removeCategory(category._id);
        alert("Xóa thành công");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const getProductbyIDCategory = async (id) => {
    try {
      const response = await ProductApi.getByIdCate(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        for (const p of data.data) {
          DeleteProduct(p);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  function handleDelete(category) {
    findElement(category._id, []);
    const listCate = listCateDelete;
    listCate.push(category);

    for (const c of listCate) {
      getProductbyIDCategory(c._id);
    }
    removeCategory(category._id);
  }

  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh mục các sản phẩm</h2>
      <div className="container">
        <div className="group-add-edit-product">
          <p>Tên danh mục :</p>
          <input
            onChange={handleChangeName}
            value={category?.name ?? ""}
            className="form-control"
          ></input>
          <p style={nameBtn === "Thêm" ? { display: "none" } : { display: "" }}>
            Để tránh nhầm lẫn, quý anh chị không được chỉnh sửa quan hệ khi cập
            nhật danh mục, thay vào đó hãy xóa và thêm mới
          </p>
          <p>Danh mục cha :</p>
          <div className="group-cate-parent">
            <select
              disabled={nameBtn === "Thêm" ? false : true}
              defaultValue="none"
              onChange={handleChangeCategory}
              className="form-control"
            >
              <option value="none">None</option>
              {listCategory?.map((c) => (
                <option value={c._id} key={c._id}>
                  {c?.name}
                </option>
              ))}
            </select>

            <div className="group-btn">
              <button
                onClick={submitCategory}
                type="submit"
                className="btn-admin btn btn-success"
              >
                {nameBtn}
              </button>
              <button
                onClick={clearInput}
                type="submit"
                className="btn-admin btn btn-primary"
              >
                Làm trắng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>STT</th>
              <th>Tên danh mục</th>
              <th>Tên danh mục cha</th>
              <th style={{ width: "130px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listCategory?.map((c, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{c?.name}</td>
                <td>{c?.nameParent}</td>
                <td>
                  <button
                    onClick={() => setEditCategory(c)}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(c)}
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
    </div>
  );
}

export default CategoryProject;
