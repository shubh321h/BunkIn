import React from 'react';
import {Stack} from 'expo-router';
import {RoleGate} from '../../components/RoleGate';
export default function OwnerLayout(){return <RoleGate role="owner"><Stack screenOptions={{headerShown:false,contentStyle:{backgroundColor:'transparent'}}}/></RoleGate>;}
