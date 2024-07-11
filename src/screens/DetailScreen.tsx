import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Post } from '../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export default function DetailScreen({ route }: Props) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 20,
  },
  title: {
    color: '#E8E8E8',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    color: '#E8E8E8',
    fontSize: 18,
    lineHeight: 24,
  },
});