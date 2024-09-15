import { useState, useEffect } from "react";

const ProductList = () => {
  const [Products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/Product/list")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/Product/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.deleteCount === 1) {
          alert("Deleted successfully");
          // Remove the deleted Product from the Products list
          setProducts(Products.filter((Product) => Product._id !== id));
        } else {
          alert("Not deleted");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {Products && (
        <table border="1">
          <thead>
            <tr>
              <th>Productname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((e) => (
              <tr key={e._id}>
                <td>{e.Productname}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => deleteProduct(e._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProductList;
