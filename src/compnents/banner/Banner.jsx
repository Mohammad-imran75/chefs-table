

const Banner = () => {
    return (
        <div>
          <div>
            <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
  </div>
    <div>
    <ul className='flex gap-4 lg: mr-[200px] items-center'>
    <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>  
        </ul>
    </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      
      </ul>
    </div>
  </div>
</div>

{/* banner section */}

<div className='mt-10 mb-10'>
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/xSSkxPm/studio-image-male-chef-cook-preparing-meals-pan.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
       After marinating the chicken in a blend of herbs and spices, carefully grill each piece until they achieve a perfectly golden-brown exterior and juicy interior.</p>
      <button className="btn bg-green-600 rounded-2xl">Explore Now</button>
      <button className="btn border bg-[#FFFFFF] ml-10">Our FeedBack</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
<div className=" flex items-center flex-col space-y-4 mb-10">
        <h1 className="text-3xl font-bold">Our Recipe</h1>
        <p>Discover the secret to mouthwatering flavors with our signature recipe, exclusively available at our shop.</p>
  </div>
</div>

    );
};

export default Banner;