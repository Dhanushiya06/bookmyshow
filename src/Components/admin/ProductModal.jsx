import React, { useEffect } from "react";

import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import bookartApi from "../../api/api";
import movieApi from "../../api/movieApi";

const ProductModal = ({ open, setOpen }) => {
  const [movies,setMovies] = useState([]);
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    bookDescription: "",
    image: 0,
    price: 0,
    fileId: 0,
    categoryId: 1,
  });

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(event.target.files[0]);
    formData.append("file", event.target.files[0]);
    axios
      .post("http://localhost:8080/api/uploadFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(
        (response) => {
          let data = response.data;
          if (data.data) {
            setBook({ ...book, fileId: data.data.id });
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    movieApi
      .get("/movie/all")
      .then(
        (response) => {
          let data = response.data;
          if (data.data) {
            console.log(data.data);
            setMovies(data.data);
          //   console.log({ ...book, categoryId: data.data[0].id });
          //  setBook({ ...book, categoryId: data.data[0].id });
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(`Axios -> ${error.message}`);
        }
      )
      .catch((error) => {
        console.log("Something went wrong");
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const bookApi = (event) => {
    event.preventDefault();
    bookartApi
      .post("/book", book)
      .then(
        (response) => {
          let data = response.data;
          console.log(data);
          if (data.data) {
            // handleClose();
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(`Axios -> ${error.message}`);
        }
      )
      .catch((error) => {
        console.log("Something went wrong");
      });
  };

  return (
    <div>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Book Name</label>
            <input
              type="text"
              className="form-control"
              value={book.bookName}
              onChange={(e) => {
                setBook({ ...book, bookName: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author Name</label>
            <input
              type="text"
              className="form-control"
              value={book.authorName}
              onChange={(e) => {
                setBook({ ...book, authorName: e.target.value });
              }}
            />
          </div>
          <label className="form-label">Category</label>
          <select
            className="form-select mb-3"
            onChange={(e) => {
              console.log(e.target.value);
              setBook({ ...book, categoryId: e.target.value });
            }}
          >
            {categories.map((category) => (
              <option value={`${category.id}`}>{category.categoryName}</option>
            ))}
          </select>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              type="text"
              className="form-control"
              value={book.bookDescription}
              onChange={(e) => {
                console.log(e.target.value);
                setBook({ ...book, bookDescription: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={book.price}
              onChange={(e) => {
                console.log(e.target.value);
                setBook({ ...book, price: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Image</label>
            <input
              className="form-control"
              type="file"
              onChange={(event) => {
                uploadFile(event);
              }}
            />
          </div>
        </Modal.Body>
        <div className="m-3">
          <Button variant="secondary" className="me-2" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              bookApi(e);
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
