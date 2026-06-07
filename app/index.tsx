import { useAuth } from "@clerk/expo";
import "../global.css";
import { Redirect } from "expo-router";

export default function Index() {

  const {isSignedIn, isLoaded} = useAuth();

  if(!isLoaded) return null;
  if(isSignedIn) return <Redirect href={"/(root)/(tabs)/" as any}  />;


  return <Redirect href={"/sign-in" as any}  />;

}
