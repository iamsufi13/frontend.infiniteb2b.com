const styles = {
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
    },
    modal: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '400px',
      textAlign: 'center',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    errorList: {
      listStyleType: 'none',
      paddingLeft: '0',
      color: '#d9534f',
      textAlign: 'left',
      marginBottom: '20px',
    },
    errorItem: {
      marginBottom: '10px',
    },
    closeButton: {
      backgroundColor: '#d9534f',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };
export const ErrorModal = ({ errors, onClose }) => {
    return (
      <div style={styles.modalOverlay}>
        <div style={styles.modal}>
          <h2 style={styles.modalTitle}>Form Validation Errors</h2>
          <ul style={styles.errorList}>
            {Object.entries(errors).map(([field, error]) => (
              <li key={field} style={styles.errorItem}>{error}</li>
            ))}
          </ul>
          <button onClick={onClose} style={styles.closeButton}>Close</button>
        </div>
      </div>
    );
  };