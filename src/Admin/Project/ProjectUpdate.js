import JoditEditor from "jodit-react";
import { React, useEffect, useState } from "react";
import CategoryProjectApi from "../../api/CategoryProjectApi";
import { storage } from "../../api/FirebaseConfig";
import "./Project.css";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { useParams } from "react-router-dom";
import ProjectApi from "../../api/ProjectApi";
import { useNavigate } from "react-router-dom";


function ProjectUpdatePageAdmin() {
  const [loading, setLoading] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    name: "",
    investor: "",
    location: "",
    content: "",
    idCategory: "",
    area:"",
    image: [{ name: "", url: "" }],
    urlVideo: "",
  });
  const [listCategory, setListCategory] = useState([]);
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
    const FetchProject = async () => {
      try {
        const response = await ProjectApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setProject(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProject();
  }, [id]);
  async function updateProject() {
    try {
      const response = await ProjectApi.update(id, project);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Cập nhật dự án thành công");
        navigate(-1)
      }
    } catch (error) {
      alert("Cập nhật án thất bại");
    }
  }
  // handle change value input
  function handleChangeName(e) {
    setProject({ ...project, name: e.target.value });
  }
  function handleChangeInvestor(e) {
    setProject({ ...project, investor: e.target.value });
  }
  function handleChangeLocation(e) {
    setProject({ ...project, location: e.target.value });
  }
  function handleChangeCategory(e) {
    setProject({ ...project, idCategory: e.target.value });
  }
  function handleChangeArea(e) {
    setProject({ ...project, area: e.target.value });
  }
  function handleChangeImage(e) {
    if (e.target.files.length > 0) {
      let check = false;
      for (const file of e.target.files) {
        if (file.type === "image/png" || file.type === "image/jpeg") {
          check = true;
        } else {
          alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
          e.target.value = null;
          check = false;
          break;
        }
      }
      if (check) {
        uploadImage(e.target.files);
      } else {
        alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
        e.target.value = null;
      }
    }
  }
  function handleChangeVideo(e) {
    setProject({ ...project, urlVideo: e.target.value });
  }
  const uploadImage = (files) => {
    setLoading(true);
    try {
      if (!files) return;
      const urls = project.image;
      for (const file of files) {
        var today = new Date();

        const name =
          file.name +
          today.getDay()+
          ":" +
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds() +
          ":" +
          today.getMilliseconds();
        const storageRef = ref(storage, `images/project/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              urls.push({ name: name, url: downloadURL });
              setProject({ ...project, image: urls });
              setLoading(false);
            });
          }
        );
      }

      return true;
    } catch (error) {
      return false;
    }
  };
  // Func Delete image
  const deleteFromFirebase = (file) => {
    if (!file) return;
    const desertRef = ref(storage, `images/project/${file.name}`);
    deleteObject(desertRef)
      .then(() => {
        const listImg = project.image;
        for (var i = 0; i < listImg.length; i++) {
          if (listImg[i].name === file.name) {
            listImg.splice(i, 1);
          }
        }
        setProject({ ...project, image: listImg });
      })
      .catch((error) => {
        console.log("not");
      });
  };
  //Func Upload Project
  function submitProject() {
    if (
      project.name === "" ||
      project.idCategory === "" ||
      project.location === "" ||
      project.investor === "" ||
      project.image.length <= 0
    ) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      updateProject();
      // navigate(-1);
    }
  }
  function cancelProject() {
    navigate(-1);
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Cập nhật dự án</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group ">
              <label>Tên dự án</label>
              <input
                value={project?.name}
                onChange={handleChangeName}
                type="email"
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Chủ đầu tư</label>
              <input
                value={project?.investor}
                onChange={handleChangeInvestor}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Diện tích</label>
              <input value={project?.area} onChange={handleChangeArea} className="form-control" />
            </div>
            <div className=" form-group">
              <label>Thêm hình ảnh</label>
              <div className="input-group">
                <input
                  onChange={handleChangeImage}
                  multiple
                  type="file"
                  className="form-control"
                />
                <label className="input-group-text">Upload</label>
              </div>
            </div>
            {loading ? (
              <div>
                <h3>Đang tải hình ảnh, vui lòng đợi...</h3>
              </div>
            ) : (
              <div />
            )}
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Dịch vụ</label>
              <select
                style={{ fontSize: "16px" }}
                className=" form-select form-control"
                defaultValue={"DEFAULT"}
                onChange={handleChangeCategory}
              >
                <option value="DEFAULT" disabled>
                  {project?.nameCategory}
                </option>
                {listCategory.map((c, index) => (
                  <option value={c._id} key={index}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" form-group">
              <label>Địa điểm</label>
              <input
                value={project?.location}
                onChange={handleChangeLocation}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Link video</label>
              <input
                value={project?.urlVideo}
                onChange={handleChangeVideo}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 image-review">
            {project.image?.map((img, index) => (
              <div className="col-md-3 img-check">
                <img className="img-update" alt="" src={img?.url}></img>
                <div className="delete-img">
                  <button
                    onClick={() => deleteFromFirebase(img)}
                    className="btn btn-danger"
                  >
                    <i
                      style={{ fontSize: "15px", color: "white" }}
                      className="fa fa-remove"
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className=" form-group">
              <label>Nội dung</label>

              <JoditEditor
                value={project?.content}
                onChange={(newContent) => {
                  setProject({ ...project, content: newContent });
                }}
                onBlur={(newContent) => {
                  setProject({ ...project, content: newContent });
                }}
                className="form-control"
                tabIndex={1}
              />
            </div>
            <div className="group-btn">
              <button
                onClick={submitProject}
                type="submit"
                className="btn-admin btn btn-primary"
              >
                Cập nhật bài viết
              </button>
              <button
               disabled={loading}
                onClick={cancelProject}
                type="submit"
                className="btn-admin btn btn-primary"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectUpdatePageAdmin;
