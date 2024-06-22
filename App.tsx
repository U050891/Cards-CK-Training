import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.title}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93CEFF',
    paddingTop: 50,
  },
  card: {
    backgroundColor: '#D5E9FA',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#0060CD',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    color: '#05002D',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});