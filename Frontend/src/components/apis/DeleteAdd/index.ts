
const token = localStorage.getItem("token");
export const DeleteAdd = async (id: string): Promise<void> => {
    try {
  
      const response = await fetch(`https://test-backend-1xtc.onrender.com/api/deletecar/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,

        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete Car Add');
      }
  
      window.location.reload();
    } catch (error) {
      console.error('Error while Car Add', error);
      throw new Error('Failed to delete Car Add');
    }
  };
  