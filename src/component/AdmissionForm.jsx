import React, {useState} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const AdmissionForm = () => {
    
  const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    const [paymentDone, setPaymentDone] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(age < 18 || age > 65){
            alert('Age must be between 18 and 65 to enroll.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Invalid email address.');
          return;
        }

        const monthlyFee = paymentDone ? 500 : 0;
        const totalFee = monthlyFee;
    
        const enrollmentData = {
          name,
          age: parseInt(age),
          email,
          selectedBatch,
          totalFee,
          paymentDone,
        };

        try {
          const response = await fetch('http://localhost:8080/api/enroll', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(enrollmentData),
          });
    
          if (response.ok) {
            alert('Enrollment successful!');
          } else {
            const errorData = await response.json();
            alert(`Enrollment failed: ${errorData.message}`);
          }
        } catch (error) {
          console.error('Error during enrollment:', error);
        }

    }

    const handleCancel = () => {
      navigate('/');
    }

    return (
        <div className='wrapper'>
          <h2>Admission Form</h2>
          <form onSubmit={handleSubmit}>
          <div className='input-field'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>
              Name:
            </label>
            </div>

          <div className='input-field'>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
            <label>
              Age:
            </label>
          </div>
          
          <div className='input-field'>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
             <label>
              Email:
             </label>
            </div>
            
          <div className='input-field'>
          <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
            <label>
              Choose Batch:
            </label>
            </div>
          <div className='input-field'>
          <select value={paymentDone} onChange={(e) => setPaymentDone(e.target.value === 'true')}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>
               Payment Done:
            </label>
          </div>
          <div className='btn'>
            <button type="submit">Enroll</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
          </div>
          </form>
        </div>
      ); 
}

export default AdmissionForm
