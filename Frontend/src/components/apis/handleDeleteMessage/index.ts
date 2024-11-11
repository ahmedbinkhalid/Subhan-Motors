
  // Function to handle deleting a message using fetch API
export const handleDeleteMessage = async (id: string): Promise<void> => {
  try {

    const response = await fetch(`https://test-backend-1xtc.onrender.com/api/messages/${id}`, {
      method: 'DELETE', // Specify the method as DELETE
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete message');
    }

    window.location.reload();
  } catch (error) {
    console.error('Error while deleting message:', error);
    throw new Error('Failed to delete message');
  }
};
