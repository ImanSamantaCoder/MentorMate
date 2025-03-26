const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            
            {/* About Section */}
            <div className="col-md-4 text-center text-md-start">
              <h5>About MentorMate</h5>
              <p>
                MentorMate helps students connect with mentors for guidance, 
                career advice, and learning support.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="col-md-4 text-center">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#" className="text-light text-decoration-none">Mentors</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
              </ul>
            </div>
  
            {/* Contact Info & Social Media */}
            <div className="col-md-4 text-center text-md-end">
              <h5>Contact Us</h5>
              <p>Email: support@mentormate.com</p>
              <p>Phone: +91 123 456 7890</p>
              <div>
                <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-lg"></i></a>
                <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="text-light"><i className="fab fa-linkedin fa-lg"></i></a>
              </div>
            </div>
  
          </div>
  
          {/* Copyright */}
          <div className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} MentorMate. All Rights Reserved.</p>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  