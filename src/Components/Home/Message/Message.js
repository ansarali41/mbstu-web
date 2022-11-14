import React from 'react';
import VC from '../../../Images/forhad_vc_sir.jpg';

const Message = () => {
    return (
        <div style={{ padding: '30px 100px' }}>
            <div className="shadow p-3 mb-5 bg-white rounded d-flex justify-content-between">
                <div>
                    <h4>
                        MESSAGE FROM <br />
                        VICE CHANCELLOR
                    </h4>
                </div>
                <div>
                    <img src={VC} alt="" className="img-fluid img-thumbnail" />
                </div>
            </div>
        </div>
    );
};

export default Message;
