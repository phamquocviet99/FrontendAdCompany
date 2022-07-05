import { async } from "@firebase/util";
import JoditEditor from "jodit-react";
import { React, useState } from "react";
import RecruitApi from "../../api/RecruitApi";
import { useNavigate } from "react-router-dom";

function RecruitCreate() {
  const navigate = useNavigate();
  const [recruit, setRecruit] = useState({
    name: "",
    welfare: "",
    requirements: "",
    description: "",
  });
  async function CreateRecruit() {
    try {
      const response = await RecruitApi.create(recruit);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Thêm tuyển dụng thành công");
        return true;
      }
    } catch (error) {
      alert("Thêm tuyển dụng thất bại");
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
      if (CreateRecruit()) {
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
        </div>
      </div>
    </div>
  );
}
export default RecruitCreate;
