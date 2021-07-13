import Skeleton from 'react-loading-skeleton';

const HomeLoader = () => {
  return (
    <>
      <div className="row">
        <div className="col mb-3">
          <div className=" float-start" style={{ marginLeft: '-10px' }}>
            <Skeleton width={50} height={35} />
          </div>
          <div className="float-end">
            <Skeleton width={50} height={35} />
          </div>
        </div>
      </div>
      <div className="row row-cols-md-2">
        <div
          className="card mb-3"
          style={{ marginRight: '10px', width: '540px' }}
        >
          <div className="row">
            <div className="col-md-4">
              <Skeleton
                style={{ marginLeft: '-12px', paddingTop: '5px' }}
                src=""
                height={205}
                width={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton />
                </h5>
                <p className="card-text">
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <Skeleton />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-3"
          style={{ marginRight: '10px', width: '540px' }}
        >
          <div className="row">
            <div className="col-md-4">
              <Skeleton
                style={{ marginLeft: '-12px', paddingTop: '5px' }}
                src=""
                height={205}
                width={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton />
                </h5>
                <p className="card-text">
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <Skeleton />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-3"
          style={{ marginRight: '10px', width: '540px' }}
        >
          <div className="row">
            <div className="col-md-4">
              <Skeleton
                style={{ marginLeft: '-12px', paddingTop: '5px' }}
                src=""
                height={205}
                width={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton />
                </h5>
                <p className="card-text">
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <Skeleton />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-3"
          style={{ marginRight: '10px', width: '540px' }}
        >
          <div className="row">
            <div className="col-md-4">
              <Skeleton
                style={{ marginLeft: '-12px', paddingTop: '5px' }}
                src=""
                height={205}
                width={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton />
                </h5>
                <p className="card-text">
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <Skeleton />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoader;
