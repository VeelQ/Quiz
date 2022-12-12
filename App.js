/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import * as React from 'react';

 import {
   ScrollView,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 
 import { NavigationContainer } from '@react-navigation/native';
 import { Button } from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { useState } from 'react';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { FlatList, RefreshControl } from 'react-native-gesture-handler';

 



 function Results ({navigation}) {

  const [reflesh, setReflesh] = useState(false)

  const pullMe = () =>{
    setReflesh(true)

    setTimeout(()=> {
      setReflesh(false)
    }, 10000)
 }
  

    const examples = [
      {
        Nick: 'Szymon',
        Point: '10/20',
        Type: 'test 1',
        Date: '21-11-2018',
      },
      {
        Nick: 'Vector',
        Point: '15/20',
        Type: 'test 2',
        Date: '18-11-2018',
      },
      {
        Nick: 'Marcin',
        Point: '18/20',
        Type: 'test 1',
        Date: '15-11-2018',
      },
      {
        Nick: 'Bartek',
        Point: '07/20',
        Type: 'test 4',
        Date: '11-12-2018',
      },
      {
        Nick: 'Wiktor',
        Point: '19/20',
        Type: 'test 2',
        Date: '26-08-2018',
      },
     ]

     headerComponent = () => {
      return(
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 85, height: 40, borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey"}}>
            <Text style={{textAlign: "center"}}>Nick</Text>
          </View>
          <View style={{width: 85, borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey"}}>
            <Text style={{textAlign: "center"}}>Point</Text>
          </View>
          <View style={{width: 85, borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey"}}>
            <Text style={{textAlign: "center"}}>Type</Text>
          </View>
          <View style={{width: 90, borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey"}}>
            <Text style={{textAlign: "center"}}>Date</Text>
          </View>
        </View>
      ) 
     }

     const oneExample = ( { item } ) => (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 85, height: 40, borderWidth: 1, borderColor: "black"}}>
          <Text style={{textAlign: "center"}}>{item.Nick}</Text>
        </View>
        <View style={{width: 85, borderWidth: 1, borderColor: "black"}}>
          <Text style={{textAlign: "center"}}>{item.Point}</Text>
        </View>
        <View style={{width: 85, borderWidth: 1, borderColor: "black"}}>
          <Text style={{textAlign: "center"}}>{item.Type}</Text>
        </View>
        <View style={{width: 90, borderWidth: 1, borderColor: "black"}}>
          <Text style={{textAlign: "center"}}>{item.Date}</Text>
        </View>
      </View>
     )


  return(
    <ScrollView
    refreshControl={
      <RefreshControl
      refleshing={true}
      />
    }
    >
    <View>
      <View style={styles.AlTabela}>
        <View style={{ marginTop: 40 }}>
          <FlatList
            ListHeaderComponent={headerComponent}
            data={examples}
            renderItem = {oneExample}
          /> 
        </View>
      </View>

    </View>
    </ScrollView>
  );
 }



 function Tests ({navigation}) {
  return(
    <View>
    <View  style={styles.pytania}>
      <Text style={styles.pytania_tekst}>Question 3 of 10</Text>
      <Text style={styles.czas}>Time: 28 sec</Text>
    </View>
    <Text>{"\n"}</Text>
    <View style={styles.bar}></View>
    <View style={styles.pytania}>
      <Text style={styles.question}>{"\n"}This is some example of long question to fill the content?</Text>
    </View>
    <View style={styles.pytania}>
      <Text style={styles.loremipsum}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy {"\n"}</Text>
    </View>
    <View style={styles.obwodka}>
    <View style={styles.test}>
      <View style={styles.answear}>
      <Button color={'grey'} title="Answer A"></Button>
      </View>
      <View style={styles.odp}>
      <Button color={'grey'} title="Answer C"></Button>
      </View>
    </View>
    <View style={styles.test2}>
      <View style={styles.answear}>
      <Button color={'grey'} title="Answer B"></Button>
      </View>
      <View style={styles.odp} >
      <Button color={'grey'} title="Answer D"></Button>
      </View>
      </View>
    </View>
    </View>
  );
 }
  
 
 
 function HomeScreen({ navigation }) {
   return (
       <ScrollView>
         <View>
         <View style={styles.containter}>
               <View style={styles.item}>
                 <Text style={styles.heder}>Title test #1</Text>
                 <Text style={styles.tagi} onPress={() => navigation.navigate("Test 1")}>{"\n"}#Tag1 #Tag2</Text>
                 <Text style={styles.tekst}>{"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lacus a eros ultrices finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est pharetra, pretium nisl quis, lobortis magna.{"\n"}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.heder}>Title test #2</Text>
                 <Text style={styles.tagi} onPress={() => navigation.navigate("Test 2")}>{"\n"}#Tag1 #Tag2</Text>
                 <Text style={styles.tekst}>{"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lacus a eros ultrices finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est pharetra, pretium nisl quis, lobortis magna.{"\n"}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.heder}>Title test #3</Text>
                 <Text style={styles.tagi} onPress={() => navigation.navigate("Test 3")}>{"\n"}#Tag1 #Tag2</Text>
                 <Text style={styles.tekst}>{"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lacus a eros ultrices finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est pharetra, pretium nisl quis, lobortis magna.{"\n"}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.heder}>Title test #4</Text>
                 <Text style={styles.tagi} onPress={() => navigation.push("Test 4")}>{"\n"}#Tag1 #Tag2</Text>
                 <Text style={styles.tekst}>{"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id lacus a eros ultrices finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est pharetra, pretium nisl quis, lobortis magna.{"\n"}</Text>
               </View>
               </View>
               <View style={styles.stopka}>
                 <Text style={styles.ranking}>Get to know your ranking results{"\n"}</Text>
                 <View style={styles.przycisk}>
                  <Button  title="check" onPress={() => navigation.navigate("Results")} />
                  {/* color={'blue'} */}
                 </View>
               </View>
               </View>
         </ScrollView>
   );
 }
 
 
 
 const Drawer = createDrawerNavigator();

 
 function App() {
   return (
    
     <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Results" component={Results} />
        <Drawer.Screen name="Test 1" component={Tests} />
        <Drawer.Screen name="Test 2" component={Tests} />
        <Drawer.Screen name="Test 3" component={Tests} />
        <Drawer.Screen name="Test 4" component={Tests} />
      </Drawer.Navigator>
     </NavigationContainer>
     
   );
 }
 
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   containter: {
     flex: 1,
     backgroundColor: '#fff',
     paddingTop: 10,
     paddingBottom: 40,
     paddingHorizontal: 20
   },
   item: {
     borderLeftWidth: 20,
     borderRightWidth: 1,
     borderTopWidth: 1,
     borderBottomWidth: 1,
     borderColor: 'black',
     marginTop: 40,
     padding: 15,
     
   },
   heder: {
     fontWeight: 'bold',
     fontSize: 20,
     color: "black",
   },
   tekst: {
     fontWeight: 'bold',
     fontSize: 12,
   },
   stopka: {
     flex: 1,
     backgroundColor: '#fff',
     paddingTop: 10,
     paddingBottom: 40,
     borderTopWidth: 1,
     borderBottomWidth: 1,
     borderColor: 'black',
   },
   ranking: {
     textAlign: 'center',
     fontSize: 20,
     fontWeight: 'bold'
   },
   przycisk: {
     paddingHorizontal: 140,
     textcolor: 'black',
   },
   Button: {
     color: 'black',
   },
   Tytul: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    backgroundColor: '#a8edf0',
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 1,
   },
   tagi: {
    color: '#193cff',
    fontWeight: 'bold',
   },
   pytania: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',

   },
   pytania_tekst: {
    fontSize: 20,
    color: 'black'
    
  
   },
   czas: {
    fontSize: 20,
    marginLeft: 'auto',
    color: 'black'
   },
   bar: {
    backgroundColor: 'grey',
    paddingHorizontal: 80,
    borderRadius: 10,
    paddingBottom: 0,
    paddingTop: 20,
    left: '10%',//40,
    width: '80%',
   },

   question: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
   },
   loremipsum: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
   },
   answear: {
    paddingHorizontal: 100,
    paddingTop: 0,
    right: 70
   },
   test: {
    flexDirection: 'row',
   },
   odp: {
    paddingTop: 0,
    right: 60,
   },
   test2: {
    flexDirection: 'row',
    paddingTop: 10,
   },
   obwodka: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    marginTop: 40,
    padding: 15,
   },
   AlTabela: {
    paddingHorizontal: 20,
    
   }
 });
 
 export default App;