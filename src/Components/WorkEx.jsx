export default function WorkEx() {
    return (
      <div>
        <div
          id="workex-container"
          className="workex-container bg-slate-900 pt-20 pb-12"
          style={{ zIndex: 100, position: "relative" }}
        >
          <h3 className="text-white text-center text-3xl font-bold my-6">
            Work Experience
          </h3>
  
          <div className="timeline mt-6">
            <div className="timeline-container">
  
              {/* Web Developer Experience */}
              <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                  <h3 className="text-sky-500"> CodSoft Web Developer</h3>
                  <span className="text-white">Remotely</span>
                  <p className="text-white mb-3">
                    <em>November 2023 - December 2023</em>
                  </p>
                  <p className="text-gray-400 text-justify">
                    Portfolio Development: Designed and implemented a personal portfolio website showcasing my professional background, projects, and skills using HTML, CSS, and JavaScript. Integrated dynamic content and interactive elements to enhance user engagement. Deployed the portfolio on a cloud-based hosting platform for global accessibility.
  
                    Calculator Application: Developed a fully functional calculator application using Python and JavaScript. Implemented advanced mathematical functions and a user-friendly interface to provide an efficient calculation tool. Employed best coding practices for optimal performance and code readability.
  
                    Weather App: Created a weather application that fetches real-time weather data using APIs from OpenWeatherMap. Developed the application using Python and JavaScript, and designed an intuitive user interface to display weather forecasts, current conditions, and historical data. Emphasized responsive design for compatibility across devices.
                  </p>
                </div>
              </div>
  
              {/* Internship Experience */}
              <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                  <h3 className="text-sky-500">Bharat Intern</h3>
                  <span className="text-white">Remotely</span>
                  <p className="text-white mb-3">
                    <em>December 2023 - January 2024</em>
                  </p>
                  <p className="text-justify text-gray-400">
                    Netflix Clone: Developed a Netflix clone application using React, Node.js, and JavaScript. Designed and implemented a responsive user interface that allows users to browse, search, and stream videos from a curated library. Integrated authentication and user account management for personalized content recommendations and watchlists. Utilized RESTful APIs to fetch video content and metadata from a backend server. Employed best practices for video streaming and optimized performance to ensure a seamless user experience across different devices.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  