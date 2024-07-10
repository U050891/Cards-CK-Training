import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePosts } from '../hooks/usePosts';
import PostCard from '../components/PostCard';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const posts = usePosts();

  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <TouchableOpacity
          key={post.id}
          onPress={() => navigation.navigate('Detail', { post })}
        >
          <PostCard post={post} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    paddingTop: 50,
  },
});