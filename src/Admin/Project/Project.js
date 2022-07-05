import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import CategoryProjectApi from "../../api/CategoryProjectApi";
import ProjectApi from "../../api/ProjectApi";
import "./Project.css";
import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

function ProjectPageAdmin() {
  const [listCategory, setListCategory] = useState([]);
  const [listProject, setListProject] = useState([]);
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
  }, []);
  useEffect(() => {
    const FetchFullProject = async () => {
      try {
        const response = await ProjectApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProject(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchFullProject();
  }, []);
  // Func Get All Project
  const FetchFullProject = async () => {
    try {
      const response = await ProjectApi.getAll();
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setListProject(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Func get Project by icate
  const getProjectbyIDCategory = async (id) => {
    try {
      const response = await ProjectApi.getByIdCate(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setListProject(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function handleGetProjectbyIDCategory(e) {
    if (e.target.value === "DEFAULT") {
      FetchFullProject();
    } else {
      getProjectbyIDCategory(e.target.value);
    }
  }
  // Func Delete Project by ID
  async function deleteProject(id) {
    try {
      const response = await ProjectApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        FetchFullProject();
      }
    } catch (error) {
      console.log(error);
    }
  }
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
  function handleDeleteProject(project) {
    deleteFromFirebase(project.image);
    deleteProject(project._id);
  }
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Dự án</h2>
      <div className="container">
        <div className=" form-group-1 form-group">
          <label>Chọn danh mục</label>
          <select
            defaultValue="DEFAULT"
            onChange={handleGetProjectbyIDCategory}
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>STT</th>
              <th>Tên dự án</th>
              <th>Chủ đầu tư</th>
              <th>Địa điểm</th>
              <th>Dịch vụ</th>
              <th>Số lượng hình ảnh</th>
              <th>Đường dẫn video</th>
              <th style={{ width: "180px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listProject?.map((c, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{c.name}</td>
                <td>{c.investor}</td>
                <td>{c.location}</td>
                <td>{c.nameCategory}</td>
                <td>{c.image.length}</td>
                <td>{c.urlVideo}</td>
                <td>
                  <a
                    href={`/admin/du-an/${c._id}`}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-eye"></i>
                  </a>
                  <a
                    href={`/admin/du-an/chinh-sua/${c._id}`}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-edit"></i>
                  </a>
                  <button
                    onClick={() => handleDeleteProject(c)}
                    className="btn-action btn btn-danger"
                  >
                    <i className="icon-action fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="group-btn">
          <a
            href="/admin/du-an/tao"
            type="submit"
            className="btn-admin btn btn-primary"
          >
            Thêm bài viết
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPageAdmin;
