import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import userApi from "../../api/userApi";
import "../News/News.css"

function UserAdmin() {
  const [listUser, setListUser] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const FetchListUser = async () => {
      try {
        const response = await userApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListUser(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListUser();
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const FetchListUser = async () => {
    try {
      const response = await userApi.getAll();
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        setListUser(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  async function deleteUser(id) {
    try {
      const response = await userApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        FetchListUser();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh sách người dùng</h2>

      <div>
      <div className="auto-scroll-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>STT</th>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Tên đăng nhập</th>
              <th style={{ width: "70px" }}>Xóa</th>
            </tr>
          </thead>
          {listUser?.map((u, index) => (
            <tbody key={index}>
              <tr>
                <td>{index}</td>
                <td>{u?.name}</td>
                <td>{u?.email}</td>
                <td>{u?.username}</td>

                <td>
                  <button
                    onClick={() => {
                      deleteUser(u._id);
                    }}
                    disabled={u._id === currentUser.id ? true : false}
                    className="btn-action btn btn-danger"
                  >
                    <i className="icon-action fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        </div>
        <div className="group-btn">
          <a
            href="/admin/nguoi-dung/tao"
            type="submit"
            className="btn-admin btn btn-primary"
          >
            Thêm người dùng
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
