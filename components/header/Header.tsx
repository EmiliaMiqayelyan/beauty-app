import React from "react";
import {View, Image} from "react-native"
import styles from "./header.style"

const Header = () => {
    return (
        <View>
            <Image
                style={styles.icons}
                source={require('@/assets/header-icon.png')}
            />
        </View>
    )
}

export default Header