

  export const DeleteQuery = async (id: string): Promise<void> => {
    try {
  
      const response = await fetch(`http://localhost:5000/api/del-Query/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete Query');
      }
  
      window.location.reload();
    } catch (error) {
      console.error('Error while deleting Query:', error);
      throw new Error('Failed to delete Query');
    }
  };
  