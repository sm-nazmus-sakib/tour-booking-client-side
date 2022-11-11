import React, { useEffect, useState } from 'react';
// import { Spinner } from "react-bootstrap";

import "./ManageService.css";
const ManageServices = () => {

  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://y-tau-lemon.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  const handleDelete = id => {
    const url = `https://y-tau-lemon.vercel.app/services/${id}`;
    fetch(url, {
      method: 'DELETE'

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount) {
          const remaining = services?.filter(service => service._id !== id);
          setServices(remaining);
          alert('Remove From Database Successfully')

        }

      })

  }
  return (
    <div>
      <h2 className=" my-5 services-header p-3 m-3 mx-auto">
        Manage Our All Packages
      </h2>
      <div className="row row-cols-1 row-cols-md-3 m-2  ">
        {services.map((service) => (
          <div className="col mb-4 ">
            <div class="card h-100 ">
              <img
                src={service.Img}
                class="card-img-top"
                alt="..."
                height="450"
                className="p-3 rounded"
              />
              <div class="card-body">
                <h2 class="card-title text-danger">{service.name}</h2>
                <p class="card-text">{service.Description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  <h4 class="text-primary mt-1 mb-5">
                    Budget: {service.price}
                  </h4>{" "}
                  <small class="text-muted">
                    <button
                      class="btn btn-danger"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </small>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
