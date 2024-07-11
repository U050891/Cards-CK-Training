import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Post } from '../types';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <BlurView intensity={39} tint="dark" style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#70EEFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 5,
  },
  title: {
    color: '#F5F5F5',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  body: {
    color: '#F5F5F5',
    fontSize: 16,
    lineHeight: 22,
  },
});

export default PostCard;