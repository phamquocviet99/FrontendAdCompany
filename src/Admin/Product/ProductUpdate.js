import JoditEditor from "jodit-react";
import { React, useEffect, useState } from "react";

import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import CategoryProductApi from "../../api/CategoryProductApi";

import ProductApi from "../../api/ProductApi";

function ProductUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    commonName: "",
    orderName: "",
    scienceName: "",
    englishName: "",
    surname: "",
    size: "",
    price: "",
    uses: "",
    description: "",
    idCategory: "",
    avatar: { url: "", name: "" },
    image: [],
  });
  const [listCategory, setListCategory] = useState([]);
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
    const FetchProduct = async () => {
      try {
        const response = await ProductApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setProduct(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProduct();
  }, [id]);
  const uploadImage = (files) => {
    try {
      if (!files) return;
      setLoading(true);
      const urls = product.image;
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
        const storageRef = ref(storage, `images/product/image/${name}`);
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
              setProduct({ ...product, image: urls });
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
  const uploadAvatar = (file) => {
    try {
      setLoading(true);
      if (!file) return;
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
      const storageRef = ref(storage, `images/product/avatar/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const avatar = { name: name, url: downloadURL };
            setProduct({ ...product, avatar: avatar });
            setLoading(false);
          });
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  };
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
        e.target.value = null;
      } else {
        alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
        e.target.value = null;
      }
    }
  }
  async function updateProduct() {
    try {
      const response = await ProductApi.update(id, product);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Cập nhật sản phẩm thành công");
        navigate("/admin/san-pham");
        window.location.reload();
      }
    } catch (error) {
      alert("Cập nhật  sản phẩm thất bại");
      console.log(error);
    }
  }
  const deleteFromFirebaseSingle = (file) => {
    if (!file) return;
    setLoading(true);
    const desertRef = ref(storage, `images/product/image/${file.name}`);
    deleteObject(desertRef)
      .then(() => {
        const listImg = product.image;
        for (var i = 0; i < listImg.length; i++) {
          if (listImg[i].name === file.name) {
            listImg.splice(i, 1);
          }
        }
        setProduct({ ...product, image: listImg });
        setLoading(false);
      })
      .catch((error) => {
        console.log("not");
      });
  };
  const deleteAvatarFromFirebaseSingle = (file) => {
    if (!file) return;
    setLoading(true);
    const desertRef = ref(storage, `images/product/avatar/${file}`);
    deleteObject(desertRef)
      .then(() => {
        const avatar = { name: "", url: "" };
        setProduct({ ...product, avatar: avatar });
        setLoading(false);
      })
      .catch((error) => {
        console.log("not");
      });
  };

  function submitProduct() {
    if (
      product.commonName === "" ||
      product.avatar.name === "" ||
      product.description === "" ||
      product.idCategory === ""
    ) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      updateProduct();
    }
  }

  function cancelProduct() {
    updateProduct();
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Thêm sản phẩm mới</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group ">
              <label>Tên thường gọi sản phẩm</label>
              <input
                value={product.commonName}
                onChange={(e) => {
                  setProduct({ ...product, commonName: e.target.value });
                }}
                type="email"
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Tên khác</label>
              <input
                value={product.orderName}
                onChange={(e) => {
                  setProduct({ ...product, orderName: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Tên khoa học</label>
              <input
                value={product.scienceName}
                onChange={(e) => {
                  setProduct({ ...product, scienceName: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Tên tiếng anh</label>
              <input
                value={product.englishName}
                onChange={(e) => {
                  setProduct({ ...product, englishName: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Các hình ảnh về cây (chọn được nhiều ảnh)</label>

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
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Danh mục</label>
              <select
                style={{ fontSize: "16px" }}
                className=" form-select form-control"
                defaultValue={"DEFAULT"}
                onChange={(e) => {
                  setProduct({ ...product, idCategory: e.target.value });
                }}
              >
                <option value="DEFAULT">{product?.nameCategory}</option>
                {listCategory.map((c, index) => (
                  <option value={c._id} key={index}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" form-group">
              <label>Thuộc họ</label>
              <input
                value={product.surname}
                onChange={(e) => {
                  setProduct({ ...product, surname: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Kích thước</label>
              <input
                value={product.size}
                onChange={(e) => {
                  setProduct({ ...product, size: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Công dụng</label>
              <input
                value={product.uses}
                onChange={(e) => {
                  setProduct({ ...product, uses: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Giá</label>
              <input
                value={product.price}
                onChange={(e) => {
                  setProduct({ ...product, price: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Hình ảnh đại diện (chỉ chọn 1 ảnh)</label>

              <div className="input-group">
                <input
                  disabled={product?.avatar.name !== "" ? true : false}
                  onChange={handleChangeAvatar}
                  type="file"
                  className="form-control"
                />
                <label className="input-group-text">Upload</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 image-review">
            <div className="col-md-8">
              {product.image?.map((img, index) => (
                <div key={index} className="col-md-3 img-check">
                  <img className="img-update" alt="" src={img?.url}></img>
                  <div className="delete-img">
                    <button
                      onClick={() => deleteFromFirebaseSingle(img, "image")}
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
            <div className="col-md-4 ">
              <div
                className="img-check"
                style={
                  product.avatar?.name === ""
                    ? { display: "none" }
                    : { display: "" }
                }
              >
                <img
                  className="img-update"
                  alt=""
                  src={product.avatar?.url}
                ></img>
                <div className="delete-img">
                  <button
                    onClick={() =>
                      deleteAvatarFromFirebaseSingle(product.avatar.name)
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
              <h3 className="text-center">Ảnh đại diện</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className=" form-group">
            <label>Nội dung </label><br/>
              <label>
                Vui lòng sử dụng font chữ Georgia để phù hợp với font chữ của
                website
              </label>
              <label>
                Nếu có đăng hình ảnh, copy link hình ảnh, vào phần edit (cây bút
                khi nhấn vào ảnh) chọn <b>Advanced</b>, phần <b>Styles</b> dán thuộc
                tính <br/> (max-height: 100%; max-width: 100%; object-fit : cover) để
                hình ảnh đẹp hơn
              </label>
              <JoditEditor
                value={product.description}
                onChange={(newContent) => {
                  setProduct({ ...product, description: newContent });
                }}
                onBlur={(newContent) => {
                  setProduct({ ...product, description: newContent });
                }}
                className="form-control"
                tabIndex={1}
              />
            </div>
            <div className="group-btn">
              <button
                disabled={loading}
                onClick={submitProduct}
                type="submit"
                className="btn-admin btn btn-primary"
              >
                Cập nhật
              </button>
              <button
                onClick={cancelProduct}
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

export default ProductUpdate;
