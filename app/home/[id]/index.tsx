import { faker } from "@faker-js/faker";
import { Stack, useGlobalSearchParams } from "expo-router";
import { Alert, Text, View } from "react-native";

import HeaderRight from "../../../components/HeaderRight";
import Loading from "../../../components/Loading";
import StyledButton from "../../../components/StyledButton";
import useDocument from "../../../firebase/hooks/useDocument";
import globalStyles from "../../../styles/globalStyles";
import Project from "../../../types/Project";

export default function BookDetails() {
  const { id } = useGlobalSearchParams();

  // for convenience, you can extract data and rename it to "book" by typing data:your_alias_for_data
  const {
    data: project,
    loading,
    upsert,
  } = useDocument<Project>("projects", id as string);

  // important: always check for loading state since firestore is async!
  // Also, you can check for existence of book object so your type Book | undefined becomes a Book for sure
  if (loading || !project) return <Loading />;

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Projetos",
          headerRight: () => <HeaderRight />,
        }}
      />

      <Text style={globalStyles.title}>Detalhes Projeto</Text>

      <Text>id: {project.id}</Text>
      <Text>Nome Projeto: {project.nomeProjeto}</Text>
      <Text>Responsavel : {project.responsavel}</Text>
      <Text>contato: {project.contato}</Text>
      <Text>Endereco: {project.endereco}</Text>

      <StyledButton
        title="Random Update"
        onPress={async () => {
          try {
            await upsert({
              ...project, 
              nomeProjeto: faker.lorem.words(4), 
            });
          } catch (error: any) {
            Alert.alert("Atualizar Projeto erro", error.toString());
          }
        }}
      />
    </View>
  );
}
