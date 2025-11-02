"use client";

import { 
  Eye,
  Edit,
  Trash2,
  Plus,
  TrendingUp,
  DollarSign,
  FileCheck,
  AlertCircle,
  FileText,
  Newspaper,
  Settings,
  Bell
} from "lucide-react";
import { useAdmin } from "./AdminContext";

export default function AdminDashboard() {
  const { activeSection } = useAdmin();

  // Mock data
  const dashboardData = {
    totalApplications: { count: 245, pending: 25 },
    birthCertificates: { count: 120, pending: 10 },
    deathCertificates: { count: 85, pending: 8 },
    totalFund: { amount: "₹12,50,000", available: "₹4,80,000" },
    totalBlogs: { count: 12, new: 2 },
    otherCertificates: { count: 40, pending: 7 }
  };

  const applications = [
    { id: 1, type: "जन्म प्रमाणपत्र", applicant: "राजेश पाटील", date: "2024-01-15", status: "प्रलंबित" },
    { id: 2, type: "मृत्यू प्रमाणपत्र", applicant: "सुनीता शिंदे", date: "2024-01-14", status: "पूर्ण" },
    { id: 3, type: "विवाह प्रमाणपत्र", applicant: "अमित देशमुख", date: "2024-01-13", status: "प्रलंबित" },
    { id: 4, type: "७/१२ उतारा", applicant: "विजय कांबळे", date: "2024-01-12", status: "पूर्ण" }
  ];

  const contacts = [
    { id: 1, name: "प्रमोद जाधव", email: "pramod@email.com", phone: "9876543210", message: "पाणीपुरवठा समस्या", date: "2024-01-15", status: "नवीन" },
    { id: 2, name: "अनिता पवार", email: "anita@email.com", phone: "9876543211", message: "रस्ता दुरुस्तीची विनंती", date: "2024-01-14", status: "उत्तर दिले" },
    { id: 3, name: "सुधाकर गायकवाड", email: "sudhakar@email.com", phone: "9876543212", message: "वीज समस्या", date: "2024-01-13", status: "प्रक्रियेत" }
  ];

  const feedbacks = [
    { id: 1, name: "रविंद्र पाटील", rating: 5, comment: "खूप चांगली सेवा", date: "2024-01-15", status: "प्रकाशित" },
    { id: 2, name: "मीना शिंदे", rating: 4, comment: "सेवा चांगली आहे", date: "2024-01-14", status: "प्रकाशित" },
    { id: 3, name: "संजय कांबळे", rating: 3, comment: "सुधारणेची गरज", date: "2024-01-13", status: "प्रलंबित" }
  ];

  const blogs = [
    { id: 1, title: "ग्रामसभा बैठक", content: "ग्रामसभा बैठकीची माहिती", date: "2024-01-15", status: "प्रकाशित" },
    { id: 2, title: "जलसंधारण प्रकल्प", content: "जलसंधारण प्रकल्पाची माहिती", date: "2024-01-14", status: "प्रकाशित" },
    { id: 3, title: "स्वच्छता अभियान", content: "स्वच्छता अभियानाची माहिती", date: "2024-01-13", status: "प्रलंबित" }
  ];

  const renderDashboardCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Total Applications */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-yatra-one mb-2">एकूण अर्ज</h3>
            <p className="text-3xl font-bold">{dashboardData.totalApplications.count}</p>
            <p className="text-sm opacity-90">स्थिती: {dashboardData.totalApplications.pending} प्रलंबित</p>
          </div>
          <FileText className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Birth Certificate Applications */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-yatra-one mb-2">जन्म प्रमाणपत्र अर्ज</h3>
            <p className="text-3xl font-bold">{dashboardData.birthCertificates.count}</p>
            <p className="text-sm opacity-90">स्थिती: {dashboardData.birthCertificates.pending} प्रलंबित</p>
          </div>
          <FileCheck className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Death Certificate Applications */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-yatra-one mb-2">मृत्यू प्रमाणपत्र अर्ज</h3>
            <p className="text-3xl font-bold">{dashboardData.deathCertificates.count}</p>
            <p className="text-sm opacity-90">स्थिती: {dashboardData.deathCertificates.pending} प्रलंबित</p>
          </div>
          <AlertCircle className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Total Fund */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-yatra-one mb-2">एकूण निधी</h3>
            <p className="text-3xl font-bold">{dashboardData.totalFund.amount}</p>
            <p className="text-sm opacity-90">उपलब्ध निधी: {dashboardData.totalFund.available}</p>
          </div>
          <DollarSign className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Total Blogs */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-yatra-one mb-2">एकूण ब्लॉग्स / बातम्या</h3>
            <p className="text-3xl font-bold">{dashboardData.totalBlogs.count}</p>
            <p className="text-sm opacity-90">नवीन: {dashboardData.totalBlogs.new}</p>
          </div>
          <Newspaper className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Other Certificates */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-yatra-one mb-2">इतर प्रमाणपत्र अर्ज</h3>
            <p className="text-3xl font-bold">{dashboardData.otherCertificates.count}</p>
            <p className="text-sm opacity-90">स्थिती: {dashboardData.otherCertificates.pending} प्रलंबित</p>
          </div>
          <FileText className="w-12 h-12 opacity-80" />
        </div>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-yatra-one text-gray-800">अर्ज व्यवस्थापन</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          नवीन अर्ज
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-yatra-one">अर्ज प्रकार</th>
              <th className="text-left py-3 px-4 font-yatra-one">अर्जदार</th>
              <th className="text-left py-3 px-4 font-yatra-one">तारीख</th>
              <th className="text-left py-3 px-4 font-yatra-one">स्थिती</th>
              <th className="text-left py-3 px-4 font-yatra-one">क्रिया</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{app.type}</td>
                <td className="py-3 px-4">{app.applicant}</td>
                <td className="py-3 px-4">{app.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    app.status === 'पूर्ण' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-yatra-one text-gray-800">संपर्क संदेश</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          नवीन संदेश
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-yatra-one">नाव</th>
              <th className="text-left py-3 px-4 font-yatra-one">ईमेल</th>
              <th className="text-left py-3 px-4 font-yatra-one">फोन</th>
              <th className="text-left py-3 px-4 font-yatra-one">संदेश</th>
              <th className="text-left py-3 px-4 font-yatra-one">तारीख</th>
              <th className="text-left py-3 px-4 font-yatra-one">स्थिती</th>
              <th className="text-left py-3 px-4 font-yatra-one">क्रिया</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{contact.name}</td>
                <td className="py-3 px-4">{contact.email}</td>
                <td className="py-3 px-4">{contact.phone}</td>
                <td className="py-3 px-4">{contact.message}</td>
                <td className="py-3 px-4">{contact.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    contact.status === 'नवीन' ? 'bg-red-100 text-red-800' : 
                    contact.status === 'उत्तर दिले' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {contact.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderFeedbacks = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-yatra-one text-gray-800">अभिप्राय व्यवस्थापन</h2>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          नवीन अभिप्राय
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-yatra-one">नाव</th>
              <th className="text-left py-3 px-4 font-yatra-one">रेटिंग</th>
              <th className="text-left py-3 px-4 font-yatra-one">टिप्पणी</th>
              <th className="text-left py-3 px-4 font-yatra-one">तारीख</th>
              <th className="text-left py-3 px-4 font-yatra-one">स्थिती</th>
              <th className="text-left py-3 px-4 font-yatra-one">क्रिया</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{feedback.name}</td>
                <td className="py-3 px-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-yellow-400 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">{feedback.comment}</td>
                <td className="py-3 px-4">{feedback.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    feedback.status === 'प्रकाशित' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {feedback.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBlogs = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-yatra-one text-gray-800">ब्लॉग आणि बातम्या व्यवस्थापन</h2>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          नवीन ब्लॉग
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-yatra-one">शीर्षक</th>
              <th className="text-left py-3 px-4 font-yatra-one">सामग्री</th>
              <th className="text-left py-3 px-4 font-yatra-one">तारीख</th>
              <th className="text-left py-3 px-4 font-yatra-one">स्थिती</th>
              <th className="text-left py-3 px-4 font-yatra-one">क्रिया</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{blog.title}</td>
                <td className="py-3 px-4">{blog.content}</td>
                <td className="py-3 px-4">{blog.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    blog.status === 'प्रकाशित' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
      {/* Content based on active section */}
      {activeSection === "home" && (
        <div>
          <h2 className="text-2xl font-yatra-one text-gray-800 mb-6">डॅशबोर्ड</h2>
          {renderDashboardCards()}
          
          {/* Additional Content to Test Scrolling */}
          <div className="mt-8">
            <h3 className="text-xl font-yatra-one text-gray-800 mb-4">ताज्या गतिविधी</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 border">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-yatra-one text-gray-800">नवीन अर्ज #{i + 1}</h4>
                      <p className="text-sm text-gray-600 font-bakbak-one">२ तासांपूर्वी</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    नागरिकांकडून नवीन अर्ज प्राप्त झाले आहे. कृपया तपासून पहा आणि आवश्यक कारवाई करा.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">सक्रिय</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-bakbak-one">
                      पहा →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-yatra-one text-gray-800 mb-6">महिन्याची सांख्यिकी</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">१२५</h4>
                <p className="text-sm text-gray-600 font-bakbak-one">एकूण अर्ज</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">९८</h4>
                <p className="text-sm text-gray-600 font-bakbak-one">पूर्ण झालेले</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">२७</h4>
                <p className="text-sm text-gray-600 font-bakbak-one">प्रलंबित</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">₹२,४५,६७८</h4>
                <p className="text-sm text-gray-600 font-bakbak-one">एकूण रक्कम</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-yatra-one text-gray-800 mb-6">ताज्या क्रियाकलाप</h3>
            <div className="space-y-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-yatra-one text-gray-800">नवीन सूचना #{i + 1}</h4>
                    <p className="text-sm text-gray-600 font-bakbak-one">
                      ग्रामपंचायत येतगाव मध्ये नवीन सूचना प्रकाशित करण्यात आली आहे. कृपया तपासून पहा.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{i + 1} तासांपूर्वी</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-bakbak-one">
                    पहा
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-yatra-one text-gray-800 mb-6">त्वरित क्रिया</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                <Plus className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-bakbak-one text-blue-800">नवीन अर्ज</p>
              </button>
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                <FileText className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-bakbak-one text-green-800">रिपोर्ट तयार करा</p>
              </button>
              <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors">
                <Bell className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-bakbak-one text-yellow-800">सूचना पाठवा</p>
              </button>
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors">
                <Settings className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-bakbak-one text-purple-800">सेटिंग्ज</p>
              </button>
            </div>
          </div>

          {/* Additional Content for Scrolling Test */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-yatra-one text-gray-800 mb-6">अतिरिक्त माहिती</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4 font-bakbak-one">
                हे एक नमुना सामग्री आहे जी स्क्रोलिंग वर्तन तपासण्यासाठी वापरली जात आहे. 
                या सामग्रीमध्ये विविध घटक समाविष्ट आहेत जसे की कार्ड, सारण्या, बटणे आणि मजकूर.
              </p>
              <p className="text-gray-700 mb-4 font-bakbak-one">
                ग्रामपंचायत येतगाव ही एक प्रगतिशील ग्रामपंचायत आहे जी नागरिकांना सर्वोत्तम सेवा पुरवण्यासाठी 
                सतत प्रयत्नशील आहे. आमच्या वेबसाइटवर आपले स्वागत आहे.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-yatra-one text-gray-800 mb-2">संपर्क माहिती</h4>
                  <p className="text-sm text-gray-600 font-bakbak-one">
                    फोन: +91-1234567890<br/>
                    ईमेल: info@yetgaonpanchayat.com<br/>
                    पत्ता: ग्रामपंचायत येतगाव, ता. कडेमाव जी. सानली
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-yatra-one text-gray-800 mb-2">कार्यक्रम</h4>
                  <p className="text-sm text-gray-600 font-bakbak-one">
                    सोमवार ते शुक्रवार: ९:०० AM - ५:०० PM<br/>
                    शनिवार: ९:०० AM - १:०० PM<br/>
                    रविवार: सुट्टी
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "applications" && renderApplications()}
      {activeSection === "contacts" && renderContacts()}
      {activeSection === "feedbacks" && renderFeedbacks()}
      {activeSection === "blogs" && renderBlogs()}
    </>
  );
}
