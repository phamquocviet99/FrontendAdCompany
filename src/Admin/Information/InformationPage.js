import React, { useEffect, useState } from "react";
import "./InformationPage.css";
import InformationApi from "../../api/InformationApi";
import { useNavigate } from "react-router-dom";
function InformationPage() {
  const [information, setInformation] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchInfor = async () => {
      try {
        const response = await InformationApi.getById(
          "62b0756892dfc7d99e74b340"
        );
        const data = JSON.parse(JSON.stringify(response));
        // setInformation(data);
        if (!data.error) {
          setInformation(data.inforCompany);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfor();
  }, []);
  //Func Update Infomation
  const UpdateInformation = async () => {
    try {
      const response = await InformationApi.update(
        "62b0756892dfc7d99e74b340",
        information
      );
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setInformation(data.updated);
        alert("Cập nhật thông tin công ty thành công");
        navigate(-1);
      }
    } catch (error) {
      alert("Cập nhật thông tin công ty thất bại !");
    }
  };
  //Handle Update Infomation
  function SubmitUpdate() {
    UpdateInformation();
  }

  // Handle Change Input Text
  function handleNameChange(e) {
    setInformation({ ...information, name: e.target.value });
  }
  function handleEmailChange(e) {
    setInformation({ ...information, email: e.target.value });
  }
  function handleHotlineChange(e) {
    setInformation({ ...information, phone: e.target.value });
  }
  function handleFBChange(e) {
    setInformation({ ...information, facebook: e.target.value });
  }
  function handleGGChange(e) {
    setInformation({ ...information, google: e.target.value });
  }
  function handleTWChange(e) {
    setInformation({ ...information, twitter: e.target.value });
  }
  function handleYBChange(e) {
    setInformation({ ...information, youtube: e.target.value });
  }
  function handleAddressChange(e) {
    setInformation({ ...information, address: e.target.value });
  }
  // Return
  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Thông tin công ty</h2>

        <div className="form-group ">
          <label>Tên công ty</label>
          <input
            onChange={handleNameChange}
            value={information?.name ?? ""}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className=" form-group">
          <label>Email</label>
          <input
            value={information?.email ?? ""}
            className="form-control"
            onChange={handleEmailChange}
          />
        </div>
        <div className=" form-group">
          <label>Hotline</label>
          <input
            value={information?.phone ?? ""}
            onChange={handleHotlineChange}
            className="form-control"
          />
        </div>

        <div className=" form-group">
          <label>Facebook</label>
          <input
            onChange={handleFBChange}
            value={information?.facebook ?? ""}
            className="form-control"
          />
        </div>
        <div className=" form-group">
          <label>Google</label>
          <input
            onChange={handleGGChange}
            value={information?.google ?? ""}
            className="form-control"
          />
        </div>
        <div className=" form-group">
          <label>Twitter</label>
          <input
            onChange={handleTWChange}
            value={information?.twitter ?? ""}
            className="form-control"
          />
        </div>
        <div className=" form-group">
          <label>Youtube</label>
          <input
            onChange={handleYBChange}
            value={information?.youtube ?? ""}
            className="form-control"
          />
        </div>
        <div className=" form-group">
          <label>Địa chỉ</label>
          <textarea
            onChange={handleAddressChange}
            value={information?.address ?? ""}
            style={{ height: "150px" }}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="group-btn">
          <button
            onClick={SubmitUpdate}
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

export default InformationPage;
