/* eslint-disable @typescript-eslint/no-unused-vars */

const token = localStorage.getItem("token");
export const DeleteAdd = async (id: string) => {
    try {
  
      const response = await fetch(`https://test-backend-1xtc.onrender.com/api/deletecar/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
       return {success : false, message : data.message};
      }
      return {success : true, message : data.message};
  
    } catch (error) {
      return {success : false, message : "An Unknown Error Occurred During Deleting Car !"};
    }
  };
  