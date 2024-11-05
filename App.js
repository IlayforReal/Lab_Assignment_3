import { StyleSheet, Text, View } from "react-native";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Register from './src/pages/Register';
import PasswordRecovery from "./src/pages/PasswordRecovery";
import Login from "./src/pages/Login";
import Profile from "./src/pages/Profile";
import ResetSuccess from "./src/pages/ResetSuccess";
import PasswordReset from "./src/pages/PasswordReset";



export default function  App() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <ResetSuccess/>
            
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles =  StyleSheet.create({
    safeArea: {
        flex:1,
    },
});