import React from 'react';
import { router } from 'expo-router';
import { useApp } from '../context/AppContext';
import { isDemo } from '../lib/config';
import { Role } from '../lib/types';
import { EmptyState } from './ui';
export function RoleGate({role,children}:{role:Role;children:React.ReactNode}){const {profile,sessionReady}=useApp();if(isDemo)return <>{children}</>;if(!sessionReady)return <EmptyState title="Checking your workspace…" description="Verifying your signed-in account."/>;if(!profile)return <EmptyState icon="lock-closed-outline" title="This workspace is private" description="Sign in with your authorized account to continue." action="Sign in" onPress={()=>router.push('/auth')}/>;if(profile.role!==role)return <EmptyState icon="shield-checkmark-outline" title="A different seat at the table" description={`Your account does not have ${role} access. Ask the restaurant owner for the correct permissions.`} action="Back to your food" onPress={()=>router.push('/')}/>;return <>{children}</>;}
