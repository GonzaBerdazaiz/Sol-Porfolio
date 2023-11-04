import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PublicationsInfo } from "../../data";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Grid,
  Box,
} from "@chakra-ui/react";
import "./PubliCards.css";

const PubliCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleModal = (item) => {
    setSelectedCard(item);
    setIsModalOpen(!isModalOpen);
  };
  

  return (
    <div className="grid-three-columns">
      {PublicationsInfo.map((item, index) => {
        return (
          <div key={item.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flip-card-back">
                <h3 onClick={() => toggleModal(item)} style={{display:"flex", alignItems:'center', justifyContent:'center'}}>Want to see more?</h3>
              </div>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p style={{ fontSize: "16px", fontWeight: "600", margin: "0" }}>
                {item.title}
              </p>
              <h1 style={{ fontSize: "15px", margin: "0", color: "white" }}>
                {item.author}
              </h1>
            </a>
          </div>
        );
      })}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent backgroundColor="white" 
          maxW="1000px" 
          style={{
            margin:"auto",
            marginTop:'100px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}>
          <ModalHeader />
          <ModalCloseButton fontSize="lg" color='#124476'/>
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={1} margin="2% 0">
              <>
                <Box margin="10%" width="70%">
                  <Text fontSize="m" mb={2}>
                    {selectedCard &&
                      selectedCard.eng.map((paragraph, index) => (
                        <span key={index}>{paragraph}</span>
                      ))}
                  </Text>
                </Box>
                <Box margin="10%" width="70%">
                  <Text fontSize="m" mb={2}>
                    {selectedCard &&
                      selectedCard.spa.map((paragraph, index) => (
                        <h4 key={index}>{paragraph}</h4>
                      ))}
                  </Text>
                </Box>
              </>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PubliCards;
