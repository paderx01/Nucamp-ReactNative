import { useSelector } from "react-redux";
import { View, FlatList, Text } from "react-redux";
import { Avatar } from "react-native-elements";
import Loading from "../components/LoadingComponent";
import { baseURL } from "../shared/baseUrl";

const FavoritesScreen = ({ navigation }) => {
  const { campsitesArray, isLoading, errMess } = useSelector((state) => {
    campsites;
  });
  const favorites = useSelector((state) => state.favorites);
  if (isLoading) {
    return <Loading />;
    if (errMess) {
      return (
        <View>
          <Text>{errMess}</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={campsitesArray.filter((campsite) =>
          favorites.includes(campsite.id)
        )}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
};

export default FavortiesScreen;
