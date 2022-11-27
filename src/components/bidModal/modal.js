
import "./modal.css"

export const BidForm = ({ formik, hidden, setHidden }) => {
  return (
    <div className="modal-container" style={{ display: hidden ? 'none' : 'block' }}  >
      <div className="sfsf">
      <div className="modal-form bg-secondary">
        <button onClick={() => { setHidden(true) }} style={{ fontSize: '22px', width: "40px", height: '38px', position: "relative", right: '70px', margin: '12px 0 0 700px', padding: "4px 8px", border: 0, background: '0' }}>X</button>
        <form onSubmit={formik.handleSubmit} >
          <div className="d-flex mt-3">
            <div className="input-container">

              <input
                id="bidPrice"
                name="bidPrice"
                type="text"
                placeholder="Bid Price..."
                onChange={formik.handleChange}

              />
            </div>
            {formik.errors.bidPrice && formik.touched.bidPrice ? <p className="error">error message to show </p> : ""}
            <div className="input-container">

              <input
                id="bidQuantity"
                name="bidQuantity"
                type="text"
                placeholder="your Bid Quantiy... "
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.bidQuantity && formik.touched.bidQuantity ? <p className="error">error message to show </p> : ""}

          </div>
          <div className="d-flex my-4">
            <div className="input-container">

              <input
                id="bidPlace"
                name="bidPlace"
                type="text"
                placeholder="Bid Place..."
                onChange={formik.handleChange}

              />
            </div>
            {formik.errors.bidPlace && formik.touched.bidPlace ? <p className="error">error message to show </p> : ""}
            <div className="input-container">

              <input
                id="bidAvailableQuantity"
                name="bidAvailableQuantity"
                type="text"
                placeholder="Bid Available Quantiy... "
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.bidAvailableQuantity && formik.touched.bidAvailableQuantity ? <p className="error">error message to show</p> : ""}

          </div>
          <div className="d-flex justify-content-end mx-2">
            <button className=" mx-1 btn btn-danger text-white border-0" onClick={() => setHidden(true)}>Cancel Bid</button>
            <button type="submit" className="mx-1 btn btn-success text-white border-0">Confirm Bid</button>

          </div>


        </form>

      </div>
      </div>
    </div>
  );
};

