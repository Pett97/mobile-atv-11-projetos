import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import Project from '../types/Project';
import StyledButton from "./StyledButton";

interface ViewProjectProps {
  project: Project;
  onDelete: Function;
}

export default function ViewProject({ project, onDelete }: ViewProjectProps) {
  const router = useRouter();

  return (
    <View
      style={{ borderTopColor: "darkblue", borderTopWidth: 1, marginTop: 12 }}
    >
      <Text>id: {project.id}</Text>
      <Text>Nome Projeto: {project.nomeProjeto}</Text>
      <Text>Responsavel : {project.responsavel}</Text>
      <Text>contato: {project.contato}</Text>
      <Text>Endereco: {project.endereco}</Text>

      <View style={{ flexDirection: "row" }}>
        <StyledButton
          title="Visualizar Detalhes Projeto"
          onPress={() => {
            if (project.id) {
              router.push(`/home/${project.id}/`);
            } else {
              Alert.alert(
                "View error",
                "Nao Foi Possivel Visualizar os dados do projeto!"
              );
            }
          }}
          style={{ width: "50%" }}
        />

        <StyledButton
          title="Delete"
          onPress={() => {
            if (project.id) {
              Alert.alert("Remover Projeto", "Confirmar ?", [
                {
                  text: "Sim",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "Não",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "não foi possivel demover projeto "
              );
            }
          }}
          style={{ width: "50%", backgroundColor: "darkred" }}
        />
      </View>
    </View>
  );
}
