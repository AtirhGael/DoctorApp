import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Collapse, CollapseBody, CollapseHeader } from "accordion-collapse-react-native";

const UserPersInfo = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <Collapse
            isExpanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <CollapseHeader style={[styles.others, expanded ? {backgroundColor:'#f5efdb'}:null]}>
                <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                    <Image
                        source={require('../assets/person.png')}
                        style={[styles.image, {marginLeft:10, marginRight:8}]}
                    />
                    <Text style={{color: '#000'}}>
                    {' '+ 'Personal Informations' +' '}
                    </Text>
                </View>
                <View style={styles.dropArrowContainer} >
                    <Image
                        source={require('../assets/dropdown.png')}
                        style={[{height:20, width:20, resizeMode:'contain'}, expanded? {transform:[{rotateX:'180deg'}]}:null]}
                    />
                </View>
              </CollapseHeader>
              <CollapseBody style={styles.collapseBody}>
                
                <Text style={{fontWeight:'bold', color:'#ecce13', fontSize:16}}>Bio</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.dropCardText}>
                    fjadsh gopupuij ggouioyhjg ghhfuyt ghjiuyio iutuihjf jytyhgfhj ggsdgjhf cg dgdtr sr gdsggho iui hdbxcbxc rtef hio uytd fsbxbxcbcxcr cgsv hjtty etyf g vfasr frshg vgdshgkj hgytr fghjgygs t6 rfdsrtwwsrd hvbkguuy tytdtrd gvhj
                  </Text>
                  <TouchableOpacity>
                    <View style={styles.editContainer}>
                      <Image source={require('../assets/edit.png')} style={styles.imgEdit} />
                    </View>
                  </TouchableOpacity>
                </View>

                <Text style={{fontWeight:'bold', color:'#ecce13', fontSize:16}}>Email</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.dropCardText}>
                    doctor@email.com
                  </Text>
                  <TouchableOpacity>
                    <View style={styles.editContainer}>
                      <Image source={require('../assets/edit.png')} style={styles.imgEdit} />
                    </View>
                  </TouchableOpacity>
                </View>

                <Text style={{fontWeight:'bold', color:'#ecce13', fontSize:16}}>Speciality</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.dropCardText}>
                    Dentist
                  </Text>
                  <TouchableOpacity>
                    <View style={styles.editContainer}>
                      <Image source={require('../assets/edit.png')} style={styles.imgEdit} />
                    </View>
                  </TouchableOpacity>
                </View>
                
              </CollapseBody>
            </Collapse>
    )
}

export default UserPersInfo;

const styles = StyleSheet.create({
    others: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop:13,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    image: {
    height: 30,
    width: 30,
    },
    dropArrowContainer:{
        height:'100%',
        width:50,
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    collapseBody:{
      // borderWidth:2,
    //   height:325,
      width:'97%',
      alignSelf:'center',
      backgroundColor:'#fff',
      borderRadius:5,
      padding:16,
    },
    infoCard:{
      backgroundColor:'#f5efdb',
      padding:10,
      borderRadius:2,
      marginTop:4,
      marginBottom:10
    },
    dropCardText: {
      color:'#000'
    },
    imgEdit: {
      position:'absolute',
      height:18,
      width:18,
      resizeMode:'contain',
    },
    editContainer:{
      height:25,
      width:25,
      borderRadius:12.5,
      position:'absolute',
      bottom:-4,
      right:-4,
      backgroundColor:'#ccc',
      alignItems:'center',
      justifyContent:'center'
  }
});