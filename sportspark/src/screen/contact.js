import React from "react";

function Contact() {
    return (
        <div>
            <div class="agile_about contact" id="contact">

<div class="agileits_agile_contact_form">
    <h3>Get in Touch</h3>
    <h6> We are open for any suggestion</h6>
                                
<div class="container">	
    <div class="agileits_agile_about_mail">
        <form>
            <div class="col-md-6 agileits_agile_about_mail_left">
                <input type="text" name="Name" placeholder="Name" required=""/>
            <div class="clearfix"> </div>
            </div>
            <div class="col-md-6 agileits_agile_about_mail_left">
                <input type="text" name="Subject" placeholder="Subject" required=""/>
            <div class="clearfix"> </div>
            </div>
            <div class="col-md-6 agileits_agile_about_mail_left">
                <input type="email" name="Email" placeholder="Email" required=""/>
            <div class="clearfix"> </div>
            </div>
            <div class="col-md-6 agileits_agile_about_mail_left">
                <input type="text" name="Phone" placeholder="Phone" required=""/>
            <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
            <textarea name="Message" placeholder="Message..." required=""></textarea>
            <div class="submit">
                <input type="submit" value="Send Message"/>
            </div>
        </form>
    </div>
</div>
</div>
</div>
        </div>
    )
}
export default Contact;