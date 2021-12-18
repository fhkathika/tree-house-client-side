// import React, {useState}from 'react'
// import { View, Text, KeyboardAvoidingView, StyleSheet,TextInput } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { auth } from './firebase.config'

// import initializeApplication from './firebase.init'

// initializeApplication()
// export default function Login() {
//     const [email,setEmail]=useState('')
//     const[password,setPassword]=useState('')
//     const handleSignUp=()=>{
//         auth
//         .createUserWithEmailAndPassword(email,password)
//         .then(userCredentials =>{
//             const user=userCredentials.user
//             console.log(user.email)
//         })
//         .catch(error => alert(error.message))
//     }
//     return (
//         <KeyboardAvoidingView style={styles.container}>
//        <View style={styles.inputContainer}>
//           <TextInput 
//           placeholder='Email'
//           value={email}
//           onChangeText={text=>setEmail(text)}
//  style={styles.input}
//           />
//           <TextInput 
//           placeholder='Password'
//           value={password}
//           onChangeText={text=>setPassword(text)}
//  style={styles.input}
//  secureTextEntry
//           />
              
//         </View>
//         <View style={styles.buttonContainer}>
// <TouchableOpacity
// onPress={handleSignUp}
// style={styles.button}
// >
// <Text style={styles.buttonOutlineText}>Log in</Text>
// </TouchableOpacity>
// <TouchableOpacity
// onPress={()=>{}}
// style={styles.button}
// >
// <Text style={styles.buttonOutlineText}>Register</Text>
// </TouchableOpacity>
//         </View>
//         </KeyboardAvoidingView>
       
//     )
// }
// const styles=StyleSheet.create({
// container:{
//     flex:1,
//     justifyContent:'center',
//     alignContent:'center',
//     width:'50%',
//     margin:'auto'
// },
// inputContainer:{
// width:'80%'
// },
// input:{
// backgroundColor:'white',
// paddingHorizontal:15,
// paddingVertical:10,
// borderRadius:10,
// marginTop:5,
// },
// buttonContainer:{
//     width:'60%',
//     justifyContent:'center',
//     alignContent:'center',
//     marginTop:40,

// },
// buttonOutlineText:{
//     color:'white',
//     marginTop:5,
   
// }
// ,
// buttonOutline:{
//     backgroundColor:'white',
//     marginTop:5,
//     borderColor:'#6db33f',
//     borderWidth:1,
 


// },
// button:{
//     backgroundColor:'#6db33f',
//     width:'100%',
//     padding:15,
//     borderRadius:10,
//     alignItems:'center',
//     margin:5

// }
// })
