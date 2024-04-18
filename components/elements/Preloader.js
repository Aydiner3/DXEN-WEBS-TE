export default function Preloader() {
  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="I" className="letters-loading">
              D
            </span>
            <span data-text-preloader="N" className="letters-loading">
              X
            </span>
            <span data-text-preloader="F" className="letters-loading">
              E
            </span>
            <span data-text-preloader="O" className="letters-loading">
              N
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
