import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              
                <h1>ASSIGN TASK</h1>

              <div className="card-body">
                <table class="tabl">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">TASK</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">DATE</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr className="tab">
                        <td>{num + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.author}</td>
                        <td>{p.genre}</td>
                        <td>{p.chapters}</td>
                        <td>
                        <button  className="glow-on-hover">
                        <Link to={`/editProduct/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="glow-on-hover">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;