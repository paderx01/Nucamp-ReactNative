import RenderCampsite from "../features/campsites/rendercampsite";

const CampsiteInfoScreen = (props) => {
  return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfoScreen;
