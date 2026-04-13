<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>resultado:</h1>
    </header>
    <main>
        <?php
        //pega os dados do form
         $nome = $_POST["nome"];
         $email = $_POST["email"];
         $telefone = $_POST["telefone"];
         $mensagem = $_POST["mensagem"];
        
         

         //conexão com banco de dados 
         //credencias do banco
         $servidor = "localhost"; // servidor local
         $usuario = "root";
         $senha = "Guedes06/";
         $banco = "landingPage";

         //conecntando com o mysql
         $conexao = mysqli_connect($servidor, $usuario, $senha, $banco);
            //verificando conexão
           if (!$conexao) {
                die("Conexão falhou: " . mysqli_connect_error());
            }else{
                echo"conexão realizada com sucesso!!";
            }
            
            // Os ? são "espaços" onde os valores serão colocados depois
         $stmt = $conexao ->prepare("INSERT INTO dados(nome, email, telefone, mensagem) VALUES (?, ? , ?, ?) "); //inserção de dados na tabela

            // Verifica se o prepare funcionou
         if (!$stmt) {
                die("Erro no prepare: " . $conexao->error);
            }
            // Ligando (bind) os valores às interrogações (?)
            // "ssss" Indica que todos os valores são do tipo string
         $stmt-> bind_param("ssss", $nome, $email, $telefone, $mensagem  );

         // Executando o comando (enviando para o banco)
         if($stmt->execute()){
            echo "Cadastrado realizado com sucesso!";
         }else{
            echo "Erro ao cadastrar" . $stmt ->error;
         }
         //fechar a conexão
         $stmt->close();
        

         
        ?>
    </main>
</body>
</html>