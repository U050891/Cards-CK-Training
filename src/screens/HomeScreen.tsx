// src/screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image source={require('../../assets/asset-tr.png')} style={styles.headerImage} />
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
          <ActivityIndicator size="large" color="#66FFDA" />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#212121',
  },
  container: {
    flexGrow: 1,
    paddingTop: 50,
  },
  headerImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 400,
    height: 150,
    resizeMode: 'contain',
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    backgroundColor: '#79D7FF',
    padding: 15,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'
  },
});