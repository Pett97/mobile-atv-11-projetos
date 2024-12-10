import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import Project from "../types/Project";
import StyledButton from "./StyledButton";
import MYTHEME from "../styles/myTheme";
import myStyle from "./viewProject.style";

interface ViewProjectProps {
  project: Project;
  onDelete: Function;
}

export default function ViewProject({ project, onDelete }: ViewProjectProps) {
  const router = useRouter();

  return (
    <View
      style={myStyle.container}
    >
      <Text style={myStyle.text}>{project.nomeProjeto}</Text>
      <Text>
        <Text style={myStyle.text}>Responsavel :</Text> {project.responsavel}
      </Text>
      <Text>
        <Text style={myStyle.text}>Contato:</Text> {project.contato}
      </Text>
      <Text>
        <Text style={myStyle.text}>Endereco: </Text>
        {project.endereco}
      </Text>

      <View style={myStyle.containerAction}>
        <View style={{ flexDirection: "row" }}>
          <StyledButton
            title="Visualizar Detalhes"
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
    </View>
  );
}
