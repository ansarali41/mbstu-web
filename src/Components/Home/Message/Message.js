import React from 'react';
import VC from '../../../Images/forhad_vc_sir.jpg';

const Message = () => {
    return (
        <div style={{ padding: '30px 100px' }}>
            <div className="shadow p-3 mb-5 bg-white rounded row d-flex align-items-center">
                <div className="col-md-9">
                    <h4 className="py-4">
                        MESSAGE FROM <br />
                        VICE CHANCELLOR
                    </h4>

                    <div>
                        <p>
                            Mawlana Bhashani Science & Technology University (MBSTU) has started a steady journey of reaching a new height of excellence in research and to achieve
                            a unique milestone in promoting new ideas and innovation, and in serving the nation and the global community by creating enlightened and skilled
                            professionals who can meet the challenges of the 21st century fostering the motto of ‘being the employer, not the employee’. In keeping with this
                            purpose, MBSTU has already been declared a research university that aims at generating and advancing knowledge by cutting-edge research in its
                            state-of-the-art laboratories and in the congenial academic ambience. Apart from these, MBSTU has international and local collaboration with a wide
                            range of reputed academia and industry.
                        </p>
                        <p>
                            In order to achieve the rest of the noble goals and turn our country into the golden Bengal envisioned by the Father of the Nation Bangabandhu Sheikh
                            Mujibur Rahman, we all have to work together relentlessly and wholeheartedly.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src={VC} alt="" className="img-fluid img-thumbnail" />
                    <div className="text-center font-weight-bold">
                        <small>Hon'ble Vice-Chancellor</small> <br />
                        <small>Professor Dr. Md. Forhad Hossain</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
