import { View, Text } from 'react-native'

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;
    return (
        <View>
            <Text>Meals Overview Screen - {catId}</Text>
        </View>
    )
}

export default MealsOverviewScreen;