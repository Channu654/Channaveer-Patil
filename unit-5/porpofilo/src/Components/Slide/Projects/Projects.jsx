import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { MainHeadingWrapper } from '../../Elements/Elements';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'scroll',
    padding: '100px 0 ',
  },
}));

const BridgeTwo = styled.div`
  padding-top: 150px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: 'https://miro.medium.com/max/1400/1*yOQ8pSfoUS2kwqdYQAzMWw.png',
    title: 'Travel website',
    //  type: 'Group project',
    description: 'orbitz.com',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'MaterialUI',
      // 'Node',
      // 'Express',
      // 'MongoDB',
    ],
    repoLink:
      'https://github.com/masai-course/channaveer_fw15_086/tree/master/Orbitz-main',
    demoLink: 'https://flourishing-praline-81efb4.netlify.app/',
    type: 'Group project',
    blogLink: '#',
    features: [
      'Signup and Login.',
      'A user can add a product to cart or to wishlist.',
      'A user can sort and filter.',
      'A user can order by filling in the required details',
      'Orders history can be viewer in profile page',
    ],
  },
  {
    img: 'https://miro.medium.com/max/1400/1*q5Ru3-Lcauh-ApXZn21yqA.png',
    title: 'Credobeauty',
    //  type: 'Group project',
    description: 'credobeauty',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink:
      'https://github.com/masai-course/channaveer_fw15_086/tree/master/Final_Credo_beauty-main/Final_Credo_beauty-main',
    demoLink: 'https://sweet-frangipane-048a3b.netlify.app/',
    type: 'Group project',
    blogLink: '#',
    features: [
      'Signup and Login.',
      'A user can add a product to cart or to wishlist.',
      'A user can sort and filter.',
      'A user can order by filling in the required details',
      'Orders history can be viewer in profile page',
    ],
  },
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id='projects'>
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}>
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
