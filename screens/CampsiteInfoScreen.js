import RenderCampsite from "../features/campsites/rendercampsite";

const CampsiteInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfoScreen;
