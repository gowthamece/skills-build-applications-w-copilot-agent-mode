import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://zany-fishstick-7vjqq5rj7r5cxpjw-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title text-primary">Workouts</h1>
        <ul className="list-group">
          {workouts.map(workout => (
            <li key={workout._id} className="list-group-item">
              <strong>{workout.name}</strong>: {workout.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workouts;
