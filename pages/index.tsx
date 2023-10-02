import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import type { Metadata } from "next";
import Head from "next/head";
import { MY_NAME } from "../lib/constants";

export const metadata: Metadata = {
  description: "Get the most of your data.",
};

export default function Index() {
  return (
    <>
      <Head>
        <title>{MY_NAME} | Data Specialist, Web Developer</title>
      </Head>
      <Layout>
        <>
          <Header />
          <section className="pb-10 relative bg-neutral-100" id="about">
            <div
              className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
              style={{ transform: "tranneutralZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-neutral-100 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
            <About />

            <div
              className="justify-center text-center flex pt-28"
              id="projects"
            >
              <div className="px-12 md:px-4">
                <h2 className="font-semibold text-4xl">Projects</h2>
                <div className="mx-auto mt-2 w-16 h-1 rounded-full bg-red-600"></div>

                <p className="text-lg leading-relaxed mt-4 mb-4 text-neutral-500">
                  Click on the project to view an in-depth description of the
                  project.
                  {/* <div className="block pb-6">
                    <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-neutral-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                      Buttons
                    </span>
                  </div> */}
                </p>
              </div>
            </div>
          </section>

          <section className="block relative z-1">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="w-full">
                <div className="h-56 relative bg-red-600 bg-opacity-30 w-full ease-linear transition-all duration-150 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-opacity-50 justify-center items-center text-neutral-900 p-4 text-center font-black">
                    <h4 className="text-lg font-black">Project names</h4>
                    <p className="text-sm font-light">
                      A login page for a social media application.
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-full hover:scale-110 transform transition-all duration-500 hover:opacity-10"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="h-56 relative bg-red-600 bg-opacity-30 w-full ease-linear transition-all duration-150 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-opacity-50 justify-center items-center text-neutral-900 p-4 text-center font-black">
                    <h4 className="text-lg font-black">Project names</h4>
                    <p className="text-sm font-light">
                      A login page for a social media application.
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-full hover:scale-110 transform transition-all duration-500 hover:opacity-10"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="h-56 relative bg-red-600 bg-opacity-30 w-full ease-linear transition-all duration-150 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-opacity-50 justify-center items-center text-neutral-900 p-4 text-center font-black">
                    <h4 className="text-lg font-black">Project names</h4>
                    <p className="text-sm font-light">
                      A login page for a social media application.
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-full hover:scale-110 transform transition-all duration-500 hover:opacity-10"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="h-56 relative bg-red-600 bg-opacity-30 w-full ease-linear transition-all duration-150 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-opacity-50 justify-center items-center text-neutral-900 p-4 text-center font-black">
                    <h5 className="text-lg font-black">Project names</h5>
                    <p className="text-sm font-light">
                      A login page for a social media application.
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-full hover:scale-110 transform transition-all duration-500 hover:opacity-10"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-40 bg-neutral-900 overflow-hidden" id="skills">
            <div className="container max-w-6xl mx-auto px-4">
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Detailed Skills and Experience
              </h3>
              <div className="mt-2 w-16 h-1 rounded-full bg-red-600"></div>
              <div className="md:grid grid-cols-2 gap-16">
                <div className="w-full">
                  <div className="text-white mt-16">
                    <h4 className="text-lg font-black first-letter:text-red-600">
                      Skills
                    </h4>
                    <h5 className="mt-2 font-black">
                      Data Analysis and Visualization
                    </h5>
                    <p>
                      Python, SQL, Pandas, NumPy, Matplotlib, D3, Tableau,
                      Google Looker Studio, Streamlit
                    </p>
                    <h5 className="mt-2 font-black">Machine Learning</h5>
                    <p>
                      Scikit-Learn, TensorFlow, Keras, Regression,
                      Classification, Clustering
                    </p>
                    <h5 className="mt-2 font-black">
                      Data Tools and Workflow p Jupyter Notebook,
                    </h5>
                    <p>
                      Colab, Git, VS Code, Data Cleaning, Data Transformation
                    </p>
                    <h5 className="mt-2 font-black">Databases</h5>
                    <p>MySQL, MongoDB</p>
                    <h5 className="mt-2 font-black">Web Development</h5>
                    <p>
                      HTML, CSS, JavaScript, React.js, Vue.js, Node.js,
                      Express.js, PHP
                    </p>
                    <h5 className="mt-2 font-black">Operating Systems</h5>
                    <p>Linux (Ubuntu), Windows (10)</p>
                    <h5 className="mt-2 font-black">Languages</h5>
                    <p>
                      German (native), English (fluent), Japanese (near-native)
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-white mt-16">
                    <h4 className="text-lg font-black first-letter:text-red-600">
                      Experience
                    </h4>

                    <div className="mt-2 grid grid-cols-3 gap-y-10">
                      <h5 className="col-span-1 text-red-600 font-black text-lg">
                        2021 - present
                      </h5>
                      <div className="col-span-2">
                        <h5 className="font-black text-lg">Freelancer</h5>
                        <p>in Data Science and Web Development</p>
                      </div>
                      <h5 className="col-span-1 text-red-600 font-black text-lg">
                        2018 - 2021
                      </h5>
                      <div className="col-span-2">
                        <h5 className="font-black text-lg">
                          Full-Stack Web Developer
                        </h5>
                        <p>
                          creating websites and web applications for local
                          businesses
                        </p>
                      </div>
                    </div>
                    <div className="text-white mt-16">
                      <h4 className="text-lg font-black first-letter:text-red-600">
                        Education
                      </h4>

                      <div className="mt-2 grid grid-cols-3 gap-y-10">
                        <h5 className="col-span-1 text-red-600 font-black text-lg">
                          2023 - present
                        </h5>
                        <div className="col-span-2">
                          <h5 className="font-black text-lg">
                            MSc Data Science
                          </h5>
                          <p>estimated graduation: 2025</p>
                        </div>
                        <h5 className="col-span-1 text-red-600 font-black text-lg">
                          2011 - 2015
                        </h5>
                        <div className="col-span-2">
                          <h5 className="font-black text-lg">
                            BSc Mathematics with Application Field
                          </h5>
                          <p>Application Field Physics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      </Layout>
    </>
  );
}
