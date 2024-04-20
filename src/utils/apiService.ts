import { API_BASE_URL } from "@/constants/api";
import { errorMessage } from "./toastMessages";
import utilService from "./utilService";
import localStorageService from "./locationStorageService";
import useAuthStore from "@/lib/authStore";

const apiService = {
  async get(endpoint: string, options?: any) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...(options?.token && { Authorization: `Bearer ${options.token}` }),
        },
      });
      const responseData = await response.json();
      return await this.handleResponse(response, responseData);
    } catch (error) {
      errorMessage(error);
      throw error;
    }
  },

  async post(endpoint: string, data: any, options?: any) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(options?.token && { Authorization: `Bearer ${options.token}` }),
        },
        body: JSON.stringify(data),
        ...options,
      });
      const responseData = await response.json();
      return await this.handleResponse(response, responseData);
    } catch (error) {
      errorMessage(error);
      throw error;
    }
  },

  async handleResponse(response: any, responseData: any) {
    const mutatedResponse = {
      ok: response.ok,
      status: response.status,
      header: response.headers,
      response: {
        code: response.status,
        message: responseData?.error ?? responseData?.message,
        errorCode: responseData?.statusCode,
      },
    };

    const data = {
      data: responseData?.data ?? responseData,
      pagination: responseData?.pagination ?? response?.pagination,
    };

    if (response.status === 401) {
      const { removeUserAuthentication } = useAuthStore.getState();
      removeUserAuthentication();
      redirectToLogin();

      // Clear local storage
      localStorageService.clear();

      return {
        ...mutatedResponse,
        data: !utilService.isEmpty(data) ? data : null,
      };
    }
    if (response.status === 500) {
      return {
        ...mutatedResponse,
        data: !utilService.isEmpty(data) ? data : null,
      };
    }
    if (response.ok) {
      return { ...mutatedResponse, data };
    } else {
      return {
        ...mutatedResponse,
        data: !utilService.isEmpty(data) ? data : null,
      };
    }
  },
};

const redirectToLogin = () => {
  window.location.href = "/login";
};

export default apiService;