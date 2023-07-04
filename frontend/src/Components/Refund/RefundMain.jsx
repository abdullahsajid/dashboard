import './refund.css'
const RefundMain = () => {
  return (
    <div className="layout-content">
        <div>
            <div className="row">
                <div className='col-12'>
                    <div className="card p-24">
                        <div className="col-12 mb-3">
                            <h2>Refund</h2>
                        </div>
                        <form className='row'>
                            <div className="col-12 col-md-4 col-lg-4 mb-3">
                                <div>
                                    <label htmlFor="brn" className='form-label mb-3 fs-5'>Bank Reference No: </label>
                                </div>
                                <input type="number" id="brn" required className="bank-input w-100"/>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 mb-3">
                                <div>
                                    <label htmlFor="brn" className='form-label mb-3 fs-5'>Refund Amount: </label>
                                </div>
                                <input type="number" id="brn" required className="bank-input w-100"/>
                            </div>
                            <div className="col-12 mb-3">
                                <div>
                                    <label htmlFor="brn" className='form-label mb-0 fs-5'>Refund to: </label>
                                    <p className='color-78' style={{fontSize:".875rem"}}>bank account*</p>
                                </div>
                                <input type="number" id="brn" required className="bank-input w-100"/>
                            </div>
                            <div className='col-12'>
                                <button type='submit'  className='btn btn-dark'>
                                    Refund
                                </button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default RefundMain