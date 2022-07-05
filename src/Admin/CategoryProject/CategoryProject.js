import { React, useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import CategoryProjectApi from "../../api/CategoryProjectApi";
import "./CategoryProject.css";
import ModalAddCategory from "../../components/Modal/ModalAddCategory/ModalAddCategory";
import ProjectApi from "../../api/ProjectApi";
import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
function CategoryProject() {
  const [listCategory, setListCategory] = useState([]);
  const [category, setCategory] = useState({ name: "" });

  const [nameBtn, setNameBtn] = useState("Thêm");
  const [idUpdate, setIdUpdate] = useState("");
  useEffect(() => {
    const FetchListCategory = async () => {
      try {
        const response = await CategoryProjectApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListCategory(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListCategory();
  }, [listCategory, idUpdate]);
  // func Add Category
  const addCategory = async () => {
    try {
      const response = await CategoryProjectApi.create(category);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Thêm danh mục mới thành công");
        clearInput();
      }
    } catch (error) {
      alert("Thêm danh mục mới thất bại");
    }
  };
  // func Update Category
  const updateCategory = async (id) => {
    try {
      const response = await CategoryProjectApi.update(id, category);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Cập nhật danh mục thành công");
        clearInput();
      }
    } catch (error) {
      alert("Cập nhật danh mục thất bại");
    }
  };
  const deleteFromFirebase = (files) => {
    if (!files.length > 0) return;
    for (const file of files) {
      const desertRef = ref(storage, `images/project/${file.name}`);
      deleteObject(desertRef)
        .then(() => {
          console.log("delete Ok");
        })
        .catch((error) => {
          console.log("not");
        });
    }
  };
  //Func Delete imge from firebase\
  const getProjectbyIDCategory = async (id) => {
    try {
      const response = await ProjectApi.getByIdCate(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        for (const pro of data.data) {
          deleteFromFirebase(pro.image);
        }
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  // func Delete Category
  const deleteCategory = async (id) => {
    if (getProjectbyIDCategory(id)) {
      try {
        const response = await CategoryProjectApi.remove(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          alert("Xóa thành công");
          clearInput();
        }
      } catch (error) {
        alert("Xóa thất bại");
        console.log(error);
      }
    } else {
      alert("Không thể xóa");
    }
  };
  // handle Change Input
  function handleChangeName(e) {
    setCategory({ ...category, name: e.target.value });
  }
  // func SetEdit Category
  function setEditCategory(category) {
    setCategory({ ...category, name: category.name });
    setNameBtn("Cập nhật");
    setIdUpdate(category._id);
  }
  // func Clear Input
  function clearInput() {
    setCategory({ name: "" });
    setNameBtn("Thêm");
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

  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh mục các dự án</h2>
      <div className="container">
        <div className="group-add-edit">
          <p>Tên danh mục :</p>
          <input
            onChange={handleChangeName}
            value={category?.name ?? ""}
            className="form-control"
          ></input>

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
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>STT</th>
              <th>Tên danh mục</th>
              <th style={{ width: "130px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listCategory?.map((c, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{c?.name}</td>
                <td>
                  <button
                    onClick={() => setEditCategory(c)}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-edit"></i>
                  </button>
                  <button
                    onClick={() => deleteCategory(c._id)}
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
