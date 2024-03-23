import images from '../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={images} className="w-1/2 rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-primary'> Dream Job</span></h1>
      <p className="py-6">Explore thousands of job opportunities with all the information <br />you need. Its your future. Come find it. <br /> Manage all your job application from start to finish.</p>
      <button className="btn btn-primary mt-10">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;