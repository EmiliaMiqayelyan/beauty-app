import {Stack} from "expo-router";
import {SafeAreaView} from "react-native-web";
import {Footer, Header} from "../components";

const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <Header />
                    ),

                    headerRight: () => (
                        <Footer />
                    ),

                    headerTitle: ""
                }}
            >
                Home
            </Stack.Screen>
        </SafeAreaView>
    )
}

export default Home;