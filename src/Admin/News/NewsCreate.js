import JoditEditor from "jodit-react";
import { React, useState } from "react";
import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import NewsApi from "../../api/NewsApi";

function NewsCreatePage() {
  const navigate = useNavigate();
  const [news, setNews] = useState({
    name: "",
    urlImage: "",
    content: "",
    nameImage: "",
    summary: "",
  });

  async function createNews() {
    try {
      const response = await NewsApi.create(news);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Thêm tin tức thành công");
        navigate(-1);
      }
    } catch (error) {
      alert("Thêm tin tức thất bại");
      console.log(error);
    }
  }
  // handle change value input
  function handleChangeImage(e) {
    const file = e.target.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      uploadImage(file);
    } else {
      alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
      e.target.value = null;
    }
  }

  const uploadImage = (file) => {
    try {
      if (!file) return;
      const storageRef = ref(storage, `images/news/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setNews({ ...news, nameImage: file.name, urlImage: downloadURL });
          });
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  };
  const deleteFromFirebaseSingle = (name) => {
    if (!name) return;
    const desertRef = ref(storage, `images/news/${name}`);
    deleteObject(desertRef)
      .then(() => {
        setNews({ ...news, urlImage: "", nameImage: "" });
      })
      .catch((error) => {
        console.log("not");
      });
  };
  // Func Delete image
  const deleteFromFirebaseOut = (name) => {
    if (!name) return;
    const desertRef = ref(storage, `images/news/${name}`);
    deleteObject(desertRef)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.log("not");
      });
  };
  //Func Upload Project
  function submitProject() {
    if (
      news.name === "" ||
      news.content === "" ||
      news.summary === "" ||
      news.nameImage === "" ||
      news.urlImage === ""
    ) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      createNews();
    }
  }
  function cancelProject() {
    if (news.nameImage) {
      deleteFromFirebaseOut(news.nameImage);
    } else {
      navigate(-1);
    }
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Thêm tin tức mới</h2>

        <div className="form-group ">
          <label>Tên dự án</label>
          <input
            onChange={(e) => {
              setNews({ ...news, name: e.target.value });
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group ">
          <label>
            Giới thiệu chung (hiển thị nội dung tóm tắt trên các thẻ bài viết)
          </label>
          <textarea
            onChange={(e) => {
              setNews({ ...news, summary: e.target.value });
            }}
           style={{height:"150px"}}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Ảnh đại diện tin tức</label>

          <div className="input-group">
            <input
              disabled={news?.nameImage !== "" ? true : false}
              onChange={handleChangeImage}
              type="file"
              className="form-control"
            />
            <label className="input-group-text">Upload</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 img-check">
              <img
                className="img-update-news"
                alt=""
                src={news?.urlImage}
              ></img>
              <div
                style={
                  news.nameImage === "" ? { display: "none" } : { display: "" }
                }
                className="delete-img"
              >
                <button
                  onClick={() => deleteFromFirebaseSingle(news?.nameImage)}
                  className="btn btn-danger"
                >
                  <i
                    style={{ fontSize: "15px", color: "white", width: "100%" }}
                    className="fa fa-remove"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className=" form-group">
              <label>Nội dung</label>

              <JoditEditor
                onChange={(newContent) => {
                  setNews({ ...news, content: newContent });
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
                Thêm bài viết
              </button>
              <button
                onClick={cancelProject}
                type="submit"
                className="btn-admin btn btn-danger"
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

export default NewsCreatePage;
