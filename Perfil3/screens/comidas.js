import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

function Comidas() {
    const comidasFavoritas = [
        { id: '1', nombre: 'Pizza' },
        { id: '2', nombre: 'Sushi' },
        { id: '3', nombre: 'Tacos' },
        { id: '4', nombre: 'Pasta' },
        { id: '5', nombre: 'Hamburguesa' },
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Comidas favoritas</Text>
            <FlatList
                data={comidasFavoritas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 18 }}>{item.nombre}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Comidas;