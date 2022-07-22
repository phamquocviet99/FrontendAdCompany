import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import MessageApi from "../../api/MessageApi";
import "../News/News.css"

function MessameAdmin() {
  const [listMessage, setListMassage] = useState([]);
  useEffect(() => {
    const FetchListNews = async () => {
      try {
        const response = await MessageApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListMassage(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, [listMessage]);
async function DeleteMessage(id){
    try {
        const response = await MessageApi.remove(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
            alert("Xóa thành công");
            
          }
      } catch (error) {
        console.log(error);
      }
}
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh sách các thư</h2>

      <div  className="auto-scroll-table">
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>STT</th>
              <th>Tên người viết</th>

              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Nội dung</th>

              <th style={{ width: "130px" }}>Hành động</th>
            </tr>
          </thead>
          {listMessage?.map((n, index) => (
            <tbody>
              <tr>
                <td>{index}</td>

                <td>{n?.name}</td>

                <td>{n?.phone}</td>
                <td>{n?.email}</td>
                <td>{n?.message}</td>

                <td>
                  <button
                    onClick={() => {DeleteMessage(n._id)}}
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
    </div>
  );
}

export default MessameAdmin;
