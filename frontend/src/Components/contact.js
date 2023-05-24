import React from 'react'

const Contact = () => {
    return(
        <>
         <div className="contact_info">
            <div className="container-fluid">
                <div className = "row">
                    <div className  ="col-lg-10 offset-lg-1 d-flex justify content between">
                        {/* phone number */}
                        <div className="contact_info_item">
                            <img src="" alt="phone"/>
                            <div className = "contact_info_title">
                                 Phone
                            </div>

                            <div className="contact_info_text">
                                +977 9811111111
                            </div>

                        </div>


                        
                    </div>
                    {/* email number */}
                    <div className="contact _info_item d-flex justify-content-start align-items-center">
                        <img src="https://img.icon"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Email
                            </div>
                             <div className="contact_info_text">
                                guidedtravels65@gmail.com
                             </div>
                        </div>
                    </div>

                    {/* address  */}
                    <div className="contact _info_item d-flex justify-content-start align-items-center">
                        <img src="https://img.icon"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Address
                            </div>
                             <div className="contact_info_text">
                                Bharatpur-10 , Chitwan
                             </div>
                        </div>
                    </div>

                 </div> 
            </div>

            {/* contact us from */}
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_from_title">
                                    GetinTouch</div>
                                 <form id="contact_form">
                                     <div className="contact_form_name d-flex justify-content-between align-items-between">
                                         <input type="text" id="contact_form_name"
                                             className="contact_form_name input_field"
                                             placeholder="Your name" required="true"/>

                                             <input type="email" id="contact_form_email"
                                             className="contact_form_name input_field"
                                             placeholder="Your Email" required="true"/>
 
                                             <input type="number" id="contact_form_phone"
                                             className="contact_form_name input_field"
                                             placeholder="Your Phone number" required="true"/>


                                        </div>
                                        <div className="contact_from_text mt-5 ">
                                            <textarea className="text_filed contact_form_message"
                                              placeholder="Message" id="" cols="30" rows="10"></textarea>
                                        </div>

                                        <div className="contact_form_button">
                                            <button type= "submit" className="button contact_submit_button"></button>
                                        </div> 
                                   </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}
export default Contact 