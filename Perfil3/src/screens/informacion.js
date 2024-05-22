import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.jsonbin.io/v3/b/664d80d1acd3cb34a84bbc5a';

function Estudiantes() {
    const [estudiantes, setEstudiantes] = useState([
        {
            id: '1',
            nombre: 'Oscar Daniel',
            grado: 'Desarrollo de Software',
            carnet: '20190086',
            imagen: 'https://scontent.cdninstagram.com/v/t51.2885-19/194676406_163480605747061_1871992336343921882_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=a6H5KxbMw_kQ7kNvgEBwZ_M&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBTATCJvfkjZrslBh-GYHTpxl0835Bbx91sW3Zao_KKpw&oe=66533057&_nc_sid=10d13b',
        },
        {
            id: '2',
            nombre: 'Sarai Monterroza',
            grado: 'Desarrollo de Software',
            carnet: '20190288',
            imagen: 'https://scontent.cdninstagram.com/v/t51.2885-19/431624540_2045095042542986_4996804495196886906_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=UjFctUZW5CAQ7kNvgFq4KXm&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBqn2UJjfR8N8RB0KVnAT69qXxA3Dy6zf5cxT8er-nj9w&oe=66534081&_nc_sid=10d13b',
        },
    ]);

    useEffect(() => {
        const fetchEstudiantes = async () => {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const data = await response.json();
                    const dataestudiantes = data.record;
                    console.log('datos estudiantes obtenidos...');
                    setEstudiantes(dataestudiantes);
                } else {
                    console.error('usando datos locales...');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchEstudiantes();
    }, []);

    return (
        <View style={styles.container}>
            {estudiantes.map((estudiante) => (
                <View key={estudiante.id} style={styles.card}>
                    <Image source={{ uri: estudiante.imagen }} style={styles.image} />
                    <Text style={styles.nombre}>{estudiante.nombre}</Text>
                    <Text style={styles.grado}>{estudiante.grado}</Text>
                    <Text style={styles.carnet}>{estudiante.carnet}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: 300,
        padding: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    grado: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 5,
    },
    carnet: {
        fontSize: 16,
        color: 'gray',
    },
});

export default Estudiantes;
