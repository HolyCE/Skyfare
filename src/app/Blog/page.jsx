import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const BlogPage01 = "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop";
const BlogPage02 = "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&h=600&fit=crop";
const BlogPage03 = "https://images.unsplash.com/photo-1506953829328-6150af2e0fec?w=800&h=600&fit=crop";
const BlogPage04 = "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop";
const BlogPage05 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop";
const BlogPage06 = "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop";

function Page() {  // Fixed: Component name should start with capital letter
    return (
        <>
            {/* Page Title */}
            <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
                <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
                    Blogs
                </h2>
                <ul className="text-white z-10 flex items-center gap-8 section-list">
                    <li className="text-sm relative">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-sm relative">
                        <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
                        <Link href="#">Blogs</Link>
                    </li>
                </ul>
            </div>

            {/* Blog */}
            <div className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
                <div className="w-full pb-5">
                    <h1 className="unbounded-font text-4xl font-semibold pb-3">Our Latest Blog</h1>  {/* Fixed: "Lastest" -> "Latest" */}
                    <p className="text-[#193555]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                    </p>
                </div>

                <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">  {/* Fixed: "gird-cols-1" -> "grid-cols-1" */}
                    {/* Blog Card 1 */}
                    <div className="blog-card">
                        <Image 
                            src={BlogPage01} 
                            alt="BlogPage01" 
                            width={400} 
                            height={300}
                            className="rounded-[20px] w-full h-[250px] object-cover" 
                        />
                        <div className="blog-content mt-3">
                            <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">Top 10 Travel Destinations in Asia for 2024</h2>
                            <p className="text-sm text-[#7a7a7a]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="blog-card">
                        <Image 
                            src={BlogPage02} 
                            alt="BlogPage02" 
                            width={400} 
                            height={300}
                            className="rounded-[20px] w-full h-[250px] object-cover" 
                        />
                        <div className="blog-content mt-3">
                            <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">How to Plan a Budget-Friendly Trip to Asia</h2>
                            <p className="text-sm text-[#7a7a7a]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="blog-card">
                        <Image 
                            src={BlogPage03} 
                            alt="BlogPage03" 
                            width={400} 
                            height={300}
                            className="rounded-[20px] w-full h-[250px] object-cover" 
                        />
                        <div className="blog-content mt-3">
                            <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">Cultural Etiquette Tips for Travelers in Asia</h2>
                            <p className="text-sm text-[#7a7a7a]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 4 */}
                    <div className="blog-card">
                        <Image 
                            src={BlogPage04} 
                            alt="BlogPage04" 
                            width={400} 
                            height={300}
                            className="rounded-[20px] w-full h-[250px] object-cover" 
                        />
                        <div className="blog-content mt-3">
                            <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">10 Best Beaches in Asia for Your Next Vacation</h2>
                            <p className="text-sm text-[#7a7a7a]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 5 */}
                    <div className="blog-card">
                        <Image 
                            src={BlogPage05} 
                            alt="BlogPage05" 
                            width={400} 
                            height={300}
                            className="rounded-[20px] w-full h-[250px] object-cover" 
                        />
                        <div className="blog-content mt-3">
                            <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">Hidden Gems of Southeast Asia You Must Visit</h2>
                            <p className="text-sm text-[#7a7a7a]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 6 */}
                    <div className="blog-card">
                        <Image 
                            src={BlogPage06} 
                            alt="BlogPage06" 
                            width={400} 
                            height={300}
                            className="rounded-[20px] w-full h-[250px] object-cover" 
                        />
                        <div className="blog-content mt-3">
                            <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">Best Time to Visit Asian Countries</h2>
                            <p className="text-sm text-[#7a7a7a]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;