import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Project from "./Project";
import '../styles/ProjectCarousel.css';

const ProjectCarousel = ({ projects }) => {
  return (
    
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 6000 }}
      >
      {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <Project
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
          link={project.link}
          link2={project.link2}
          width="60%"
        />
      </SwiperSlide>
      ))} 
          
      </Swiper>
    
  );
};

export default ProjectCarousel;
