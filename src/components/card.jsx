import { motion } from "framer-motion";

const Cards = ({ title, description, image, repoUrl, liveUrl }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <div className="card-image">
        <img 
          src={image || "/noimage.svg"} 
          alt={title}
          onError={(e) => {
            e.target.src = "/noimage.svg";
          }}
        />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      
      <div className="card-actions">
        <motion.a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button repository"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Repositório
        </motion.a>
        
        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button access"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Acesse
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Cards;
