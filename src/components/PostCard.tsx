import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Post } from '../types';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PostCard;