import { StyleSheet, View, Button } from "react-native"
import { useTheme } from '@/context/ThemeContext';


function DarkLight() {


    const { setThemeMode } = useTheme();

    return (

        <View style={styles.content}>

            <Button title="Dark" onPress={() => setThemeMode('dark')} />
            <Button title="Light" onPress={() => setThemeMode('light')} />

        </View>

    )
}

export default DarkLight


const styles = StyleSheet.create({
    content: {
        backgroundColor: 'red',
        padding: 12,
        gap: 12,
        flexDirection: 'row'

    },
})