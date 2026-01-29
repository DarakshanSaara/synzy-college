import apiClient from './axios';

/**
 * ============================
 * Admin Authentication
 * ============================
 */

// Register admin
export const registerAdmin = async (adminData) => {
  // Use regular auth register with college userType (since admin is registered as college)
  return await apiClient.post('/auth/register', { ...adminData, userType: 'college' });
};

// Login admin
export const loginAdmin = async (credentials) => {
  // Use the special admin login endpoint that checks against .env variables
  return await apiClient.post('/admin/admin-login', credentials);
};

/**
 * ============================
 * Dashboard & User Management
 * ============================
 */

export const getAdminStats = () => apiClient.get('/admin/stats');
export const getAllUsers = () => apiClient.get('/admin/users');

/**
 * ============================
 * APPLICATION FLOW FUNCTIONS
 * ============================
 */

// Check if application exists for student
export const checkApplicationExists = (studId) => apiClient.get(`/applications/${studId}`);

// Create new application
export const createApplication = (data) => apiClient.post('/applications/', data);

// Get application by student ID
export const getApplicationByStudentId = (studId) => apiClient.get(`/applications/${studId}`);

// Update application
export const updateApplication = (studId, data) => apiClient.put(`/applications/${studId}`, data);

// Delete application
export const deleteApplication = (studId) => apiClient.delete(`/applications/${studId}`);

// Submit form to college
export const submitFormTocollege = (collegeId, studId, formId) => 
  apiClient.post(`/form/${collegeId}/${studId}/${formId}`);

// Get forms by student
export const getFormsByStudent = (studId) => apiClient.get(`/form/student/${studId}`);

// Get forms by college
export const getFormsBycollege = (collegeId) => apiClient.get(`/form/college/${collegeId}`);

// Track form
export const trackForm = (formId) => apiClient.get(`/form/track/${formId}`);

// Update form status
export const updateFormStatus = (formId, status) => 
  apiClient.put(`/form/${formId}?status=${status}`);

/**
 * ============================
 * ENHANCED APPLICATION FLOW
 * ============================
 */

// Handle complete application flow with scenarios
export const handleApplicationFlow = (studId, collegeId, applicationData = null) => {
  return apiClient.post('/api/application-flow', {
    studId,
    collegeId,
    applicationData
  });
  
};

// Update existing application (Scenario C)
export const updateExistingApplication = (studId, updateData) => {
  return apiClient.put(`/applications/${studId}`, updateData);
};

/**
 * ============================
 * college CRUD Operations
 * ============================
 */

// ✅ FIXED: Updated to match router.post('/college/by-auth/:authId')
export const addcollege = (data) => {
  return apiClient.post('/colleges/add', data);
};


export const addAmenities = (data) =>
  apiClient.post('/college/amenities/add', data);


export const addAlumni = (data) =>
  apiClient.post('/college/alumnus/add', data);


export const addOtherDetails = (data) =>
  apiClient.post('/college/other-details/add', data);

export const addFeesAndScholarships = (data) =>
  apiClient.post('/college/fees-scholarships/add', data);
export const addAcademics = (data) =>
  apiClient.post('/college/academics/add', data);

export const addFaculty = (data) => apiClient.post('/college/faculty/add', data);


export const addTechnologyAdoption = (data) =>
  apiClient.post('/college/technology-adoption/add', data);
export const getAcademicsById = (collegeId) =>
  apiClient.get(`/college/academics/${encodeURIComponent(collegeId)}`);
export const getOtherDetailsById = (collegeId) =>
  apiClient.get(`/college/other-details/${encodeURIComponent(collegeId)}`);
export const getTechnologyAdoptionById = (collegeId) =>
  apiClient.get(`/college/technology-adoption/${encodeURIComponent(collegeId)}`);
export const getSafetyAndSecurityById = (collegeId) =>
  apiClient.get(`/college/safety/${encodeURIComponent(collegeId)}`);
export const getInternationalExposureById = (collegeId) =>
  apiClient.get(`/college/international/${encodeURIComponent(collegeId)}`);



/**
 * ============================
 * Get / Update college Info
 * ============================
 */

export const getcollegeById = (collegeId) =>
  apiClient.get(`/colleges/${encodeURIComponent(collegeId)}`);

export const getcollegeById1 = (collegeId, config) =>
  apiClient.get(`/admin/college/${encodeURIComponent(collegeId)}`, config);

export const updatecollegeInfo = (collegeId, data) =>
  apiClient.put(`/admin/college/auth/${encodeURIComponent(collegeId)}`, data);

export const updatecollegetatus = (collegeId, newStatus) =>
  apiClient.put(`/admin/college/${encodeURIComponent(collegeId)}`, { status: newStatus });
export const getcollegesByStatus = (status) => getcollegeByStatus(status);

export const getcollegeByStatus = async (status) => {
  try {
    return await apiClient.get(`/admin/college/status/${encodeURIComponent(status)}`);
  } catch (error) {
    const message = error?.response?.data?.message || '';
    if (error?.response?.status === 500 && message.includes('No college found with status')) {
      return {
        data: {
          data: [],
          message,
          status: 'success'
        }
      };
    }
    throw error;
  }
};

export const getAllcollege = () => apiClient.get('/admin/college/status/all');
export const getPendingcollege = async () => {
  const candidates = [
    '/admin/college/admin/pending',
    '/admin/college/pending',
    '/admin/college/status/pending',
  ];
  let lastErr;
  for (const path of candidates) {
    try {
      const res = await apiClient.get(path, { headers: { 'X-Silent-Request': '1' } });
      return res;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('Failed to fetch pending college');
};

/**
 * ============================
 * Faculty, Admission, and Tech
 * ============================
 */

// ADD faculty


// GET faculty by collegeId
export const getFacultyById = (collegeId) =>
  apiClient.get(`/college/faculty/${encodeURIComponent(collegeId)}`);

// UPDATE faculty
export const updateFaculty = (collegeId, data) =>
  apiClient.put(`/college/faculty/${encodeURIComponent(collegeId)}`, data);

// DELETE faculty (optional)
export const deleteFaculty = (collegeId) =>
  apiClient.delete(`/college/faculty/${encodeURIComponent(collegeId)}`);


export const getAdmissionTimelineById = async (collegeId) => {
  try {
    return await apiClient.get(
      `/college/admission/${encodeURIComponent(collegeId)}`,
      {
        headers: { 'X-Silent-Request': '1' }
      }
    );
  } catch (e) {
    if (e?.response?.status === 404) return { data: null };
    throw e;
  }
};


/**
 * ============================
 * Media (Photos & Videos)
 * ============================
 */

export const getcollegePhotos = (collegeId) =>
  apiClient.get(`/admin/${encodeURIComponent(collegeId)}/photos`);
export const getcollegeVideos = (collegeId) =>
  apiClient.get(`/admin/${encodeURIComponent(collegeId)}/videos`);

export const uploadcollegePhotos = (collegeId, files) => {
  const formData = new FormData();
  Array.from(files).forEach((f) => formData.append('files', f));
  return apiClient.post(`/admin/${encodeURIComponent(collegeId)}/upload/photos`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const uploadcollegeVideo = (collegeId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  return apiClient.post(`/admin/${encodeURIComponent(collegeId)}/upload/video`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const deletecollegePhoto = (collegeId, publicId) =>
  apiClient.delete(`/admin/${encodeURIComponent(collegeId)}/photo/${encodeURIComponent(publicId)}`);
export const deletecollegeVideo = (collegeId, publicId) =>
  apiClient.delete(`/admin/${encodeURIComponent(collegeId)}/video/${encodeURIComponent(publicId)}`);

/**
 * ============================
 * Admin Profile & Password
 * ============================
 */

export const getAdminProfile = () => apiClient.get('/admin/profile');
export const updateAdminProfile = (profileData) =>
  apiClient.patch('/admin/profile', profileData);
export const changeAdminPassword = (passwordData) =>
  apiClient.patch('/admin/change-password', passwordData);

/**
 * ============================
 * Delete & Validation
 * ============================
 */

export const deleteUser = (userId) => apiClient.delete(`/admin/users/${userId}`);
export const deletecollege = (collegeId) => apiClient.delete(`/admin/college/${collegeId}`);

// More resilient existence check that won't crash the UI if the id isn't a college id
export const getcollegeByAuthId = async (authId) => {
  if (!authId) return { data: null };
  try {
    
    console.log(`🔍 Finding college by authId: ${authId}`);
    // ✅ FIXED: Matches router.get('/college/by-auth/:authId')
    const res = await apiClient.get(`/admin/college/auth/${encodeURIComponent(authId)}`, {
      headers: { 'X-Silent-Request': '1' }
    });
    console.log(`✅ Found college by authId:`, res?.data);
    return res;
  } catch (error) {
    const status = error?.response?.status;
    console.warn(`⚠️ college not found for authId ${authId}, status: ${status}`);
    if (status === 404 || status === 400 || status === 500) {
      return { data: null };
    }
    throw error;
  }
};

export const checkcollegeProfileExists = async (authId) => {
  if (!authId) return { data: null };
  try {
    const res = await getcollegeById(authId, { headers: { 'X-Silent-Request': '1' } });
    return res;
  } catch (error) {
    const status = error?.response?.status;
    if (status === 404 || status === 400 || status === 500) {
      // Treat as non-existent rather than throwing to callers
      return { data: null };
    }
    throw error;
  }
};

/**
 * ============================
 * college Sub-Data Retrieval
 * ============================
 */
export const addHostel = (data) =>
  apiClient.post('/college/hostel/add', data);

export const getHostelsByCollege = (collegeId) =>
  apiClient.get(`/college/hostel/${encodeURIComponent(collegeId)}`);

export const updateHostel = (hostelId, data) =>
  apiClient.put(`/college/hostel/${encodeURIComponent(hostelId)}`, data);

export const deleteHostel = (hostelId) =>
  apiClient.delete(`/college/hostel/${encodeURIComponent(hostelId)}`);
export const addExam = (data) =>
  apiClient.post('/college/exam', data);

export const getCollegeExams = (id) =>
  apiClient.get(`/college/exam/${encodeURIComponent(id)}`);
export const upsertCourseFee = (data) =>
  apiClient.post('/college/course-fee', data);

export const getCourseFeesByCollege = (collegeId) =>
  apiClient.get(`/college/course-fee/college/${encodeURIComponent(collegeId)}`);
export const addCourse = (data) =>
  apiClient.post('/college/course/add', data);

export const getCoursesByCollege = (collegeId) =>
  apiClient.get(`/college/courses/college/${encodeURIComponent(collegeId)}`);

export const updateCourse = (courseId, data) =>
  apiClient.put(`/college/course/${encodeURIComponent(courseId)}`, data);
export const addPlacement = (data) =>
  apiClient.post('/college/placement/add', data);

export const getPlacementsByCourse = (courseId) =>
  apiClient.get(`/college/placement/${encodeURIComponent(courseId)}`);

export const getPlacementsByCollege = (collegeId) =>
  apiClient.get(`/college/placement/college/${encodeURIComponent(collegeId)}`);

export const updatePlacement = (placementId, data) =>
  apiClient.put(`/college/placement/${encodeURIComponent(placementId)}`, data);
export const addScholarship = (data) =>
  apiClient.post('/college/scholarship/add', data);
export const getFeesAndScholarshipsById = (collegeId) => {
  return apiClient.get(`/admin/colleges/fees-scholarships/${encodeURIComponent(collegeId)}`);
};
export const getInfrastructureById = (collegeId) => {
  return apiClient.get(`/admin/colleges/infrastructure/${encodeURIComponent(collegeId)}`);
};
export const getScholarshipsByCollege = (collegeId) =>
  apiClient.get(`/college/scholarship/${encodeURIComponent(collegeId)}`);
export const addActivities = (data) =>
  apiClient.post('/college/activities/add', data);
export const getActivitiesByCollegeId = (collegeId) =>
  apiClient.get(`/college/activities/${collegeId}`);

export const getActivitiesByCollege = (collegeId) =>
  apiClient.get(`/college/activities/${encodeURIComponent(collegeId)}`);

export const updateActivities = (collegeId, data) =>
  apiClient.put(`/college/activities/${encodeURIComponent(collegeId)}`, data);

export const deleteActivities = (collegeId) =>
  apiClient.delete(`/college/activities/${encodeURIComponent(collegeId)}`);
export const addInfrastructure = (data) =>
  apiClient.post('/college/infrastructure/add', data);

export const getInfrastructureByCollege = (collegeId) =>
  apiClient.get(`/college/infrastructure/${encodeURIComponent(collegeId)}`);

export const updateInfrastructure = (collegeId, data) =>
  apiClient.put(`/college/infrastructure/${encodeURIComponent(collegeId)}`, data);

export const deleteInfrastructure = (collegeId) =>
  apiClient.delete(`/college/infrastructure/${encodeURIComponent(collegeId)}`);
export const addInternationalExposure = (data) =>
  apiClient.post('/college/international/add', data);

export const getInternationalExposureByCollege = (collegeId) =>
  apiClient.get(`/college/international/${encodeURIComponent(collegeId)}`);

export const updateInternationalExposure = (collegeId, data) =>
  apiClient.put(`/college/international/${encodeURIComponent(collegeId)}`, data);
export const addSafetyAndSecurity = (data) =>
  apiClient.post('/college/safety/add', data);

export const getSafetyByCollege = (collegeId) =>
  apiClient.get(`/college/safety/${encodeURIComponent(collegeId)}`);

export const updateSafetyByCollege = (collegeId, data) =>
  apiClient.put(`/college/safety/${encodeURIComponent(collegeId)}`, data);
export const addAdmissionTimeline = (data) =>
  apiClient.post('/college/admission/add', data);

export const getAdmissionTimelineByCollege = (collegeId) =>
  apiClient.get(`/college/admission/${encodeURIComponent(collegeId)}`);

export const updateAdmissionTimeline = (collegeId, data) =>
  apiClient.put(`/college/admission/${encodeURIComponent(collegeId)}`, data);

export const getAmenitiesByCollegeId = (collegeId) =>
  apiClient.get(`/college/amenities/${collegeId}`);
export const updateAmenities = (collegeId, data) =>
  apiClient.put(`/college/amenities/${collegeId}`, data);
export const updateOtherDetails = (collegeId, data) =>
  apiClient.put(`/college/other-details/${collegeId}`, data);
export const updateSafetyAndSecurity = (collegeId, data) =>
  apiClient.put(`/college/safety/${collegeId}`, data);

/**
 * ============================
 * Student Applications
 * ============================
 */

export const getStudentApplicationsBycollege = (collegeId) =>
  apiClient.get(`/applications?collegeId=${encodeURIComponent(collegeId)}`);

export const getStudentApplicationsBycollegeEmail = (collegeEmail) =>
  apiClient.get(`/applications?collegeEmail=${encodeURIComponent(collegeEmail)}`);

export const getAllStudentApplications = () =>
  apiClient.get('/applications');
export const getApprovedcolleges = () => getcollegeByStatus('approved');
export const getRejectedcolleges = () => getcollegeByStatus('rejected');
export const getPendingcolleges = () => getPendingcollege();
export const updatecollegeStatus = (collegeId, newStatus) =>
  apiClient.put(`/admin/college/${encodeURIComponent(collegeId)}`, { status: newStatus });
