import React, { useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth, useSignUp } from "@clerk/expo";
import { useRouter } from "expo-router";
export default function SignUp() {

const { signUp, errors, fetchStatus } = useSignUp();
const {isSignedIn} = useAuth();

const router = useRouter();

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [code, setCode] = useState("");

const isLoading = fetchStatus === "fetching";

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      keyboardShouldPersistTaps="handled"
      className="bg-white"
    >
      <View className="flex-1 items-center justify-center px-6 py-12 bg-white">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-32 h-16 mb-8"
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-gray-800 mb-8">
          Create an account
        </Text>
        <Text className="text-gray-600 mb-8"> Find your perfect workspace</Text>
        <View className=" flex-row gap-3 mb-4">
          <TextInput
          className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          placeholder="First Name"
          autoCapitalize="words"
          value={firstName}
          onChangeText={setFirstName}
          />
          <TextInput
          className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          placeholder="Last Name"
          autoCapitalize="words"
          value={lastName}
          onChangeText={setLastName}
          />

        </View>
          <TextInput
          className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          />
          {errors.fields.emailAddress && (
            <Text className="text-red-500 mt-1">{errors.fields.emailAddress.message}</Text>
          )}
          <TextInput
          className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          />
          {errors.fields.password && (
            <Text className="text-red-500 mt-1">{errors.fields.password.message}</Text>
          )}

          <TouchableOpacity className="w-full bg-blue-600 rounded-xl items-center mb-4 " disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ):( <Text className="text-white font-bold text-base">Sign Up</Text>)}
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
