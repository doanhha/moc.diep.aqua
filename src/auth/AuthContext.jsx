import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // đổi lại đúng đường dẫn API PHP của anh
  const API_BASE = "http://localhost/md_data_base/api/";

  const refreshMe = async () => {
    try {
      const res = await fetch(`${API_BASE}/me.php`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok && data.ok) setUser(data.user);
      else setUser(null);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    refreshMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, refreshMe, API_BASE }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
