import apiClient from "./axios";

/* ===================== BLOGS ===================== */
export const createBlog = (data) => apiClient.post("/college/blogs", data);
export const getAllBlogs = () => apiClient.get("/college/blogs");
export const getBlogById = (id) => apiClient.get(`/college/blogs/${id}`);

/* ===================== SEARCH & PREDICTION ===================== */
export const searchColleges = (query) =>
  apiClient.get(`/college/search`, { params: query });

export const predictColleges = (data) =>
  apiClient.post("/college/predict-colleges", data);

/* ===================== CORE COLLEGE ===================== */
export const addCollege = (data) => apiClient.post("/college/add", data);
export const getColleges = () => apiClient.get("/college");
export const getCollegeById = (collegeId) =>
  apiClient.get(`/college/${collegeId}`);

export const updateCollegeByAuthId = (collegeId, data) =>
  apiClient.put(`/college/${collegeId}`, data);

export const deleteCollegeByAuthId = (collegeId) =>
  apiClient.delete(`/college/${collegeId}`);

/* ===================== COURSES ===================== */
export const addCourse = (data) => apiClient.post("/college/course/add", data);
export const getCoursesByCollege = (collegeId) =>
  apiClient.get(`/college/courses/college/${collegeId}`);
export const updateCourse = (courseId, data) =>
  apiClient.put(`/college/course/${courseId}`, data);

/* ===================== HOSTEL ===================== */
export const getHostelsByCollegeId = (collegeId) =>
  apiClient.get(`/college/hostel/${collegeId}`);

export const addHostel = (data) =>
  apiClient.post("/college/hostel/add", data);

export const updateHostel = (id, data) =>
  apiClient.put(`/college/hostel/${id}`, data);

export const deleteHostel = (id) =>
  apiClient.delete(`/college/hostel/${id}`);

/* ===================== EXAMS ===================== */
export const addCourseExams = (data) =>
  apiClient.post("/college/exam", data);

export const getCollegeExams = (id) =>
  apiClient.get(`/college/exam/${id}`);

/* ===================== COURSE FEES ===================== */
export const upsertCourseFee = (data) =>
  apiClient.post("/college/course-fee", data);

export const getCourseFeesByCollegeId = (collegeId) =>
  apiClient.get(`/college/course-fee/college/${collegeId}`);

/* ===================== PLACEMENTS ===================== */
export const addCoursePlacement = (data) =>
  apiClient.post("/college/placement/add", data);

export const getCoursePlacements = (courseId) =>
  apiClient.get(`/college/placement/${courseId}`);

export const getPlacementsByCollege = (collegeId) =>
  apiClient.get(`/college/placement/college/${collegeId}`);

export const updateCoursePlacement = (placementId, data) =>
  apiClient.put(`/college/placement/${placementId}`, data);

/* ===================== SCHOLARSHIPS ===================== */
export const addScholarship = (data) =>
  apiClient.post("/college/scholarship/add", data);

export const getScholarshipsByCollege = (collegeId) =>
  apiClient.get(`/college/scholarship/${collegeId}`);

/* ===================== COMPARE ===================== */
export const compareSchools = (data) =>
  apiClient.post("/college/compare", data);

/* ===================== ACTIVITIES ===================== */
export const addActivities = (data) =>
  apiClient.post("/college/activities/add", data);

export const getActivitiesByCollegeId = (collegeId) =>
  apiClient.get(`/college/activities/${collegeId}`);

export const updateActivities = (collegeId, data) =>
  apiClient.put(`/college/activities/${collegeId}`, data);

export const deleteActivities = (collegeId) =>
  apiClient.delete(`/college/activities/${collegeId}`);

/* ===================== ALUMNI ===================== */
export const addAlumni = (data) =>
  apiClient.post("/college/alumni/add", data);

export const getAlumniByCollegeId = (collegeId) =>
  apiClient.get(`/college/alumni/${collegeId}`);

export const updateAlumni = (collegeId, data) =>
  apiClient.put(`/college/alumni/${collegeId}`, data);

export const deleteAlumni = (collegeId) =>
  apiClient.delete(`/college/alumni/${collegeId}`);

/* ===================== AMENITIES ===================== */
export const addAmenities = (data) =>
  apiClient.post("/college/amenities/add", data);

export const getAmenitiesByCollegeId = (collegeId) =>
  apiClient.get(`/college/amenities/${collegeId}`);

export const updateAmenities = (collegeId, data) =>
  apiClient.put(`/college/amenities/${collegeId}`, data);

export const deleteAmenities = (collegeId) =>
  apiClient.delete(`/college/amenities/${collegeId}`);

/* ===================== OTHER DETAILS ===================== */
export const addOtherDetails = (data) =>
  apiClient.post("/college/other-details/add", data);

export const getOtherDetailsByCollegeId = (collegeId) =>
  apiClient.get(`/college/other-details/${collegeId}`);

export const updateOtherDetails = (collegeId, data) =>
  apiClient.put(`/college/other-details/${collegeId}`, data);

export const deleteOtherDetails = (collegeId) =>
  apiClient.delete(`/college/other-details/${collegeId}`);

/* ===================== FACULTY ===================== */
export const addFaculty = (data) =>
  apiClient.post("/college/faculty/add", data);

export const getFacultyByCollegeId = (collegeId) =>
  apiClient.get(`/college/faculty/${collegeId}`);

export const updateFaculty = (collegeId, data) =>
  apiClient.put(`/college/faculty/${collegeId}`, data);

export const deleteFaculty = (collegeId) =>
  apiClient.delete(`/college/faculty/${collegeId}`);

/* ===================== INFRASTRUCTURE ===================== */
export const addInfrastructure = (data) =>
  apiClient.post("/college/infrastructure/add", data);

export const getInfrastructureByCollegeId = (collegeId) =>
  apiClient.get(`/college/infrastructure/${collegeId}`);

export const updateInfrastructure = (collegeId, data) =>
  apiClient.put(`/college/infrastructure/${collegeId}`, data);

export const deleteInfrastructure = (collegeId) =>
  apiClient.delete(`/college/infrastructure/${collegeId}`);

/* ===================== INTERNATIONAL ===================== */
export const addInternationalExposure = (data) =>
  apiClient.post("/college/international/add", data);

export const getInternationalExposureByCollegeId = (collegeId) =>
  apiClient.get(`/college/international/${collegeId}`);

export const updateInternationalExposure = (collegeId, data) =>
  apiClient.put(`/college/international/${collegeId}`, data);

export const deleteInternationalExposure = (collegeId) =>
  apiClient.delete(`/college/international/${collegeId}`);

/* ===================== SAFETY ===================== */
export const addSafetyAndSecurity = (data) =>
  apiClient.post("/college/safety/add", data);

export const getSafetyAndSecurityByCollegeId = (collegeId) =>
  apiClient.get(`/college/safety/${collegeId}`);

export const updateSafetyAndSecurity = (collegeId, data) =>
  apiClient.put(`/college/safety/${collegeId}`, data);

export const deleteSafetyAndSecurity = (collegeId) =>
  apiClient.delete(`/college/safety/${collegeId}`);

/* ===================== ADMISSION TIMELINE ===================== */
export const addAdmissionTimeline = (data) =>
  apiClient.post("/college/admission/add", data);

export const getAdmissionTimelineByCollegeId = (collegeId) =>
  apiClient.get(`/college/admission/${collegeId}`);

export const updateAdmissionTimeline = (collegeId, data) =>
  apiClient.put(`/college/admission/${collegeId}`, data);

export const deleteAdmissionTimeline = (collegeId) =>
  apiClient.delete(`/college/admission/${collegeId}`);

export default {
  createBlog,
  getAllBlogs,
  getBlogById,
  searchColleges,
  predictColleges,
  addCollege,
  getColleges,
  getCollegeById,
  updateCollegeByAuthId,
  deleteCollegeByAuthId,
  addCourse,
  getCoursesByCollege,
  updateCourse,
  getHostelsByCollegeId,
  addHostel,
  updateHostel,
  deleteHostel,
  addCourseExams,
  getCollegeExams,
  upsertCourseFee,
  getCourseFeesByCollegeId,
  addCoursePlacement,
  getCoursePlacements,
  getPlacementsByCollege,
  updateCoursePlacement,
  addScholarship,
  getScholarshipsByCollege,
  compareSchools,
  addActivities,
  getActivitiesByCollegeId,
  updateActivities,
  deleteActivities,
  addAlumni,
  getAlumniByCollegeId,
  updateAlumni,
  deleteAlumni,
  addAmenities,
  getAmenitiesByCollegeId,
  updateAmenities,
  deleteAmenities,
  addOtherDetails,
  getOtherDetailsByCollegeId,
  updateOtherDetails,
  deleteOtherDetails,
  addFaculty,
  getFacultyByCollegeId,
  updateFaculty,
  deleteFaculty,
  addInfrastructure,
  getInfrastructureByCollegeId,
  updateInfrastructure,
  deleteInfrastructure,
  addInternationalExposure,
  getInternationalExposureByCollegeId,
  updateInternationalExposure,
  deleteInternationalExposure,
  addSafetyAndSecurity,
  getSafetyAndSecurityByCollegeId,
  updateSafetyAndSecurity,
  deleteSafetyAndSecurity,
  addAdmissionTimeline,
  getAdmissionTimelineByCollegeId,
  updateAdmissionTimeline,
  deleteAdmissionTimeline,
};