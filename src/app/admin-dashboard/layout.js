"use client";

import { useState, useEffect } from "react";
import { 
  Home, 
  Users, 
  Newspaper, 
  FileText, 
  MessageSquare, 
  Bell, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { AdminProvider, useAdmin } from "./AdminContext";
import { AuthProvider, useAuth } from "./AuthContext";

function AdminLayoutContent({ children }) {
  const { activeSection, setActiveSection, announcement } = useAdmin();
  const { user, logout, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      window.location.href = '/admin-login';
    }
  }, [user, loading]);


  const handleLogout = () => {
    logout();
    window.location.href = '/admin-login';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Fixed Header */}
      <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50 h-16">
        <div className="flex items-center justify-between px-4 md:px-6 py-4 h-full">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
              <img 
                src="/images/home/yetgaon-logo.png" 
                alt="Yetgaon Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-yatra-one text-gray-800">ग्रामपंचायत येतगाव</h1>
              <p className="text-xs md:text-sm text-gray-600 font-bakbak-one">ता. कडेमाव जी. सानली</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Bell className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Settings className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center text-xs md:text-sm"
            >
              <LogOut className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`w-64 bg-white shadow-lg fixed left-0 top-16 bottom-0 overflow-y-auto z-40 lg:hidden transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        setActiveSection("home");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeSection === "home" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <Home className="w-5 h-5 mr-3" />
                        होम
                      </div>
                      <span>→</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setActiveSection("applications");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeSection === "applications" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-3" />
                        नागरिक सेवा
                      </div>
                      <span>→</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setActiveSection("contacts");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeSection === "contacts" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <MessageSquare className="w-5 h-5 mr-3" />
                        संपर्क
                      </div>
                      <span>→</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setActiveSection("feedbacks");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeSection === "feedbacks" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-3" />
                        तक्रार
                      </div>
                      <span>→</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setActiveSection("blogs");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        activeSection === "blogs" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <Newspaper className="w-5 h-5 mr-3" />
                        बातम्या आणि ब्लॉग
                      </div>
                      <span>→</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

      {/* Desktop Sidebar - Sticky */}
      <aside className="w-64 bg-white shadow-lg sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto z-40 hidden lg:block">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection("home")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "home" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <Home className="w-5 h-5 mr-3" />
                  होम
                </div>
                <span>→</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("applications")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "applications" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-3" />
                  नागरिक सेवा
                </div>
                <span>→</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contacts")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "contacts" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  संपर्क
                </div>
                <span>→</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("feedbacks")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "feedbacks" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  तक्रार
                </div>
                <span>→</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("blogs")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "blogs" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <Newspaper className="w-5 h-5 mr-3" />
                  बातम्या आणि ब्लॉग
                </div>
                <span>→</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content - Scrollable */}
      <main className="flex-1 pt-16 overflow-y-auto h-screen">
        <div className="p-4 md:p-6">
          {/* Announcement Banner */}
          <div className="bg-orange-100 border-l-4 border-orange-500 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
            <div className="flex items-center">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-orange-600 mr-2 md:mr-3 flex-shrink-0" />
              <p className="text-orange-800 font-bakbak-one text-sm md:text-base">
                {announcement}
              </p>
            </div>
          </div>

          {/* Content */}
          {children}
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <AdminProvider>
        <AdminLayoutContent>{children}</AdminLayoutContent>
      </AdminProvider>
    </AuthProvider>
  );
}
