import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { FaHardHat, FaClipboardCheck, FaLeaf, FaMicroscope, FaChartLine, FaUserGraduate, FaCogs, FaDesktop, FaCarAlt, FaCertificate, FaReact, FaTrash } from 'react-icons/fa';
import './styles/Services.css';

const initialServices = [
  { id: 1, title: 'Health & Safety', icon: <FaHardHat /> },
  { id: 2, title: 'QMS Training', icon: <FaClipboardCheck />, subtitle: 'ISO-9001' },
  { id: 3, title: 'EMS Training', icon: <FaLeaf /> },
  { id: 4, title: 'ISO17025 (NABL)', icon: <FaMicroscope /> },
  { id: 5, title: 'Business Excellence', icon: <FaChartLine /> },
  { id: 6, title: 'Soft Skill', icon: <FaUserGraduate /> },
  { id: 7, title: 'Technical Skill', icon: <FaCogs /> },
  { id: 8, title: 'Computer Skill', icon: <FaDesktop /> },
  { id: 9, title: 'IATF16949', icon: <FaCarAlt /> },
  { id: 10, title: 'Certification Training', icon: <FaCertificate /> },
];

const Services = () => {
  const [services, setServices] = useState(initialServices);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newService, setNewService] = useState({ title: '', description: '', icon: <FaReact /> });
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevState => ({ ...prevState, [name]: value }));
  };

  const addService = () => {
    if (newService.title.trim() === '' || newService.description.trim() === '') {
      alert('Please fill out both fields.');
      return;
    }
    setServices(prevServices => [...prevServices, { id: prevServices.length + 1, title: newService.title, icon: newService.icon, subtitle: newService.description }]);
    setNewService({ title: '', description: '', icon: <FaReact /> });
    closeModal();
  };

  const removeService = (id) => {
    setServices(prevServices => prevServices.filter(service => service.id !== id));
  };

  return (
    <section id='services' className='services-section'>
      <h2 className='services-heading'>Services</h2>
      <div className='services-grid'>
        {services.map(service => (
          <div key={service.id} className="service-card" onClick={() => navigate(`/service/${service.id}`)}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            {service.subtitle && <p className="service-description">{service.subtitle}</p>}
            {showDelete && (
              <button
                className="remove-service-button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeService(service.id);
                }}
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button className='add-service-button' onClick={openModal}>Add Service</button>
        <button className='drop-service-button' onClick={() => setShowDelete(!showDelete)}>
          {showDelete ? 'Cancel' : 'Drop Service'}
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Training"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-heading">Add New Training</h2>
        <form className="modal-form">
          <label className="modal-label">
            Name:
            <input
              type="text"
              name="title"
              value={newService.title}
              onChange={handleInputChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            Description:
            <input
              type="text"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              className="modal-input"
            />
          </label>
        </form>
        <button onClick={addService} className="add-training-button">Add Training</button>
        <button onClick={closeModal} className="close-modal-button">Cancel</button>
      </Modal>
    </section>
  );
};

export default Services;
