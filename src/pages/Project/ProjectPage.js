import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

import {MainProvider} from "../../Context/MainContext"
import MainNavbar from "../Main/MainNavbar";
import { ProjectProvider } from "../../Context/ProjectContext";
import Footer from "../../pages/Activity/Footer";

function ProjectPage() {
  return (
    <>
    <ProjectProvider>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
        <EntireBox />
      <Footer />
      </ProjectProvider>
    </>
  );
}

export default ProjectPage;
