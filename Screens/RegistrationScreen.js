import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

export default function RegistrationScreen() {

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const navigation = useNavigation();

  const onSubmit = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
    setLogin("")
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
    navigation.navigate("Home");
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <View style={styles.container}>
        {/* background */}
        <ImageBackground
          source={require("../assets/images/image-bg.jpg")}
          style={styles.imageBackground}
        >
          
          <View style={styles.wrapper}>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >

              <View style={styles.avatar}>
                <TouchableOpacity
                  style={styles.avatarBtn}
                  activeOpacity={0.8}
                >
                  <Image source={require("../assets/images/icon-add.png")}
                  >
                  </Image>
                </TouchableOpacity>
              </View>
           
              <View>
                <Text style={styles.formTitle}>Реєстрація</Text>
              </View>
              {/* form */}
              <View style={styles.form}>
                {/* input login */}
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusedLogin ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusedLogin ? '#FFFFFF' : "#F6F6F6",
                      color: "#212121",
                    }}
                    placeholder='Логін'
                    onFocus={() => { setIsFocusedLogin(true) }}
                    onBlur={() => setIsFocusedLogin(false)}
                    value={login}
                    onChangeText={setLogin}
                  />
                </View>
                {/* input email */}
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusedEmail ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusedEmail ? '#FFFFFF' : "#F6F6F6",
                      color: "#212121",
                    }}
                    placeholder="Адреса електронної пошти"
                    onFocus={() => setIsFocusedEmail(true)}
                    onBlur={() => setIsFocusedEmail(false)}
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                {/* input password */}
                <View style={{ position: "relative" }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusedPassword ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusedPassword ? "#FFFFFF" : "#F6F6F6",
                      color: "#212121",
                    }}
                    placeholder='Пароль'
                    secureTextEntry={!isVisiblePassword}
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    style={styles.btnToggle}
                    activeOpacity={0.8}
                    onPressIn={() => setIsVisiblePassword(true)}
                    onPressOut={() => setIsVisiblePassword(false)}
                  >
                    <Text style={styles.btnToggleText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                {/* btn sign up */}
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                >
                  <Text style={styles.btnTitle}>Зареєструватись</Text>
                </TouchableOpacity>
                {/* link */}
                <TouchableOpacity
                  style={styles.link}
                  activeOpacity={0.8}
                  onPress = {() => navigation.navigate("Login")}
                >
                  <Text style={styles.linkText}>
                    Вже є акаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>

            </KeyboardAvoidingView>

          </View>
        
        </ImageBackground>

      </View>

    </TouchableWithoutFeedback>  
  );
};

const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#ffffff',   
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  wrapper: {
    position: "relative",    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff"
  },

  avatar: {
    position: "absolute",
    top: 0,
    left: '50%',
    width: 120,
    height: 120,
    marginLeft: -60,
    marginTop: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  avatarBtn: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 0,
    right: 0,
    width: 25,
    height: 25,
    marginBottom: 12.5,
    marginRight: -12.5,
    color: "#FF6C00",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 15,    
  },

  formTitle: {
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#212121",  
  },

  form: {
    paddingHorizontal: 16,
  },

  input: {
    padding: 16,
    marginBottom: 16,    
    textAlign: 'left',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    borderWidth: 1,   
    borderRadius: 8,
  },

   btnToggle: {
    position: "absolute",
    top: 20,
    right: 16,   
  },

  btnToggleText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 25,
  },

  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    color: '#ffffff',
  },

  link: {
    alignItems: "center",
    marginBottom: 45,
  },

  linkText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
  },
});
