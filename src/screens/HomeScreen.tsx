import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import PostCard from '../components/PostCard';
import { RootStackParamList } from '../navigation/AppNavigator';
import { usePosts } from '../hooks/usePosts';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const { posts, getPosts, loading } = usePosts();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Posts"
          onPress={getPosts}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          loading={loading}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        posts.map(post => (
          <TouchableOpacity
            key={post.id}
            onPress={() => navigation.navigate('Detail', { post })}
          >
            <PostCard post={post} />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93CEFF',
    paddingTop: 50,
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});