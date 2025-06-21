import React from 'react';
import './clients.css';
import annaiLogo from '../../assets/images/Clients_images/annai_amritaa.jpg';
import sindhiLogo from '../../assets/images/Clients_images/sindhi_school.jpg';
import maruthamLogo from '../../assets/images/Clients_images/marutham_group.jpg';
import tnauLogo from '../../assets/images/Clients_images/agri_college.jpeg';
import ananyaLogo from '../../assets/images/Clients_images/nana_nani.jpg';
import sulurLogo from '../../assets/images/Clients_images/sulur_airport.jpg';

const clientData = [
  { name: "Annai Amritaa Apartments", logo: annaiLogo },
  { name: "Sindhi International School", logo: sindhiLogo },
  { name: "Marutham Group", logo: maruthamLogo },
  { name: "TNAU", logo: tnauLogo },
  { name: "Ananya's Nana Nani Homes", logo: ananyaLogo },
  { name: "Sulur Airport", logo: sulurLogo }
];

function Clients() {
  return (
    <div className="client-section">
      <h2 className="client-title">Our Clients</h2>
      <div className="client-slider">
        <div className="client-track">
          {clientData.concat(clientData).map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.logo} alt={client.name} />
              <p>{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
