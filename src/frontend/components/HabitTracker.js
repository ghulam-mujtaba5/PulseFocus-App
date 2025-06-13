

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../services/supabaseClient.js'; // Assuming supabaseClient.js is already set up

const HabitTracker = ({ taskName, taskDescription, onComplete, targetCount = 8, onDetailsChange }) => {
  const [progress, setProgress] = useState({ completed: false, count: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const [editableTaskDetails, setEditableTaskDetails] = useState({
    taskName,
    taskDescription,
    targetCount,
  });

  // Load habit progress from Supabase
  const loadProgressStatus = async () => {
    const { data, error } = await supabase
      .from('habits')
      .select('*')
      .eq('task_name', taskName)
      .single();

    if (error) {
      console.error('Error loading habit data:', error);
      return { completed: false, count: 0 };
    }

    return data ? { completed: data.completed, count: data.count } : { completed: false, count: 0 };
  };

  useEffect(() => {
    // Fetch the progress status when the component mounts
    const fetchProgress = async () => {
      const loadedProgress = await loadProgressStatus();
      setProgress(loadedProgress);
    };

    fetchProgress();
  }, [taskName]);

  const handleIncrement = useCallback(async (e) => {
    e.stopPropagation();
    if (progress.count < editableTaskDetails.targetCount) {
      const newCount = progress.count + 1;
      setProgress(prev => ({ ...prev, count: newCount }));

      // Update the habit progress in Supabase
      await supabase
        .from('habits')
        .upsert({ task_name: editableTaskDetails.taskName, count: newCount, completed: newCount >= editableTaskDetails.targetCount })
        .single();
    }
  }, [progress.count, editableTaskDetails.targetCount, editableTaskDetails.taskName]);

  const handleDecrement = useCallback(async (e) => {
    e.stopPropagation();
    if (progress.count > 0) {
      const newCount = progress.count - 1;
      setProgress(prev => ({ ...prev, count: newCount }));

      // Update the habit progress in Supabase
      await supabase
        .from('habits')
        .upsert({ task_name: editableTaskDetails.taskName, count: newCount, completed: newCount >= editableTaskDetails.targetCount })
        .single();
    }
  }, [progress.count, editableTaskDetails.targetCount, editableTaskDetails.taskName]);

  const handleComplete = useCallback(async (e) => {
    e.stopPropagation();
    const newCompletionStatus = !progress.completed;
    setProgress(prev => ({ ...prev, completed: newCompletionStatus }));

    // Update the habit completion status in Supabase
    await supabase
      .from('habits')
      .upsert({ task_name: editableTaskDetails.taskName, completed: newCompletionStatus, count: progress.count })
      .single();

    if (onComplete) onComplete(editableTaskDetails.taskName);
  }, [progress.completed, progress.count, editableTaskDetails.taskName, onComplete]);

  const handleDetailsEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleTaskDetailsChange = (e) => {
    const { name, value } = e.target;
    setEditableTaskDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveDetails = async () => {
    setIsEditing(false);
    if (onDetailsChange) onDetailsChange(editableTaskDetails.taskName, editableTaskDetails.taskDescription, editableTaskDetails.targetCount);

    // Save updated task details to Supabase
    await supabase
      .from('habits')
      .upsert({
        task_name: editableTaskDetails.taskName,
        task_description: editableTaskDetails.taskDescription,
        target_count: editableTaskDetails.targetCount,
        completed: progress.completed,
        count: progress.count,
      })
      .single();
  };

  const progressBarWidth = `${(progress.count / editableTaskDetails.targetCount) * 100}%`;

  const getButtonText = () => {
    if (editableTaskDetails.taskName.toLowerCase().includes('water')) {
      return progress.completed ? 'Completed' : 'Add a Glass';
    }
    return progress.completed ? 'Completed' : 'Add Progress'; // For other tasks
  };

  const styles = {
    habitCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      height: 'auto',
    },
    habitCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    },
    habitTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#333',
      marginBottom: '10px',
    },
    habitDescription: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '20px',
    },
    progressBarContainer: {
      width: '100%',
      backgroundColor: '#f3f3f3',
      borderRadius: '8px',
      height: '10px',
      marginBottom: '15px',
      position: 'relative',
    },
    progressBar: {
      height: '100%',
      borderRadius: '8px',
      transition: 'width 0.3s ease-in-out',
    },
    habitButton: {
      padding: '10px 20px',
      backgroundColor: progress.completed ? '#4caf50' : '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: progress.completed || progress.count >= editableTaskDetails.targetCount ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
      fontWeight: 'bold',
      pointerEvents: progress.completed || progress.count >= editableTaskDetails.targetCount ? 'none' : 'auto',
    },
    habitButtonText: {
      fontWeight: 'bold',
    },
    checkMark: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      color: progress.completed ? '#4caf50' : '#ccc',
      transition: 'color 0.3s ease',
    },
    countText: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
      fontWeight: '500',
    },
    editButton: {
      backgroundColor: '#f0f0f0',
      padding: '5px 10px',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '14px',
      marginTop: '10px',
    },
    input: {
      padding: '8px',
      margin: '5px 0',
      fontSize: '16px',
      width: '100%',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    saveButton: {
      backgroundColor: '#4caf50',
      padding: '10px 20px',
      borderRadius: '12px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    removeButton: {
      backgroundColor: '#ff6b6b',
      padding: '5px 10px',
      borderRadius: '12px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
      marginTop: '10px',
    }
  };

  return (
    <div
      style={{
        ...styles.habitCard,
        ...(progress.completed && styles.habitCardHover),
      }}
      onClick={handleComplete} // Card click toggles completion status
    >
      <div style={styles.checkMark}>{progress.completed ? '✔️' : ''}</div>

      {isEditing ? (
        <div>
          <input
            style={styles.input}
            name="taskName"
            value={editableTaskDetails.taskName}
            onChange={handleTaskDetailsChange}
            placeholder="Task Name"
          />
          <textarea
            style={styles.input}
            name="taskDescription"
            value={editableTaskDetails.taskDescription}
            onChange={handleTaskDetailsChange}
            placeholder="Task Description"
            rows="3"
          />
          <input
            style={styles.input}
            type="number"
            name="targetCount"
            value={editableTaskDetails.targetCount}
            onChange={handleTaskDetailsChange}
            placeholder="Target Count"
          />
          <button style={styles.saveButton} onClick={handleSaveDetails}>
            Save Details
          </button>
        </div>
      ) : (
        <>
          <h3 style={styles.habitTitle}>{editableTaskDetails.taskName}</h3>
          <p style={styles.habitDescription}>{editableTaskDetails.taskDescription}</p>

          {/* Display progress count */}
          <p style={styles.countText}>
            {progress.count} / {editableTaskDetails.targetCount}
          </p>

          {/* Progress Bar */}
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                backgroundColor: '#4caf50',
                width: progressBarWidth,
              }}
              aria-live="polite"
            />
          </div>

          {/* Button to increment progress */}
          <button
            style={styles.habitButton}
            onClick={handleIncrement}
            disabled={progress.completed || progress.count >= editableTaskDetails.targetCount}
            aria-label="Add progress"
          >
            <span style={styles.habitButtonText}>
              {getButtonText()}
            </span>
          </button>

          {/* Button to decrement/remove progress */}
          <button
            style={styles.removeButton}
            onClick={handleDecrement}
            disabled={progress.count <= 0}
            aria-label="Remove progress"
          >
            Remove Progress
          </button>

          {/* Edit button */}
          <button style={styles.editButton} onClick={handleDetailsEdit}>
            {isEditing ? 'Cancel' : 'Edit Details'}
          </button>
        </>
      )}
    </div>
  );
};

export default HabitTracker;
