import React from 'react';
import { ScrollView, View } from 'react-native';
import PostList from './components/PostList';


export default function App() {
    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <PostList />
        </ScrollView>

    );
}
