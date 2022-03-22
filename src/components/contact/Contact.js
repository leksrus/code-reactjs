import './Contact.css'

function Contact() {
    return (
        <div className="form-contact m-3">
            <section className="container">
                <div className="row justify-content-end">
                    <div className="col-12 col-md-6 col-lg-4">
                        <form className="g-3 form-input p-5">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="fname">First name:</label>
                                <input className="form-control" type="text" id="fname" name="fname" required
                                       placeholder="write your firstname"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="lname">Last name:</label>
                                <input className="form-control" type="text" id="lname" name="lname" required
                                       placeholder="write your lastname"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="lname">Last name:</label>
                                <input className="form-control" type="text" id="lname" name="lname" required
                                       placeholder="write your lastname"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="lemail">Email:</label>
                                <input className="form-control" type="text" id="lemail" name="lemail"
                                       required placeholder="write your email"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="lmessage">Message:</label>
                                <textarea className="form-control" id="lmessage" name="lmessage" cols="40" rows="5"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn-custom mt-5" type="submit">Submit message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;