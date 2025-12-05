import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@mail.com",
        profileImage: localStorage.getItem("profileImage") || "/profile.png",
    });

    // Whenever profileImage changes → save to localStorage
    useEffect(() => {
        if (user.profileImage) {
            localStorage.setItem("profileImage", user.profileImage);
        }
    }, [user.profileImage]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
