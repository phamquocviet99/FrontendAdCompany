import JoditEditor from "jodit-react";
import { React, useState, useEffect } from "react";
import RecruitApi from "../../api/RecruitApi";
import { useNavigate, useParams } from "react-router-dom";

function RecruitUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recruit, setRecruit] = useState({
    name: "",
    welfare: "",
    requirements: "",
    description: "",
  });
  useEffect(() => {
    async function FetchingRecruit() {
      try {
        const response = await RecruitApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setRecruit(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    FetchingRecruit();
  }, [id]);
  async function UpdateRecruit() {
    try {
      const response = await RecruitApi.update(id,recruit);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Cập nhật tuyển dụng thành công");
        return true;
      }
    } catch (error) {
      alert("Cập nhật tuyển dụng thất bại");
      console.log(error);
      return false;
    }
  }
  //  handle Submit
  function submitRecruit() {
    if (
      recruit.name === "" ||
      recruit.welfare === "" ||
      recruit.requirements === "" ||
      recruit.description === ""
    ) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      if (UpdateRecruit()) {
        navigate(-1);
      }
    }
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Thêm thông tin tuyển dụng</h2>

        <div className="form-group ">
          <label>Tuyển dụng</label>
          <input
          value={recruit.name}
            onChange={(e) => {
              setRecruit({ ...recruit, name: e.target.value });
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className=" form-group">
          <label>Phúc lợi</label>
          <JoditEditor
          value={recruit.welfare}
            onChange={(e) => {
              setRecruit({ ...recruit, welfare: e });
            }}
            className="form-control"
            tabIndex={1}
          />
        </div>
        <div className=" form-group">
          <label>Mô tả công việc</label>
          <JoditEditor
          value={recruit.description}
            onChange={(e) => {
              setRecruit({ ...recruit, description: e });
            }}
            className="form-control"
            tabIndex={1}
          />
        </div>

        <div className=" form-group">
          <label>Yều cầu</label>
          <JoditEditor
          value={recruit.requirements}
            onChange={(e) => {
              setRecruit({ ...recruit, requirements: e });
            }}
            className="form-control"
            tabIndex={1}
          />
        </div>

        <div className="group-btn">
          <button
            onClick={submitRecruit}
            type="submit"
            className="btn-admin btn btn-primary"
          >
            Submit
          </button>
          <a
           href="/admin/tuyen-dung"
            type="submit"
            className="btn-admin btn btn-danger"
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}
export default RecruitUpdate;
