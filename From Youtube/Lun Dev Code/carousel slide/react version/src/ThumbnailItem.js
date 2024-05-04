export default function ThumbnailItem({ image, projectName, projectCategory }) {
  return (
    <div className="thumbnail-item">
      <img src={image} alt="thumbnail image" />
      <div className="content-wrapper">
        <div className="project-name"> {projectName}</div>
        <div className="project-category">{projectCategory} </div>
      </div>
    </div>
  );
}
