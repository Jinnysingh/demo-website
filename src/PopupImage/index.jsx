import React from 'react';



const ImagePopup = (imageLink) => {
    return (
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        {/* <img src={imageLink.imageLink}></img> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ImagePopup;
