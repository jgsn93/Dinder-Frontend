import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import { useState } from "react";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In">
        {(props) => (
          <SignIn {...props} setEmail={setEmail} setPassword={setPassword} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Profile" options={{ title: email }}>
        {(props) => <Profile {...props} email={email} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
