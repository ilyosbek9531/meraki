import React from "react";
import styles from "./Projects.module.scss";
import { Button, Container } from "@mui/material";
import ProjectReusible from "Components/UI/ProjectsReusible/ProjectReusible";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

const Projects = () => {
  const { t } = useTranslation("common");
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Container>
      <div className={styles.projects}>
        <h2 className="title">Our projects</h2>
        <div className={styles.projects_content}>
          <p style={{color: mode === "dark" ? "#FFE900":"#EC3B3B"}}>A collection of projects we are proud of</p>
          <ProjectReusible />
          <div className={styles.projects_button}>
            <Link to="/projects">
              <Button variant="lighted">{t("projects")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
