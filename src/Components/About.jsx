import profileImg from "../assets/superman1.jpeg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Aryaman Gupta <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in Ghaziabad,I'm a results-driven
            <span className="text-sky-500">MERN Stack Developer</span> pursuing my
            <span className="text-sky-500">
              {" "}
              B.Tech in Computer Science & Engineering,
              From Ajay Kumar Garg Engineering College,Ghaziabad.
            </span>{" "}
            My professional journey revolves around transforming raw data into
            impactful insights, and I'm particularly passionate about
            <span className="text-sky-500">
              {" "}
             Web Development, blockChain(Web3),Artificial Intelligence.
            </span>
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Proficient in{" "}
            <span className="text-sky-500">
              C++,Next.js,TypeScript, JavaScript and React
            </span>
            , I bring a creative touch using{" "}
            <span className="text-sky-500">HTML and CSS</span> for visual
            appeal. Navigating key Python Frameworks such as{" "}
            <span className="text-sky-500">MongoDB, Express. js, React, and Node. js</span> I craft
            tools like 
            <span className="text-sky-500">
              {" "}
              Paytm Clone, Medium Clone Youtube clone.{" "}
            </span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span className="text-sky-500">
              {" "}
              I hold certifications in emerging technologies{" "}
            </span>
            and actively participate in workshops to stay ahead of industry
            trends.
          </p>
        </div>
        <img
          src={profileImg}
          alt="superman.webp"
          className=" text-white img-Aryaman"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "90%",
            height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
