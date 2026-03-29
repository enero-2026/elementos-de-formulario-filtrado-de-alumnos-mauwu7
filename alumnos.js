import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import {List, TouchableRipple, TextInput, Text} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Alumnos(){
  
  const [alumnos, setAlumnos] = useState([])
  const [buscaAlumno, setBuscaAlumno] = useState("")

  const ordenarAZ = () => {
    const alumnosOrdenados = [...alumnos]
    setAlumnos(alumnosOrdenados.sort((a,b) => {
      return a.nombre.localeCompare(b.nombre)
    }))
  }

  const ordenarApellido = () => {
    const alumnosOrdenados = [...alumnos]
    setAlumnos(alumnosOrdenados.sort((a,b) => {
      return a.apellidos.localeCompare(b.apellidos)
    }))
  }
  
  useEffect(()=> {
    setTimeout(()=>{
      setAlumnos([{
        nombre: 'SAMANTHA',
        apellidos: 'CANDELARIA MORA',
        matricula: '2114354'
        
      },
      {
        nombre: 'JAVIER',
        apellidos: 'CANTU SILVA',
        matricula: '2111889'
      },
      {
        nombre: 'ANGEL EMILIANO',
        apellidos: 'CARMONA LOZANO',
        matricula: '2069119'
        
      },
      {
        nombre: 'JORGE',
        apellidos: 'CASTILLO ACOSTA',
        matricula: '2132842'
      },
      {
        nombre: 'ALDO ADRIAN',
        apellidos: 'DAVILA GONZALEZ', 
        matricula: '1994122'
      },
      {
        nombre: 'FABRIZIO',
        apellidos: 'DURAN BARRIENTOS',
        matricula: '2018230'
      },
      {
        nombre: 'SEBASTIAN',
        apellidos:'FLORES GONZALEZ',  
        matricula: '21045641'
      },      
      {
        nombre: 'DIEGO',
        apellidos: 'FLORES LÓPEZ', 
        matricula: '2066033'
      },
      {
        nombre: 'ERICK ADRIAN',
        apellidos:'FLORES LÓPEZ',  
        matricula: '2132976'
      },
      {
        nombre: 'DIEGO',
        apellidos: 'GARZA AVALOS',
        matricula: '2066114'
      },
      {
        nombre: 'CHRISTIAN GABRIEL',
        apellidos: 'GONZALEZ OVALLE',
        matricula: '2031243'
      },
      {
        nombre: 'DIEGO',
        apellidos: 'GRANJA PEÑA', 
        matricula: '20647331'
      },
      {
        nombre: 'ALEXIS',
        apellidos: 'IBARRA RODRIGUEZ',  
        matricula: '20312431'
      },
      {
        nombre: 'ANGEL SEBASTIAN',
        apellidos: 'MARTINEZ ELIAS',
        matricula: '2064733'
      },
      {
        nombre: 'ESMERALDA GABRIELA',
        apellidos: 'MENDIETA GONZALEZ',
        matricula: '2094647'
      },
      {
        nombre: 'ALEJANDRO',
        apellidos: 'MIRELES VELAZQUEZ',
        matricula: '2005102'
      },
      {
        nombre: 'ANDRES',
        apellidos: 'MONSIVAIS SALAZAR', 
        matricula: '2064574'
      },
      {
        nombre: 'MARTHA JULIETA',
        apellidos: 'PARRAZALEZ VALDESPINO',
        matricula: '2024783'
      },
      {
        nombre: 'LUIS ANGEL',
        apellidos: 'PEÑA MUNGARRO', 
        matricula: '2066077'
      },
      {
        nombre: 'JULIO CESAR',
        apellidos:'PUENTE REYNOSO', 
        matricula: '2092151'
      },
      {
        nombre: 'BRYAN',
        apellidos: 'RAMIREZ LOPEZ',
        matricula: '2103708'
      },
      {
        nombre: 'LILIANA VALERIA',
        apellidos: 'RAMOS AVILA',
        matricula: '2115192'
      },
      {
        nombre: 'MAURICIO',
        apellidos: 'RICO JAUREGUI',
        matricula: '2037503'
      },
      {
        nombre: 'ADRIAN',
        apellidos: 'RIVERA LUNA',
        matricula: '2131513'
      },
      {
        nombre: 'JOSE EMILIO',
        apellidos: 'RIVERA REYNA',
        matricula: '2013503'
      },
      {
        nombre: 'ROSA ISELA',
        apellidos: 'RODRIGUEZ OLVERA',
        matricula: '2004613'
      },
      {
        nombre: 'ANGEL AZAEL',
        apellidos: 'RODRIGUEZ RODRIGUEZ',
        matricula: '2133022'
      },
      {
        nombre: 'JUAN CARLOS',
        apellidos: 'SANCHEZ GALARZA',
        matricula: '2026061'
      },
      {     
        nombre: 'ALFREDO',
        apellidos: 'SOLIS ORTIZ',
        matricula: '2095320'
      },
      {
        nombre: 'HERWIN DANIEL',
        apellidos: 'VELAZQUEZ ABREGO',
        matricula: '2025350'
      },
      {
        nombre: 'ANDRES NEHUEL',
        apellidos: 'VILLAGRA RODRIGUEZ',
        matricula: '2103895'
      },
      {
        nombre: 'RODRIGO',
        apellidos: 'ZAVALA CANTU',
        matricula: '1857791'
      },
      {
        nombre: 'TERESA MARGARITA',
        apellidos: 'ZAVALA CANTU',
        matricula: '2025218'
        
      }
    ])
    
  }, 2000)
  
  
}, []);

if(!alumnos.length){
  return(
    <Text>Cargando alumnos...</Text>
  )
}
if(alumnos.length ===0 ){
  return(
    <Text> No hay alumnos</Text>
  )
}

return(
  <>
    <TextInput placeholder={"Some text..."} value={buscaAlumno} onChangeText={(texto) => setBuscaAlumno(texto)}/>
    <List.Accordion title="Ordenar por: " left={props => <List.Icon {...props} icon="filter"/>}>
      <List.Item title="A/Z" onPress={ordenarAZ} left={props => <List.Icon {...props} icon="sort-alphabetical-descending-variant"/>}/>
      <List.Item title="Nombre/Apellido" onPress={ordenarApellido} left={props => <List.Icon {...props} icon="sort"/>}/>
    </List.Accordion>
      {buscaAlumno === "" ? 
      <FlatList data={alumnos} keyExtractor={(item) => item.matricula}
        renderItem={({ item }) => (
        <>
          <List.Item title={`${item.nombre} ${item.apellidos}`} description={item.matricula} left={( )=> <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
        </>
      )}/> : 
      <FlatList data={alumnos.filter((alumno) => alumno.nombre.includes(buscaAlumno.toUpperCase()) || alumno.apellidos.includes(buscaAlumno.toUpperCase()))} keyExtractor={(item) => item.matricula}
        renderItem={({item}) => (
        <>
          <List.Item title={`${item.nombre} ${item.apellidos}`} description={item.matricula} left={() => <MaterialIcons name="account-circle" size={40}></MaterialIcons>}></List.Item>
        </>
        )}
      />}
  </>
)
}