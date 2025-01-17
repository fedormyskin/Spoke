import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProjectGridItem from "./ProjectGridItem";
import NewProjectGridItem from "./NewProjectGridItem";

const StyledProjectGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export default class ProjectGrid extends Component {
  static propTypes = {
    contextMenuId: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    newProjectUrl: PropTypes.string
  };

  render() {
    return (
      <StyledProjectGrid>
        {this.props.projects.map(project => (
          <ProjectGridItem key={project.id} project={project} contextMenuId={this.props.contextMenuId} />
        ))}
        {this.props.newProjectUrl && <NewProjectGridItem newProjectUrl={this.props.newProjectUrl} />}
      </StyledProjectGrid>
    );
  }
}
