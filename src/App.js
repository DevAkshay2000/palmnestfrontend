// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home';
// import About from './components/About';
// import MyNav from './components/MyNav';
// import Footer from './components/Footer';
// import Activities from './components/Activities';
// import NearestAttraction from './components/NearestAttraction';
// import Restaurant from './components/Restaurant';
// import Contact from './components/Contact';
// import Gallery from "./components/Resources/Gallery";
// import ImageGallery from "./components/Resources/ImageGallery";
// import Testimonials from "./components/Resources/Testimonials";
// import Blog from "./components/Resources/Blog";
// import AllBlogs from "./components/Resources/AllBlog";
// import Tents from "./components/Accomodation/Tents";
// import Cottages from "./components/Accomodation/Cottages";
// import "./App.css"
const App = () => {
    return (
        <>
            // <MyNav />
            // <Routes>
            //     <Route path="/" index element={<Home />} />
            //     <Route path="/About-us" element={<About />} />
            //     <Route path="/Activities" element={<Activities />} />
            //     <Route path="/nearest-attraction" element={<NearestAttraction />} />
            //     <Route path="/restaurant" element={<Restaurant />} />
            //     <Route path="/contact" element={<Contact />} />
            //     <Route path="/gallery" element={<Gallery />} />
            //     <Route path="/testimonials" element={<Testimonials />} />
            //     <Route path="/blog" element={<Blog />} />
            //     <Route path="/all_blog" element={<AllBlogs />} />
            //     <Route path="/luxuryTents" element={<Tents />} />
            //     <Route path="/cottages" element={<Cottages />} />
            // </Routes>
            // <Footer />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f9f9f9",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                color: "#ff4d4f",
              }}
            >
              <div>
                <h1 style={{ fontSize: "5rem", margin: 0 }}>403</h1>
                <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>
                  403: Access Denied: Unable to fetch data.
                </p>
              </div>
            </div>
        </>

    );
}



export default App;

