import React from "react";
import Navbar from "../components/Navbar/index";
import FoodTab from "../components/FoodTab/index";

const HomepageLayout =
    (Component) =>
        ({ ...props }) => {
            return (
                <>
                    <Navbar />
                    <FoodTab />
                    <div className="container mx-auto px-4 lg:px-20">
                        <Component {...props} />
                    </div>
                </>
            );
        };

export default HomepageLayout;