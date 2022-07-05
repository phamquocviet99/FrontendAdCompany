import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import PartnerApi from "../../api/PartnerApi";
import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { async } from "@firebase/util";
function Partner() {
  const [listPartner, setListPartner] = useState([]);
  const [partner, setPartner] = useState({
    name: "",
    urlImage: "",
    nameImage: "",
  });
  useEffect(() => {
    const FetchFullProduct = async () => {
      try {
        const response = await PartnerApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListPartner(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchFullProduct();
  }, []);

  async function createPartner() {
    try {
      const response = await PartnerApi.create(partner);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Thêm đối tác thành công");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function removePartner(id) {
    try {
      const response = await PartnerApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Xóa thành công");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function deletePartner(partner) {
    const desertRef = ref(
      storage,
      `images/partner/avatar/${partner.nameImage}`
    );
    deleteObject(desertRef)
      .then(() => {
        removePartner(partner._id);
      })
      .catch((error) => {
        console.log("not");
      });
  }
  function submitPartner() {
    if (
      partner.name === "" ||
      partner.nameImage === "" ||
      partner.urlImage === ""
    ) {
      alert("Quý anh chị phải nhập đủ thông tin");
    } else {
      createPartner();
    }
  }
  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      uploadAvatar(file);
      e.target.value = null;
    } else {
      alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
      e.target.value = null;
    }
  }
  const uploadAvatar = (file) => {
    try {
      if (!file) return;
      const storageRef = ref(storage, `images/partner/avatar/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPartner({
              ...partner,
              nameImage: file.name,
              urlImage: downloadURL,
            });
          });
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  };
  const deleteAvatarFromFirebaseSingle = (file) => {
    if (!file) return;
    const desertRef = ref(storage, `images/partner/avatar/${file}`);
    deleteObject(desertRef)
      .then(() => {
        setPartner({ ...partner, nameImage: "", urlImage: "" });
      })
      .catch((error) => {
        console.log("not");
      });
  };
  function cancelPartner() {
    deleteAvatarFromFirebaseSingle(partner.nameImage);
  }
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh mục các đối tác</h2>
      <div className="container" style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="group-add-edit-product">
              <p>Tên danh mục :</p>
              <input
                value={partner.name}
                onChange={(e) => {
                  setPartner({ ...partner, name: e.target.value });
                }}
                className="form-control"
              ></input>

              <p>Logo</p>
              <div className="input-group">
                <input
                  disabled={partner?.nameImage !== "" ? true : false}
                  onChange={handleChangeAvatar}
                  type="file"
                  className="form-control"
                />
                <label className="input-group-text">Upload</label>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="img-check"
              style={
                partner.nameImage === "" ? { display: "none" } : { display: "" }
              }
            >
              <img className="img-update" alt="" src={partner?.urlImage}></img>
              <div className="delete-img">
                <button
                  onClick={() =>
                    deleteAvatarFromFirebaseSingle(partner?.nameImage)
                  }
                  className="btn btn-danger"
                >
                  <i
                    style={{ fontSize: "15px", color: "white" }}
                    className="fa fa-remove"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <div className="group-btn" style={{ marginTop: "50px" }}>
                <button
                  onClick={submitPartner}
                  type="submit"
                  className="btn-admin btn btn-success"
                >
                  Thêm đối tác
                </button>
                <button
                  onClick={cancelPartner}
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
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>STT</th>
              <th>Tên đối tác</th>
              <th>Logo</th>
              <th style={{ width: "130px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listPartner?.map((c, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{c?.name}</td>
                <td>
                  {" "}
                  <img
                    className="img-news-admin"
                    alt=""
                    src={c?.urlImage}
                  ></img>
                </td>
                <td>
                  <button
                    onClick={() => deletePartner(c)}
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

export default Partner;
