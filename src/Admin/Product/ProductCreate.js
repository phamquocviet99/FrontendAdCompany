import JoditEditor from "jodit-react";
import { React, useEffect, useState } from "react";

import { storage } from "../../api/FirebaseConfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import CategoryProductApi from "../../api/CategoryProductApi";

import ProductApi from "../../api/ProductApi";

function ProductCreate() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    commonName: "",
    orderName: "",
    scienceName: "",
    englishName: "",
    surname: "",
    size: "",
    uses: "",
    price: "",
    description: "",
    idCategory: "",
    avatar: { url: "", name: "" },
    image: [],
  });
  const [listCategory, setListCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
        setListCategory(data.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListCategory();
  }, []);
  const uploadImage = (files) => {
    setLoading(true);
    try {
      if (!files) return;
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
    setLoading(true)
    try {
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
            setLoading(false)
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
      alert("M????i ba??n cho??n la??i hi??nh a??nh ??u??ng ??i??nh da??ng !");
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
          alert("M????i ba??n cho??n la??i hi??nh a??nh ??u??ng ??i??nh da??ng !");
          e.target.value = null;
          check = false;
          break;
        }
      }
      if (check) {
        uploadImage(e.target.files);
        e.target.value = null;
      } else {
        alert("M????i ba??n cho??n la??i hi??nh a??nh ??u??ng ??i??nh da??ng !");
        e.target.value = null;
      }
    }
  }
  async function createProduct() {
    console.log(product);
    try {
      const response = await ProductApi.create(product);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Th??m sa??n ph????m tha??nh c??ng");
        navigate(-1);
      }
    } catch (error) {
      alert("Th??m sa??n ph????m th????t ba??i");
      console.log(error);
    }
  }
  const deleteFromFirebaseSingle = (file) => {
    setLoading(true)
    if (!file) return;
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
        setLoading(false)
      })
      .catch((error) => {
        console.log("not");
      });
  };
  const deleteAvatarFromFirebaseSingle = (file) => {
    setLoading(true)
    if (!file) return;
    const desertRef = ref(storage, `images/product/avatar/${file}`);
    deleteObject(desertRef)
      .then(() => {
        const avatar = { name: "", url: "" };
        setProduct({ ...product, avatar: avatar });
        setLoading(false)
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
      alert("M????i ba??n nh????p ??u?? tr??????ng th??ng tin !");
    } else {
      createProduct();
    }
  }

  function cancelProduct() {
    deleteAvatarFromFirebaseSingle(product.avatar.name);
    const files = product.image;
    let count = files.length;
    if (!files.length > 0) return;
    for (const file of files) {
      count = count - 1;
      const desertRef = ref(storage, `images/product/image/${file.name}`);
      deleteObject(desertRef)
        .then(() => {})
        .catch((error) => {
          console.log("not");
        });
    }
    if (count === 0) {
      navigate(-1);
    }
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Th??m sa??n ph????m m????i</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group ">
              <label>T??n th??????ng go??i sa??n ph????m</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, commonName: e.target.value });
                }}
                type="email"
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>T??n kha??c</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, orderName: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>T??n khoa ho??c</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, scienceName: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>T??n ti????ng anh</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, englishName: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Ca??c hi??nh a??nh v???? c??y (cho??n ????????c nhi????u a??nh)</label>

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
                <h3>??ang ta??i hi??nh a??nh, vui lo??ng ??????i...</h3>
              </div>
            ) : (
              <div />
            )}
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Danh mu??c</label>
              <select
                style={{ fontSize: "16px" }}
                className=" form-select form-control"
                defaultValue={"DEFAULT"}
                onChange={(e) => {
                  setProduct({ ...product, idCategory: e.target.value });
                }}
              >
                <option value="DEFAULT" disabled>
                  Cho??n danh m???c
                </option>
                {listCategory.map((c, index) => (
                  <option value={c._id} key={index}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" form-group">
              <label>Thu????c ho??</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, surname: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Ki??ch th??????c</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, size: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>C??ng du??ng</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, uses: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Gia??</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, price: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>H??nh ???nh ??a??i di????n (chi?? cho??n 1 a??nh)</label>

              <div className="input-group">
                <input
                  disabled={product?.avatar.name !== "" ? true : false}
                  onChange={handleChangeAvatar}
                  type="file"
                  className="form-control"
                />
                <label className="input-group-text">Upload</label>
              </div>
            </div> {loading ? (
              <div>
                <h3>??ang ta??i hi??nh a??nh, vui lo??ng ??????i...</h3>
              </div>
            ) : (
              <div />
            )}
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
              <h3 className="text-center">A??nh ??a??i di????n</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className=" form-group">
            <label>N????i dung </label><br/>
              <label>
                Vui lo??ng s???? du??ng font ch???? Georgia ?????? phu?? h????p v????i font ch???? cu??a
                website
              </label>
              <label>
                N????u co?? ????ng hi??nh a??nh, copy link hi??nh a??nh, va??o ph????n edit (c??y bu??t
                khi nh????n va??o a??nh) cho??n <b>Advanced</b>, ph????n <b>Styles</b> da??n thu????c
                ti??nh <br/> (max-height: 100%; max-width: 100%; object-fit : cover) ??????
                hi??nh a??nh ??e??p h??n
              </label>

              <JoditEditor
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
                Th??m sa??n ph????m
              </button>
              <button
                onClick={cancelProduct}
                type="submit"
                className="btn-admin btn btn-danger"
              >
                Hu??y bo??
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
