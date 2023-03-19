$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
        $("#date").html(display_date)
    })
    



    // Escreva um evento, quando o botão Enviar for clicado
    $('#button').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('#text').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'text' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({

            //  tipo da requisição web
            type : 'POST',
            url: "/predict",

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(input_text),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){

                // extraia previsão e a URL do emoticon do resultado
                text_value = result.data.text_value
                emo_url = result.data.text_value_img_url

                //  atualize os elementos DOM
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");

                //  exiba-os

            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        